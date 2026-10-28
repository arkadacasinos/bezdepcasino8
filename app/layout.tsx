import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark bg-[#0a0d12]">
      <head>
        <meta name="yandex-verification" content="2b25f879955d713d" />
        <title>Бездепозитные бонусы казино за регистрацию — актуальные бездепы 2026</title>
        <meta
          name="description"
          content="Актуальные бездепозитные бонусы за регистрацию в проверенных онлайн казино. Честный обзор, эксклюзивный бездепозитный бонус казино, правила отыгрыша, фриспины и свежие бездепы без первого депозита."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://bezdepcasino8.vercel.app/" />
        <meta name="theme-color" content="#0a0d12" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bezdepcasino8.vercel.app/" />
        <meta property="og:title" content="Бездепозитные бонусы казино за регистрацию — актуальные бездепы 2026" />
        <meta
          property="og:description"
          content="Эксклюзивные бездепозитные бонусы и фриспины за регистрацию без депозита. Забирайте лучший бездеп бонус и играйте онлайн."
        />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Бездепозитные бонусы казино за регистрацию — бездепы 2026" />
        <meta
          name="twitter:description"
          content="Полный рейтинг: бездепозитный бонус за регистрацию, свежие бездепы казино, быстрые выплаты."
        />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased bg-[#0a0d12] text-white selection:bg-[#f6a83b] selection:text-black">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
