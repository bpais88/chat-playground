import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

interface Conversation {
  id: string;
  claudeInput: string;
  claudeResponse: string;
  openAIInput: string;
  openAIResponse: string;
  timestamp: number;
}

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()

  const [claudeInput, setClaudeInput] = useState('')
  const [openAIInput, setOpenAIInput] = useState('')
  const [claudeResponse, setClaudeResponse] = useState('')
  const [openAIResponse, setOpenAIResponse] = useState('')
  const [isLoading, setIsLoading] = useState({ claude: false, openai: false })
  const [darkMode, setDarkMode] = useState(false)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    loadConversations()
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const loadConversations = () => {
    const savedConversations = localStorage.getItem('conversations')
    if (savedConversations) {
      setConversations(JSON.parse(savedConversations))
    }
  }

  const saveConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      claudeInput,
      claudeResponse,
      openAIInput,
      openAIResponse,
      timestamp: Date.now(),
    }
    const updatedConversations = [...conversations, newConversation]
    setConversations(updatedConversations)
    localStorage.setItem('conversations', JSON.stringify(updatedConversations))
  }

  const loadConversation = (id: string) => {
    const conversation = conversations.find(conv => conv.id === id)
    if (conversation) {
      setClaudeInput(conversation.claudeInput)
      setClaudeResponse(conversation.claudeResponse)
      setOpenAIInput(conversation.openAIInput)
      setOpenAIResponse(conversation.openAIResponse)
      setSelectedConversation(id)
    }
  }

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

  const copyToOther = (source: 'claude' | 'openai') => {
    if (source === 'claude') {
      setOpenAIInput(claudeInput)
    } else {
      setClaudeInput(openAIInput)
    }
  }

  const AIPlayground = ({ 
    title, 
    input, 
    setInput, 
    response, 
    onSubmit, 
    isLoading, 
    color,
    copyToOther
  }) => (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-lg p-6`}>
      <h2 className={`text-2xl font-semibold mb-4 text-${color}-${darkMode ? '400' : '600'}`}>{title}</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <textarea
            className={`w-full p-2 border rounded resize-none ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
            rows={6}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Enter your message for ${title}`}
          ></textarea>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>{input.length} characters</span>
            <button
              type="button"
              onClick={() => copyToOther()}
              className={`text-${color}-${darkMode ? '400' : '500'} hover:text-${color}-${darkMode ? '300' : '600'}`}
            >
              Copy to other playground
            </button>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 bg-${color}-${darkMode ? '600' : '500'} text-white rounded hover:bg-${color}-${darkMode ? '700' : '600'} disabled:bg-${color}-${darkMode ? '800' : '300'}`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : `Send to ${title}`}
        </button>
      </form>
      <div className={`mt-6 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg`}>
        <h3 className="font-semibold mb-2">{title}'s Response:</h3>
        <p className="whitespace-pre-wrap">{response}</p>
      </div>
    </div>
  )

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen`}>
      <div className="container mx-auto px-4">
        <Head>
          <title>AI Chat Playground</title>
          <meta name="description" content="Compare Claude and OpenAI responses" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">AI Chat Playground</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-4 py-2 ${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'} rounded-full`}
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
              {session && (
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
          
          {!session ? (
            <div className="max-w-md mx-auto">
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme={darkMode ? "dark" : "default"}
              />
            </div>
          ) : (
            <>
              <div className="mb-6 flex justify-between items-center">
                <button
                  onClick={saveConversation}
                  className={`px-4 py-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded`}
                >
                  Save Conversation
                </button>
                <select
                  value={selectedConversation || ''}
                  onChange={(e) => loadConversation(e.target.value)}
                  className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                >
                  <option value="">Load Conversation</option>
                  {conversations.map((conv) => (
                    <option key={conv.id} value={conv.id}>
                      {new Date(conv.timestamp).toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AIPlayground
                  title="Claude"
                  input={claudeInput}
                  setInput={setClaudeInput}
                  response={claudeResponse}
                  onSubmit={handleClaudeSubmit}
                  isLoading={isLoading.claude}
                  color="blue"
                  copyToOther={() => copyToOther('claude')}
                />
                <AIPlayground
                  title="OpenAI"
                  input={openAIInput}
                  setInput={setOpenAIInput}
                  response={openAIResponse}
                  onSubmit={handleOpenAISubmit}
                  isLoading={isLoading.openai}
                  color="green"
                  copyToOther={() => copyToOther('openai')}
                />
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}