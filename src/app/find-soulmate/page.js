'use client'

import { useState } from 'react'
import { Compass, Heart, Sparkles, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function FindSoulmate() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showMatch, setShowMatch] = useState(false)

  const questions = [
    {
      id: 1,
      question: '当你独处时，最喜欢做什么？',
      options: [
        { text: '阅读、写作、思考人生', value: 'A' },
        { text: '听音乐、艺术创作', value: 'B' },
        { text: '冥想、散步、观察自然', value: 'C' },
        { text: '整理思绪、规划未来', value: 'D' }
      ]
    },
    {
      id: 2,
      question: '面对冲突时，你会？',
      options: [
        { text: '先理解对方的感受', value: 'A' },
        { text: '寻找和谐的解决方案', value: 'B' },
        { text: '退一步，给自己空间思考', value: 'C' },
        { text: '分析问题的根源', value: 'D' }
      ]
    },
    {
      id: 3,
      question: '你最大的恐惧是什么？',
      options: [
        { text: '不被理解', value: 'A' },
        { text: '失去真实性', value: 'B' },
        { text: '无法实现理想', value: 'C' },
        { text: '失去连接和意义', value: 'D' }
      ]
    },
    {
      id: 4,
      question: '你理想的周末是？',
      options: [
        { text: '深度对话、探索思想', value: 'A' },
        { text: '艺术展览、文化活动', value: 'B' },
        { text: '独自充电、内心探索', value: 'C' },
        { text: '志愿活动、帮助他人', value: 'D' }
      ]
    },
    {
      id: 5,
      question: '你认为自己最强大的特质是？',
      options: [
        { text: '同理心和洞察力', value: 'A' },
        { text: '创造力和想象力', value: 'B' },
        { text: '深度思考能力', value: 'C' },
        { text: '理想主义和使命感', value: 'D' }
      ]
    }
  ]

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value })
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setTimeout(() => setShowMatch(true), 500)
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowMatch(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-mint-50 via-forest-50 to-ocean-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-mint-200 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-mint-600 hover:text-mint-800">
            ← 返回首页
          </Link>
          <h1 className="text-2xl font-bold text-mint-800 flex items-center">
            <Compass className="w-6 h-6 mr-2" />
            寻找世另我
          </h1>
          <div className="w-20"></div>
        </div>
      </header>

      {!showMatch ? (
        <>
          {/* Hero Section */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-mint-100 rounded-full mb-4">
                  <Users className="w-8 h-8 text-mint-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-mint-800 mb-4">
                ✨ 寻找与你灵魂共振的人
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                通过灵魂档案，找到与你振动频率相同的人<br/>
                在这个世界上，总有另一个人和你一样思考
              </p>
            </div>
          </section>

          {/* Progress Bar */}
          <section className="px-4 mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">探索进度</span>
                <span className="text-sm font-medium text-mint-600">
                  {currentStep + 1} / {questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-mint-400 to-forest-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </section>

          {/* Question Card */}
          <section className="px-4 pb-20">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-mint-200">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-mint-100 rounded-full mb-4">
                    <span className="text-xl font-bold text-mint-700">{currentStep + 1}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {questions[currentStep].question}
                  </h3>
                </div>

                <div className="space-y-3">
                  {questions[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        answers[questions[currentStep].id] === option.value
                          ? 'border-mint-500 bg-mint-50'
                          : 'border-gray-200 hover:border-mint-300 hover:bg-mint-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          answers[questions[currentStep].id] === option.value
                            ? 'bg-mint-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-gray-800">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inspirational Message */}
              <div className="mt-8 text-center">
                <Sparkles className="w-6 h-6 text-mint-500 mx-auto mb-2" />
                <p className="text-mint-700 italic">
                  "每个人都是独一无二的存在，<br/>但灵魂的共振让我们不再孤单。"
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Match Result */
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-mint-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-mint-100 to-forest-100 rounded-full mb-4">
                  <Zap className="w-10 h-10 text-mint-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-mint-800 mb-4">
                  🎉 找到你的世另我！
                </h2>
                <p className="text-lg text-gray-600">
                  基于你的灵魂档案，我们找到了与你高度契合的人
                </p>
              </div>

              {/* Match Card */}
              <div className="bg-gradient-to-br from-mint-50 to-forest-50 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-mint-200 rounded-full flex items-center justify-center text-4xl">
                      🌟
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-forest-800">灵魂伴侣 #2847</h3>
                      <span className="px-3 py-1 bg-mint-200 text-mint-700 rounded-full text-sm font-medium">
                        95% 匹配度
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      和你一样，TA也在寻找生命中的深层意义。TA热爱思考、充满同理心，
                      并且相信这个世界需要更多的理解和爱。
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-white rounded-full text-sm text-forest-700">
                        深度思考者
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-sm text-forest-700">
                        理想主义者
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-sm text-forest-700">
                        同理心强
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-sm text-forest-700">
                        创造力丰富
                      </span>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-2 bg-mint-600 text-white rounded-lg hover:bg-mint-700 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>发送共鸣</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 text-center border border-mint-200">
                  <p className="text-2xl font-bold text-mint-600">95%</p>
                  <p className="text-sm text-gray-600 mt-1">灵魂契合度</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-forest-200">
                  <p className="text-2xl font-bold text-forest-600">∞</p>
                  <p className="text-sm text-gray-600 mt-1">共同话题</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-ocean-200">
                  <p className="text-2xl font-bold text-ocean-600">100%</p>
                  <p className="text-sm text-gray-600 mt-1">理解度</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-8 py-3 border-2 border-mint-300 text-mint-700 rounded-lg hover:bg-mint-50 transition-colors"
                >
                  重新探索
                </button>
                <button className="px-8 py-3 bg-mint-600 text-white rounded-lg hover:bg-mint-700 transition-colors">
                  查看更多匹配
                </button>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-12 text-center">
              <Sparkles className="w-8 h-8 text-mint-500 mx-auto mb-4" />
              <p className="text-mint-700 italic">
                "在这个世界上，总有人和你一样<br/>
                用相似的方式思考，用相同频率振动"
              </p>
              <p className="text-mint-600 text-sm mt-2">— INFJ的世另我传说</p>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
