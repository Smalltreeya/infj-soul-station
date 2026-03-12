'use client'

import { useState } from 'react'
import { MessageCircle, Send, Heart, Lock, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Confession() {
  const [confessions, setConfessions] = useState([
    {
      id: 1,
      content: '有时候我觉得自己像是在深海中，周围都是水，却找不到可以呼吸的空气。INFJ的孤独，大概就是这样吧...',
      time: '2小时前',
      hearts: 12,
      isAnonymous: true
    },
    {
      id: 2,
      content: '今天终于鼓起勇气拒绝了那个不适合我的机会。虽然有点害怕，但我知道这是对的。INFJ需要学会说"不"。',
      time: '5小时前',
      hearts: 28,
      isAnonymous: true
    },
    {
      id: 3,
      content: '有时候我会想，如果我也能像其他人一样，不用想那么多，会不会更快乐？但后来发现，正是因为想得多，我才能理解那么多，感受那么多。这就是INFJ的礼物。',
      time: '昨天',
      hearts: 45,
      isAnonymous: true
    }
  ])

  const [newConfession, setNewConfession] = useState('')

  const handleSubmitConfession = () => {
    if (newConfession.trim()) {
      setConfessions([
        {
          id: confessions.length + 1,
          content: newConfession,
          time: '刚刚',
          hearts: 0,
          isAnonymous: true
        },
        ...confessions
      ])
      setNewConfession('')
    }
  }

  const handleHeart = (id) => {
    setConfessions(
      confessions.map((c) =>
        c.id === id ? { ...c, hearts: c.hearts + 1 } : c
      )
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-700 text-white">
      {/* Header */}
      <header className="border-b border-ocean-600/50 py-4 px-4 bg-ocean-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-ocean-200 hover:text-white">
            ← 返回首页
          </Link>
          <h1 className="text-2xl font-bold flex items-center">
            <MessageCircle className="w-6 h-6 mr-2" />
            深海倾诉室
          </h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ocean-600/50 rounded-full mb-4">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌊 这里是你的安全深海
          </h2>
          <p className="text-lg text-ocean-200 max-w-2xl mx-auto mb-6">
            在这片深海中，你可以放下所有的伪装<br/>
            匿名倾诉你的内心，释放真实的自己
          </p>
          <div className="flex items-center justify-center gap-2 text-ocean-300 text-sm">
            <Lock className="w-4 h-4" />
            <span>完全匿名 · 安全保密 · 只有你能看到</span>
          </div>
        </div>
      </section>

      {/* New Confession Input */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-ocean-800/50 backdrop-blur-sm rounded-2xl p-6 border border-ocean-600/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-ocean-600/50 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-ocean-200" />
                </div>
              </div>
              <div className="flex-1">
                <textarea
                  value={newConfession}
                  onChange={(e) => setNewConfession(e.target.value)}
                  placeholder="在深海中，倾诉你的心声..."
                  className="w-full bg-transparent border-none outline-none resize-none text-white placeholder-ocean-400 text-lg"
                  rows={4}
                />
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2 text-ocean-300 text-sm">
                    <Lock className="w-4 h-4" />
                    <span>匿名发布</span>
                  </div>
                  <button
                    onClick={handleSubmitConfession}
                    disabled={!newConfession.trim()}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${
                      newConfession.trim()
                        ? 'bg-mint-500 text-white hover:bg-mint-600'
                        : 'bg-ocean-700 text-ocean-400 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>投入深海</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confessions List */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {confessions.map((confession) => (
              <div
                key={confession.id}
                className="bg-ocean-800/30 backdrop-blur-sm rounded-2xl p-6 border border-ocean-600/20 hover:border-ocean-500/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-ocean-600/50 rounded-full flex items-center justify-center">
                      <span className="text-xl">👤</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-ocean-300 text-sm">匿名INFJ</span>
                      <span className="text-ocean-500 text-xs">·</span>
                      <span className="text-ocean-400 text-xs">{confession.time}</span>
                    </div>
                    <p className="text-white leading-relaxed whitespace-pre-wrap">
                      {confession.content}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => handleHeart(confession.id)}
                        className="flex items-center gap-2 text-ocean-300 hover:text-mint-400 transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                        <span>{confession.hearts}</span>
                      </button>
                      <button className="flex items-center gap-2 text-ocean-300 hover:text-ocean-100 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>回应</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Inspirational Message */}
          <div className="mt-12 text-center">
            <Sparkles className="w-8 h-8 text-ocean-400 mx-auto mb-4" />
            <p className="text-ocean-300 italic">
              "在深海中，我们都是孤独的鲸鱼，<br/>
              但正是这份孤独，让我们能听到彼此的歌声。"
            </p>
            <p className="text-ocean-400 text-sm mt-2">— INFJ的深海物语</p>
          </div>
        </div>
      </section>
    </main>
  )
}
