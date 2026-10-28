import React from 'react'
import Image from 'next/image'

const REF_URL = 'https://1579.sparksvale.com/ru/registration?partner=p1579p41618p7603'

// Winners feed data
const WINNERS_FEED = [
  { game: 'Big Bass Bonanza', user: 'user***07', win: '10 000 ₽', icon: '🐟', color: 'from-amber-600 to-orange-700' },
  { game: 'Big Bass Splash', user: 'user***18', win: '5 605 ₽', icon: '🎣', color: 'from-indigo-600 to-purple-800' },
  { game: 'Bee Keeper', user: 'user***30', win: '1 046 ₽', icon: '🐝', color: 'from-yellow-600 to-amber-700' },
  { game: 'Sun of Egypt', user: 'user***61', win: '450 ₽', icon: '☀️', color: 'from-orange-600 to-red-700' },
  { game: 'Olympus Rivals', user: 'user***19', win: '1 031 ₽', icon: '⚡', color: 'from-blue-600 to-indigo-800' },
  { game: 'Big Bass Secrets', user: 'user***07', win: '630 ₽', icon: '🐠', color: 'from-amber-700 to-yellow-800' },
  { game: 'Pilot', user: 'user***22', win: '1 084 ₽', icon: '✈️', color: 'from-violet-600 to-fuchsia-800' },
  { game: 'Lucky Charms', user: 'mi**i', win: '680 ₽', icon: '🍀', color: 'from-emerald-600 to-teal-800' },
  { game: 'Sugar Bonanza', user: 'ro**a', win: '437 ₽', icon: '🍬', color: 'from-pink-600 to-rose-700' },
  { game: 'Big Bass Rush', user: 'user***94', win: '1 400 ₽', icon: '🦈', color: 'from-amber-600 to-orange-800' },
]

// Navigation categories
const CATEGORIES = [
  { name: 'Слоты', icon: '🎰', href: REF_URL, badge: null },
  { name: 'Горячие', icon: '🔥', href: REF_URL, badge: 'HOT' },
  { name: 'Новые', icon: '✨', href: REF_URL, badge: 'NEW' },
  { name: 'Топ', icon: '💎', href: REF_URL, badge: null },
  { name: 'Претенденты', icon: '🏆', href: REF_URL, badge: null },
  { name: 'Отыгрыш бонуса', icon: '🎁', href: REF_URL, badge: null },
  { name: 'Джекпот', icon: '💰', href: REF_URL, badge: 'MAX' },
  { name: 'Лайв', icon: '♠️', href: REF_URL, badge: null },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white flex flex-col selection:bg-[#f6a83b] selection:text-black">
      {/* Top Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0e1218]/95 border-b border-[#1b222d] backdrop-blur-sm">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Left: Panda Logo + Search Bar */}
          <div className="flex items-center gap-3 sm:gap-5 flex-1 min-w-0">
            <a
              href={REF_URL}
              className="flex items-center gap-2 group flex-shrink-0"
              aria-label="Главная бездепозитные бонусы казино"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1b2330] to-[#0a0d14] border border-[#2a3444] flex items-center justify-center text-xl shadow-inner group-hover:border-[#f6a83b] transition-colors">
                🐼
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-extrabold text-base tracking-wide text-white leading-none">
                  BEZDEP<span className="text-[#f6a83b]">CASINO</span>
                </span>
                <span className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase mt-0.5">
                  Официальный портал
                </span>
              </div>
            </a>

            {/* Search Input Box (Desktop) */}
            <div className="relative flex-1 max-w-md hidden md:block">
              <a
                href={REF_URL}
                className="w-full flex items-center gap-2.5 bg-[#141922] hover:bg-[#181f2a] border border-[#222c3b] hover:border-[#324055] rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors"
              >
                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Искать игры, слоты, бездепозитные бонусы...</span>
              </a>
            </div>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={REF_URL}
              className="z9k2-pill-btn px-4 sm:px-5 py-2 rounded-xl text-sm font-semibold bg-[#1a222e] hover:bg-[#222c3d] text-zinc-200 border border-[#293548] hover:border-[#3a4b66]"
            >
              Вход
            </a>
            <a
              href={REF_URL}
              className="z9k2-pill-btn z9k2-glow-orange px-4 sm:px-6 py-2 rounded-xl text-sm font-bold bg-[#f6a83b] hover:bg-[#ffb44a] text-black shadow-lg"
            >
              Регистрация
            </a>
          </div>
        </div>
      </header>

      {/* Main Container with Sidebar + Hero */}
      <div className="max-w-[1600px] mx-auto w-full flex-1 flex flex-col lg:flex-row px-2 sm:px-4 lg:px-6 py-4 gap-4">
        {/* Left Vertical App Rail (Desktop) */}
        <aside className="hidden lg:flex flex-col gap-3 w-14 flex-shrink-0">
          <div className="flex flex-col items-center gap-2 py-3 bg-[#111620] border border-[#1b2330] rounded-2xl">
            {[
              { icon: '🎯', label: 'Миссии' },
              { icon: '🎁', label: 'Бездеп бонусы' },
              { icon: '📥', label: 'Скачать' },
              { icon: '👑', label: 'VIP клуб' },
              { icon: '🎀', label: 'Акции', alert: true },
              { icon: '🛍️', label: 'Магазин' },
              { icon: '📢', label: 'Новости' },
              { icon: '🎲', label: 'Турниры' },
              { icon: '🎰', label: '777' },
              { icon: '🔥', label: 'Топ' },
            ].map((btn, i) => (
              <a
                key={i}
                href={REF_URL}
                title={btn.label}
                className="relative w-10 h-10 rounded-xl flex items-center justify-center text-lg hover:bg-[#1a222f] hover:text-[#f6a83b] text-zinc-400 transition-colors group"
              >
                <span>{btn.icon}</span>
                {btn.alert && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 z9k2-live-dot" />
                )}
              </a>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0 flex flex-col gap-4">
          {/* Hero Promo Row (Screen 2 1-to-1 match) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            {/* Primary Hero Banner (Panda + 225% + 1500FS) */}
            <div className="md:col-span-7 lg:col-span-7 bg-[#022317] border border-[#0d4f39] rounded-2xl sm:rounded-3xl p-5 sm:p-7 relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[330px]">
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#084b33] via-[#032317] to-[#01140d]" />

              {/* Panda Mascot aligned strictly to bottom-right without overflowing text or payment bar */}
              <div className="absolute right-0 bottom-0 w-[170px] sm:w-[250px] lg:w-[290px] h-[220px] sm:h-[280px] pointer-events-none select-none z-10 flex items-end justify-end">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/panda-portrait.png"
                    alt="Бездепозитный бонус панда с деньгами"
                    fill
                    priority
                    className="object-contain object-bottom-right drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                  />
                  {/* Subtle fade overlay on bottom so it merges naturally with card edge */}
                  <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#022317] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Banner Text Details */}
              <div className="relative z-20 max-w-[210px] sm:max-w-[320px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d4533] border border-[#18644b] text-[#22c55e] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] z9k2-live-dot" />
                  ТОП БОНУС КАЗИНО
                </div>
                <div className="text-sm sm:text-base font-extrabold uppercase text-white tracking-wide mt-1 drop-shadow">
                  БОНУС
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#00e87d] leading-[1.05] drop-shadow-md mt-0.5">
                  ДО 225% <span className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold">+1500ФС</span>
                </h1>
                <p className="text-xs sm:text-sm text-zinc-200 font-semibold mt-1 drop-shadow">
                  на первый депозит и бездепозитные бонусы
                </p>

                {/* Primary CTA Button */}
                <div className="mt-4 sm:mt-6">
                  <a
                    href={REF_URL}
                    className="z9k2-pill-btn z9k2-glow-orange px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-[#f6a83b] hover:bg-[#ffb347] text-black font-black text-sm sm:text-base tracking-wide shadow-2xl"
                  >
                    Забрать бонус
                  </a>
                </div>
              </div>

              {/* Payment Methods Badges Row */}
              <div className="relative z-20 mt-6 pt-3 border-t border-[#0f4f3a]/80 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-semibold text-zinc-200 drop-shadow max-w-[210px] sm:max-w-none">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="text-base font-bold">❇</span> сбп
                </span>
                <span className="flex items-center gap-1.5 text-teal-300">
                  <span className="w-3.5 h-3.5 rounded-full border border-teal-300 flex items-center justify-center text-[10px]">✓</span> Pay
                </span>
                <span className="flex items-center gap-1 font-black tracking-wider text-emerald-300 text-sm">
                  МИР
                </span>
                <span className="flex items-center gap-1 text-red-400">
                  ▲ TRON
                </span>
                <span className="flex items-center gap-1 text-teal-400">
                  ₮ tether
                </span>
              </div>
            </div>

            {/* Secondary Promo: МИССИИ */}
            <div className="hidden sm:flex md:col-span-3 lg:col-span-3 bg-gradient-to-b from-[#151a24] to-[#0c1017] border border-[#20293a] rounded-2xl sm:rounded-3xl p-5 relative overflow-hidden flex-col justify-end min-h-[260px] sm:min-h-[300px] group hover:border-[#384865] transition-all">
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                <Image
                  src="/images/missions-target.png"
                  alt="Миссии и задания казино"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#f6a83b] bg-black/40 px-2 py-0.5 rounded-md inline-block mb-1">
                  Ежедневно
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white drop-shadow">
                  МИССИИ
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">Выполняй квесты и забирай бездеп</p>
                <a
                  href={REF_URL}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#f6a83b] hover:underline"
                >
                  Перейти в миссии →
                </a>
              </div>
            </div>

            {/* Tertiary Promo: МАГАЗИН БОНУСОВ */}
            <div className="hidden md:flex md:col-span-2 lg:col-span-2 bg-gradient-to-b from-[#151a24] to-[#0c1017] border border-[#20293a] rounded-2xl sm:rounded-3xl p-5 relative overflow-hidden flex-col justify-end min-h-[260px] sm:min-h-[300px] group hover:border-[#384865] transition-all">
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                <Image
                  src="/images/bonus-shop.png"
                  alt="Магазин бонусов казино"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-black/40 px-2 py-0.5 rounded-md inline-block mb-1">
                  Store
                </span>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-white leading-tight drop-shadow">
                  МАГАЗИН БОНУСОВ
                </h3>
                <a
                  href={REF_URL}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#f6a83b] hover:underline"
                >
                  Открыть магазин →
                </a>
              </div>
            </div>
          </section>

          {/* Live Winners Ticker Strip */}
          <section className="bg-[#0e131b] border border-[#1b2330] rounded-2xl p-2.5 overflow-hidden">
            <div className="flex items-center gap-2 mb-2 px-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 z9k2-live-dot" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Сейчас выигрывают в слотах
              </span>
            </div>
            <div className="flex items-center gap-2.5 overflow-x-auto z9k2-hide-scrollbar pb-1">
              {WINNERS_FEED.map((item, idx) => (
                <a
                  key={idx}
                  href={REF_URL}
                  className="flex items-center gap-2.5 bg-[#141a24] hover:bg-[#1a2230] border border-[#202938] hover:border-[#2f3d54] rounded-xl px-3 py-1.5 flex-shrink-0 transition-colors"
                >
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-base shadow flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-zinc-400 font-medium truncate max-w-[80px]">
                      {item.user}
                    </span>
                    <span className="text-xs font-extrabold text-[#00e87d] leading-none mt-0.5">
                      {item.win}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Search bar on mobile */}
          <div className="block md:hidden">
            <a
              href={REF_URL}
              className="w-full flex items-center gap-2.5 bg-[#141922] border border-[#222c3b] rounded-xl px-4 py-2.5 text-xs text-zinc-400"
            >
              <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Искать игры, слоты, бездепозитные бонусы...</span>
            </a>
          </div>

          {/* Categories Navigation Bar (Matching Screen 2 Bottom Bar) */}
          <nav className="flex items-center justify-between gap-2 bg-[#0e131b] border border-[#1b2330] rounded-2xl p-2 overflow-x-auto z9k2-hide-scrollbar">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {CATEGORIES.map((cat, i) => (
                <a
                  key={i}
                  href={REF_URL}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-[#18202d] transition-colors whitespace-nowrap"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  {cat.badge && (
                    <span className="text-[9px] font-black uppercase px-1 py-0.2 rounded bg-[#f6a83b] text-black">
                      {cat.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
            <a
              href={REF_URL}
              className="z9k2-pill-btn hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1a2332] hover:bg-[#232e42] text-zinc-200 border border-[#27344a] flex-shrink-0"
            >
              <span>🎲</span>
              <span>Провайдеры</span>
            </a>
          </nav>

          {/* Quick CTA Banner between First Screen & SEO Text */}
          <div className="bg-gradient-to-r from-[#171f2c] via-[#1a2333] to-[#171f2c] border border-[#28364d] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#f6a83b]/10 border border-[#f6a83b]/30 flex items-center justify-center text-2xl flex-shrink-0">
                🎁
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-white">
                  Эксклюзивный бездепозитный бонус за регистрацию
                </div>
                <div className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  Активируйте фриспины и реальные деньги на баланс прямо сейчас без пополнения счета!
                </div>
              </div>
            </div>
            <a
              href={REF_URL}
              className="z9k2-pill-btn z9k2-glow-orange w-full sm:w-auto px-6 py-3 rounded-xl bg-[#f6a83b] hover:bg-[#ffb347] text-black font-extrabold text-sm whitespace-nowrap"
            >
              Забрать бездеп →
            </a>
          </div>

          {/* SEO Text Section below First Screen: ~350-400 words containing all keywords in H2 & body */}
          <article
            id="seo-article"
            className="bg-[#0e131b] border border-[#1b2330] rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-zinc-300 flex flex-col gap-6"
          >
            {/* Header Block with primary keywords */}
            <div className="border-b border-[#1b2330] pb-5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-3">
                Бездепозитные бонусы и бездепозитный бонус за регистрацию в онлайн казино
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Современные азартные клубы предлагают игрокам уникальную возможность начать игру без вложений.
                Самым востребованным поощрением среди гемблеров заслуженно являются{' '}
                <strong className="text-white font-bold">бездепозитные бонусы</strong>. Это реальные средства
                или бесплатные вращения, которые начисляются на баланс сразу после создания профиля. Получить
                желанный <strong className="text-white font-bold">бездепозитный бонус</strong> можно за пару
                минут, просто заполнив базовую анкету и подтвердив контактные данные.
              </p>
            </div>

            {/* Subsection 1 */}
            <div id="bezdep-section" className="flex flex-col gap-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Как получить бездепозитные бонусы за регистрацию и активировать бездеп
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Чтобы забрать популярные <strong className="text-white font-bold">бездепозитные бонусы за регистрацию</strong>,
                пользователю достаточно перейти по официальной ссылке и создать аккаунт. Стартовый{' '}
                <strong className="text-white font-bold">бездеп</strong> выдается как в виде денежных средств, так и
                в формате подарочных спинов. Опытные игроки всегда выбирают проверенные{' '}
                <strong className="text-white font-bold">бездепы</strong>, потому что они позволяют протестировать
                любые популярные слоты и оценить отдачу аппаратов абсолютно без риска для личного кошелька.
              </p>
            </div>

            {/* Subsection 2 */}
            <div id="bonuses-section" className="flex flex-col gap-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Актуальные бездеп бонусы: выгода и правила для новых игроков
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Качественные <strong className="text-white font-bold">бездеп бонусы</strong> дают существенное
                преимущество на старте сессии. Активировав персональный{' '}
                <strong className="text-white font-bold">бездеп бонус</strong>, вы мгновенно приступаете к вращению
                барабанов. Ключевое достоинство таких акций заключается в прозрачных условиях отыгрыша. Выбирая лучшие{' '}
                <strong className="text-white font-bold">бездепы за регистрацию</strong>, вы получаете лояльный вейджер
                и комфортные лимиты на вывод честно заработанного выигрыша на карту или электронный кошелек.
              </p>
            </div>

            {/* Subsection 3 */}
            <div id="casino-section" className="flex flex-col gap-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Эксклюзивный бездепозитный бонус казино и выгодные бездепы в казино
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Каждый лицензионный клуб стремится порадовать гостей щедрыми подарками. Выбирая первоклассный{' '}
                <strong className="text-white font-bold">бездеп за регистрацию</strong>, вы открываете доступ к
                сертифицированным игровым автоматам от ведущих мировых провайдеров. Официальный{' '}
                <strong className="text-white font-bold">бездепозитный бонус казино</strong> доступен для активации
                круглосуточно. Рейтинговые <strong className="text-white font-bold">бездепы в казино</strong> регулярно
                обновляются, даря свежие фриспины и дополнительные множители для уверенного заноса.
              </p>
            </div>

            {/* Subsection 4 */}
            <div id="summary-section" className="flex flex-col gap-2.5">
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Топовые бездепы казино, щедрый бонус казино и бонусы в казино
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                Проверенные временем <strong className="text-white font-bold">бездепы казино</strong> привлекают миллионы
                пользователей благодаря мгновенным выплатам и отсутствию скрытых комиссий. Забирайте главный{' '}
                <strong className="text-white font-bold">бонус казино</strong> прямо сейчас и наслаждайтесь любимым
                азартом. Используйте все доступные <strong className="text-white font-bold">бонусы в казино</strong>,
                участвуйте в ежедневных турнирах и выводите солидные призы в пару кликов!
              </p>
            </div>

            {/* Conversion CTA Block inside article */}
            <div className="mt-2 p-5 rounded-2xl bg-gradient-to-r from-[#141b26] to-[#192231] border border-[#233045] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-black text-white">
                  Готовы забрать свой бездепозитный бонус?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Регистрация занимает меньше 30 секунд. Бонус доступен сразу после создания аккаунта.
                </p>
              </div>
              <a
                href={REF_URL}
                className="z9k2-pill-btn z9k2-glow-orange w-full sm:w-auto px-7 py-3 rounded-xl bg-[#f6a83b] hover:bg-[#ffb347] text-black font-extrabold text-sm"
              >
                Регистрация с бонусом
              </a>
            </div>
          </article>
        </main>
      </div>

      {/* Floating Live Chat Widget */}
      <a
        href={REF_URL}
        aria-label="Онлайн поддержка и бонусы"
        className="fixed bottom-5 right-5 z-50 w-13 h-13 rounded-full bg-[#00c569] hover:bg-[#00db75] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </a>

      {/* Footer with Hashtags and Disclaimer */}
      <footer className="mt-8 border-t border-[#1b2330] bg-[#0c1017] py-8 px-4 sm:px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
          {/* SEO Hashtags built from keyword phrases */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Популярные разделы и теги:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { tag: '#бездепозитные_бонусы', href: '#seo-article' },
                { tag: '#бездепозитный_бонус', href: '#seo-article' },
                { tag: '#бездепозитный_бонус_за_регистрацию', href: '#bezdep-section' },
                { tag: '#бездепозитные_бонусы_за_регистрацию', href: '#bezdep-section' },
                { tag: '#бездеп', href: '#bezdep-section' },
                { tag: '#бездепы', href: '#bezdep-section' },
                { tag: '#бездеп_бонусы', href: '#bonuses-section' },
                { tag: '#бездеп_бонус', href: '#bonuses-section' },
                { tag: '#бездепы_за_регистрацию', href: '#bonuses-section' },
                { tag: '#бездеп_за_регистрацию', href: '#casino-section' },
                { tag: '#бездепозитный_бонус_казино', href: '#casino-section' },
                { tag: '#бездепы_в_казино', href: '#casino-section' },
                { tag: '#бездепы_казино', href: '#summary-section' },
                { tag: '#бонус_казино', href: '#summary-section' },
                { tag: '#бонусы_в_казино', href: '#summary-section' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="px-2.5 py-1 rounded-lg bg-[#141a24] hover:bg-[#1f2837] text-zinc-400 hover:text-[#f6a83b] transition-colors border border-[#1f2837]"
                >
                  {item.tag}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#18212e] text-xs text-zinc-500">
            <div>
              © 2026 BezdepCasino. Все права защищены. 18+ Играйте ответственно.
            </div>
            <div className="flex items-center gap-4">
              <a href={REF_URL} className="hover:text-zinc-300">
                Правила и условия
              </a>
              <a href={REF_URL} className="hover:text-zinc-300">
                Ответственная игра
              </a>
              <a href={REF_URL} className="hover:text-zinc-300">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
