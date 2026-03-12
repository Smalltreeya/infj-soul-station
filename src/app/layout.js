import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'INFJ心灵驿站 - 找到理解你的灵魂',
  description: '一个温暖的INFJ群体社区，让每一个INFJ都能找到归属感，寻找世另我，分享内心世界',
  keywords: 'INFJ, 心灵驿站, MBTI, 心理健康, 社区, 世另我',
  authors: [{ name: 'INFJ心灵驿站' }],
  openGraph: {
    title: 'INFJ心灵驿站 - 找到理解你的灵魂',
    description: '一个温暖的INFJ群体社区，让每一个INFJ都能找到归属感',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-forest-50 via-mint-50 to-ocean-50 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
