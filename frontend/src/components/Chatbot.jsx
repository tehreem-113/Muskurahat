import React, { useEffect, useRef, useState } from 'react'
import { chatbotKnowledge, defaultBotReply } from '../data/mockData'

const STARTER_PROMPTS = [
  'Why do my gums bleed?',
  'How long should I brush?',
  'Is gutka bad for my teeth?',
]

function getBotReply(userText) {
  const lower = userText.toLowerCase()
  const match = chatbotKnowledge.find((entry) => entry.keywords.some((k) => lower.includes(k)))
  return match ? match.reply : defaultBotReply
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Assalam-o-Alaikum! I'm Muskaan's AI assistant. Ask me anything about oral hygiene, or tap a suggestion below." },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const send = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((m) => [...m, { from: 'user', text: trimmed }])
    setInput('')
    setTyping(true)

    // Simulated "thinking" delay to feel like a real assistant call
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: getBotReply(trimmed) }])
      setTyping(false)
    }, 900)
  }

  return (
    <>
      {/* Floating toggle bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-dusty text-cream shadow-xl shadow-navy/20 flex items-center justify-center text-2xl hover:bg-navy transition-all hover:scale-105"
        aria-label="Open Muskaan AI assistant"
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-cream border border-lilac rounded-3xl shadow-2xl shadow-navy/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-dusty text-cream px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-cream/20 flex items-center justify-center text-lg">🦷</div>
            <div>
              <p className="font-display font-600 leading-tight">Muskaan Assistant</p>
              <p className="text-xs text-cream/80">Guidance, not a diagnosis</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="chat-scroll flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.from === 'user'
                      ? 'bg-navy text-cream rounded-br-sm'
                      : 'bg-lilac/50 text-navy rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-lilac/50 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-dusty rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-dusty rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-dusty rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Starter prompts */}
          {messages.length < 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="text-xs bg-lilac/40 hover:bg-lilac/70 text-navy px-3 py-1.5 rounded-full transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input) }}
            className="border-t border-lilac p-3 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-lilac/20 focus:bg-lilac/40 rounded-full px-4 py-2.5 text-sm text-navy outline-none placeholder:text-navy/40"
            />
            <button
              type="submit"
              className="w-10 h-10 shrink-0 rounded-full bg-dusty hover:bg-navy text-cream flex items-center justify-center transition-colors"
              aria-label="Send message"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  )
}
