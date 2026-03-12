import Link from 'next/link'
import { Heart, Sparkles, MessageCircle, Star, BookOpen, Compass } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-forest-50 via-mint-50 to-ocean-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* 标题 */}
          <h1 className="text-5xl md:text-6xl font-bold text-forest-800 mb-6 animate-fade-in">
            INFJ心灵驿站
          </h1>
          
          {/* 副标题 */}
          <p className="text-2xl md:text-3xl text-mint-700 mb-4">
            欢迎回家，INFJ的旅人
          </p>
          
          {/* 描述 */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            在这里，找到理解你的灵魂
          </p>
          
          {/* CTA按钮 */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/garden" className="btn-primary text-lg">
              进入我的花园
            </Link>
            <Link href="/find-soulmate" className="btn-secondary text-lg">
              寻找世另我
            </Link>
          </div>
        </div>
        
        {/* 装饰元素 */}
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🌱</div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-20 left-20 text-4xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🌙</div>
      </section>

      {/* 每日一句 */}
      <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <Sparkles className="w-8 h-8 text-forest-500 mx-auto" />
          </div>
          <blockquote className="text-xl md:text-2xl text-forest-700 italic mb-4">
            "最深的爱，往往藏在最安静的时刻里。"
          </blockquote>
          <p className="text-gray-500">— INFJ的每日感悟</p>
        </div>
      </section>

      {/* 核心功能导航 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-forest-800 mb-12">
            探索心灵世界
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 我的花园 */}
            <Link href="/garden" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-md card-hover border-2 border-transparent group-hover:border-forest-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-forest-600" />
                  </div>
                  <h3 className="text-xl font-bold text-forest-800">我的花园</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  种植你的心灵花园，用每一次分享和成长浇灌属于你的植物
                </p>
                <div className="flex items-center text-forest-600 font-medium">
                  进入花园
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* 深海倾诉室 */}
            <Link href="/confession" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-md card-hover border-2 border-transparent group-hover:border-ocean-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-ocean-600" />
                  </div>
                  <h3 className="text-xl font-bold text-ocean-800">深海倾诉室</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  一个安全的匿名空间，倾诉你的内心，释放真实的自己
                </p>
                <div className="flex items-center text-ocean-600 font-medium">
                  开始倾诉
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* 寻找世另我 */}
            <Link href="/find-soulmate" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-md card-hover border-2 border-transparent group-hover:border-mint-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center mr-4">
                    <Compass className="w-6 h-6 text-mint-600" />
                  </div>
                  <h3 className="text-xl font-bold text-mint-800">寻找世另我</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  通过灵魂档案，找到与你振动频率相同的人
                </p>
                <div className="flex items-center text-mint-600 font-medium">
                  开始匹配
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* 灵感星图 */}
            <Link href="/star-map" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-md card-hover border-2 border-transparent group-hover:border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-800">灵感星图</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  记录你的灵感和梦想，在星空中留下属于你的光芒
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  查看星图
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* INFJ启示录 */}
            <Link href="/revelations" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-md card-hover border-2 border-transparent group-hover:border-amber-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-800">INFJ启示录</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  阅读、分享INFJ视角的生活思考和精神食粮
                </p>
                <div className="flex items-center text-amber-600 font-medium">
                  探索启示录
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* 心灵占卜 */}
            <Link href="/divination" className="group">
              <div className="bg-white rounded-2xl p-6 shadow-md card-hover border-2 border-transparent group-hover:border-pink-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-800">心灵占卜</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  每日INFJ能量指引，探索未知的自己
                </p>
                <div className="flex items-center text-pink-600 font-medium">
                  开始占卜
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 底部信息 */}
      <footer className="py-12 px-4 bg-forest-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <p className="text-2xl font-bold mb-2">INFJ心灵驿站 🌱</p>
            <p className="text-forest-200">在这里，找到理解你的灵魂</p>
          </div>
          <div className="text-forest-300 text-sm">
            <p>© 2026 INFJ心灵驿站 | 用爱构建的温暖社区</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
