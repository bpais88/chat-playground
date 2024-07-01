import { NextApiRequest, NextApiResponse } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient({ req, res })

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return res.status(401).json({
      error: 'not_authenticated',
      description: 'The user does not have an active session or is not authenticated',
    })

  // Check if it's a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message } = req.body

    // TODO: Implement actual OpenAI API call here
    // For now, we'll just echo the message back with a prefix
    const response = `OpenAI: ${message}`

    // Save the conversation to Supabase
    const { data, error } = await supabase
      .from('conversations')
      .insert({ user_id: session.user.id, message, response, ai_model: 'openai' })

    if (error) throw error

    res.status(200).json({ response })
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing your request' })
  }
}