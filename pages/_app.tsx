// import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps<{
  initialSession: Session
}>) {
  const [supabase] = useState(() => createPagesBrowserClient())

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        // handle sign in event
        console.log('User signed in:', session?.user)
      } else if (event === 'SIGNED_OUT') {
        // handle sign out event
        console.log('User signed out')
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  return (
    <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}