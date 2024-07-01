import { useState } from 'react'
import Head from 'next/head'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()

  const [claudeInput, setClaudeInput] = useState('')
  const [openAIInput, setOpenAIInput] = useState('')
  const [claudeResponse, setClaudeResponse] = useState('')
  const [openAIResponse, setOpenAIResponse] = useState('')
  const [isLoading, setIsLoading] = useState({ claude: false, openai: false })

  const handleClaudeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading({ ...isLoading, claude: true })
    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: claudeInput }),
      })
      const data = await response.json()
      setClaudeResponse(data.response)
    } catch (error) {
      console.error('Error calling Claude API:', error)
      setClaudeResponse('An error occurred while processing your request.')
    }
    setIsLoading({ ...isLoading, claude: false })
  }

  const handleOpenAISubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading({ ...isLoading, openai: true })
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: openAIInput }),
      })
      const data = await response.json()
      setOpenAIResponse(data.response)
    } catch (error) {
      console.error('Error calling OpenAI API:', error)
      setOpenAIResponse('An error occurred while processing your request.')
    }
    setIsLoading({ ...isLoading, openai: false })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>AI Chat Playground</title>
        <meta name="description" content="Compare Claude and OpenAI responses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">AI Chat Playground</h1>
        
        {!session ? (
          <div className="max-w-md mx-auto">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          </div>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sign Out
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Claude</h2>
                <form onSubmit={handleClaudeSubmit}>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows={4}
                    value={claudeInput}
                    onChange={(e) => setClaudeInput(e.target.value)}
                    placeholder="Enter your message for Claude"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
                    disabled={isLoading.claude}
                  >
                    {isLoading.claude ? 'Sending...' : 'Send to Claude'}
                  </button>
                </form>
                <div className="mt-4 p-4 bg-gray-100 rounded">
                  <h3 className="font-semibold mb-2">Claude's Response:</h3>
                  <p>{claudeResponse}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">OpenAI</h2>
                <form onSubmit={handleOpenAISubmit}>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows={4}
                    value={openAIInput}
                    onChange={(e) => setOpenAIInput(e.target.value)}
                    placeholder="Enter your message for OpenAI"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-300"
                    disabled={isLoading.openai}
                  >
                    {isLoading.openai ? 'Sending...' : 'Send to OpenAI'}
                  </button>
                </form>
                <div className="mt-4 p-4 bg-gray-100 rounded">
                  <h3 className="font-semibold mb-2">OpenAI's Response:</h3>
                  <p>{openAIResponse}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}