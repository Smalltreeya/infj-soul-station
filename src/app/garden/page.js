'use client'

import { useState } from 'react'
import { Heart, Plus, Droplets, Sun, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Garden() {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: '勇气之花',
      emoji: '🌻',
      growth: 75,
      plantedDate: '2026-03-10',
      description: '每一次勇敢面对恐惧，这朵花就会成长'
    },
    {
      id: 2,
      name: '理解之树',
      emoji: '🌳',
      growth: 40,
      plantedDate: '2026-03-08',
      description: '当我理解他人时，它会长高一点'
    },
    {
      id: 3,
      name: '自我接纳之草',
      emoji: '🌿',
      growth: 90,
      plantedDate: '2026-03-01',
      description: '接纳自己的不完美，让它茁壮成长'
    }
  ])

  const [showPlantModal, setShowPlantModal] = useState(false)
  const [newPlant, setNewPlant] = useState({
    name: '',
    emoji: '🌱',
    description: ''
  })

  const emojiOptions = ['🌱', '🌸', '🌻', '🌺', '🌹', '🌳', '🌿', '🍀', '🌷', '🌼']

  const handleAddPlant = () => {
    if (newPlant.name.trim()) {
      setPlants([
        ...plants,
        {
          id: plants.length + 1,
          ...newPlant,
          growth: 0,
          plantedDate: new Date().toISOString().split('T')[0]
        }
      ])
      setNewPlant({ name: '', emoji: '🌱', description: '' })
      setShowPlantModal(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-forest-50 via-mint-50 to-ocean-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-forest-200 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-forest-600 hover:text-forest-800">
            ← 返回首页
          </Link>
          <h1 className="text-2xl font-bold text-forest-800 flex items-center">
            <Heart className="w-6 h-6 mr-2" />
            我的花园
          </h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Garden Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Sun className="w-12 h-12 text-amber-500 mx-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              🌱 你的心灵花园正在茁壮成长
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              每一次成长、每一次感悟，都会让你的花园更加美丽
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-forest-600">{plants.length}</p>
              <p className="text-gray-600 mt-1">植物数量</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-mint-600">
                {Math.round(plants.reduce((acc, p) => acc + p.growth, 0) / plants.length)}%
              </p>
              <p className="text-gray-600 mt-1">平均成长度</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-ocean-600">∞</p>
              <p className="text-gray-600 mt-1">爱的能量</p>
            </div>
          </div>

          {/* Plants Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{plant.emoji}</div>
                  <h3 className="text-xl font-bold text-forest-800">{plant.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    种植于 {plant.plantedDate}
                  </p>
                </div>
                
                <p className="text-gray-600 text-center mb-4 min-h-[3rem]">
                  {plant.description}
                </p>

                {/* Growth Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">成长度</span>
                    <span className="font-medium text-forest-600">{plant.growth}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-forest-400 to-mint-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${plant.growth}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-ocean-100 text-ocean-700 py-2 px-4 rounded-lg hover:bg-ocean-200 transition-colors">
                    <Droplets className="w-4 h-4" />
                    <span>浇水</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-amber-100 text-amber-700 py-2 px-4 rounded-lg hover:bg-amber-200 transition-colors">
                    <Sun className="w-4 h-4" />
                    <span>阳光</span>
                  </button>
                </div>
              </div>
            ))}

            {/* Add New Plant Card */}
            <button
              onClick={() => setShowPlantModal(true)}
              className="bg-white/50 border-2 border-dashed border-forest-300 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-forest-500 hover:bg-white transition-all min-h-[340px]"
            >
              <Plus className="w-12 h-12 text-forest-400 mb-4" />
              <p className="text-xl font-medium text-forest-600">种植新的心灵种子</p>
              <p className="text-sm text-gray-500 mt-2">为你的成长种下一颗种子</p>
            </button>
          </div>

          {/* Inspirational Quote */}
          <div className="bg-gradient-to-r from-forest-100 to-mint-100 rounded-2xl p-8 text-center">
            <Sparkles className="w-8 h-8 text-forest-500 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl text-forest-700 italic mb-4">
              "每一颗种子都藏着一片森林的梦想，就像每一个INFJ都藏着改变世界的力量。"
            </blockquote>
            <p className="text-forest-600">— 继续浇灌你的花园吧 ✨</p>
          </div>
        </div>
      </section>

      {/* Add Plant Modal */}
      {showPlantModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-forest-800 mb-6">种植新的心灵种子 🌱</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  给它起个名字
                </label>
                <input
                  type="text"
                  value={newPlant.name}
                  onChange={(e) => setNewPlant({ ...newPlant, name: e.target.value })}
                  placeholder="例如：勇气之花"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  选择植物
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => setNewPlant({ ...newPlant, emoji })}
                      className={`text-3xl p-2 rounded-lg transition-all ${
                        newPlant.emoji === emoji
                          ? 'bg-forest-100 scale-110'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  它代表什么？
                </label>
                <textarea
                  value={newPlant.description}
                  onChange={(e) => setNewPlant({ ...newPlant, description: e.target.value })}
                  placeholder="例如：每一次勇敢面对恐惧，这朵花就会成长"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  rows={3}
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowPlantModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                取消
              </button>
              <button
                onClick={handleAddPlant}
                className="flex-1 px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700"
              >
                种下种子
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
