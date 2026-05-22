'use client'

import Link from 'next/link'
import './style.css'
import { BlurText } from '@/components/BlurText'

export const AboutView = () => {
  const stages = [
    {
      name: '徳川ステージ',
      subtitle: 'TOKUGAWA STAGE',
      description:
        '国内で開催されるアイドルフェスでは最大規模のステージ',
      image: 'https://sekigahara-idolwars.net/2026/about/27.jpg',
      accent: 'from-red-500/40 to-orange-500/20',
    },
    {
      name: '豊臣ステージ',
      subtitle: 'TOYOTOMI STAGE',
      description:
        '爽快感溢れるステージ',
      image: 'https://sekigahara-idolwars.net/2026/about/21.jpg',
      accent: 'from-yellow-400/40 to-orange-400/20',
    },
    {
      name: '桃配ステージ',
      subtitle: 'MOMOKUBARI STAGE',
      description:
        '目の前を通る新幹線の風を感じるステージ',
      image: 'https://sekigahara-idolwars.net/2026/about/4.jpg',
      accent: 'from-pink-400/40 to-purple-500/20',
    },
    {
      name: '戦国ステージ',
      subtitle: 'SENGOKU STAGE',
      description:
        '関ケ原の戦いの激戦地に位置する、熱狂のステージ',
      image: 'https://sekigahara-idolwars.net/2026/about/5.jpg',
      accent: 'from-indigo-500/40 to-blue-500/20',
    },
    {
      name: '下剋上ステージ',
      subtitle: 'GEKOKUJO STAGE',
      description:
        '深い渓谷にそびえ立つステージはまさに下剋上',
      image: 'https://sekigahara-idolwars.net/2026/about/18.jpg',
      accent: 'from-green-400/40 to-emerald-500/20',
    },
  ]

  const areas = [
    {
      title: 'FOOD',
      text: '多くのキッチンカーが出店し、フェス飯も充実',
      image: 'https://sekigahara-idolwars.net/2026/about/48.jpg',
    },
    {
      title: 'NATURE',
      text: '自然の中で感じる、特別な夏の思い出',
      image: 'https://sekigahara-idolwars.net/2026/about/49.jpg',
    },
  ]

  return (
    <div className='bg-black text-white overflow-hidden'>
      {/* HERO */}
      <section className='relative min-h-screen flex items-center justify-center px-6'>
        <div
          className='absolute inset-0 bg-cover bg-center scale-105'
          style={{
            backgroundImage: 'url(https://sekigahara-idolwars.net/2026/about/30.jpg)',
          }}
        />

        <div className='absolute inset-0 bg-black/70' />

        <div className='relative z-10 max-w-5xl text-center fade-up'>
          <p className='tracking-[0.5em] text-sm md:text-base text-red-300 mb-6'>
            SEKIGAHARA IDOL WARS
          </p>

          <h1 className='text-5xl md:text-8xl font-black leading-none mb-8'>関ケ原歌姫合戦</h1>

          <p className='text-base md:text-xl leading-8 text-zinc-200 max-w-3xl mx-auto'>
            『SEKIGAHARA IDOL WARS
            〜関ケ原唄姫合戦〜』は、2014年より開催されている大型アイドルフェスです。
            <br />
            女性アイドルグループが多数出演しており、最も熱く最高に楽しめる夏フェスとなっております。
          </p>
        </div>

        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] text-zinc-300 animate-bounce'>
          SCROLL
        </div>
      </section>

      {/* STAGES */}
      <section className='relative py-28 px-6 md:px-10 bg-gradient-to-b from-black to-zinc-950'>
        <div className='max-w-7xl mx-auto mb-20'>
          <p className='text-red-400 tracking-[0.3em] text-sm mb-4'>STAGES</p>
          <BlurText
            text='5つのステージが生み出す、それぞれの“合戦”'
            delay={400}
            animateBy='words'
            direction='top'
            onAnimationComplete={() => {}}
            className='text-4xl md:text-6xl font-black mb-6'
            animationFrom={undefined}
            animationTo={undefined}
          />
          <p className='text-zinc-400 max-w-3xl leading-8'>
            関ケ原歌姫合戦では、それぞれ異なる個性を持つステージを展開。
            メインステージの圧倒的スケールから、 新たな才能が躍動する空間まで、
            会場全体がライブエンターテインメントで満たされます。
          </p>
        </div>

        <div className='space-y-24 max-w-7xl mx-auto'>
          {stages.map((stage, index) => (
            <div
              key={stage.name}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className='relative group overflow-hidden rounded-[2rem] border border-white/10'>
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${stage.accent} z-10 opacity-80`}
                ></div>

                <img
                  src={stage.image}
                  alt={stage.name}
                  className='h-[500px] w-full object-cover transition duration-700 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-black/30 z-20' />
              </div>

              <div className='relative z-10'>
                <p className='text-sm tracking-[0.3em] text-zinc-400 mb-3'>{stage.subtitle}</p>

                <BlurText
                  text={stage.name}
                  delay={400}
                  animateBy='words'
                  direction='top'
                  onAnimationComplete={() => {}}
                  className='text-4xl md:text-6xl font-black mb-8 leading-tight'
                  animationFrom={undefined}
                  animationTo={undefined}
                />

                <p className='text-zinc-300 leading-8 text-lg'>{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className='relative py-32 px-6 md:px-10 overflow-hidden'>
        <div className='absolute -top-20 -left-20 w-80 h-80 rounded-full bg-red-500/20 blur-3xl float-animation' />
        <div className='absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl float-animation' />

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='mb-20 text-center'>
            <p className='text-red-400 tracking-[0.3em] text-sm mb-4'>EXPERIENCE</p>
            <h2 className='text-4xl md:text-6xl font-black mb-6'>ライブだけじゃない</h2>
            <p className='text-zinc-400 max-w-2xl mx-auto leading-8'>
              関ケ原歌姫合戦は、ライブ・食・交流・自然が融合した体験型フェス。
              会場全体を歩くだけでも、特別な夏の思い出が生まれます。
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {areas.map((area) => (
              <div
                key={area.title}
                className='group relative overflow-hidden rounded-[2rem] min-h-[500px] border border-white/10'
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className='absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent' />

                <div className='absolute bottom-0 p-10 z-10'>
                  <h3 className='text-3xl md:text-4xl font-black mb-5'>{area.title}</h3>
                  <p className='text-zinc-200 leading-8'>{area.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className='relative py-40 px-6 text-center border-t border-white/10 bg-zinc-950'>
        <div className='max-w-5xl mx-auto'>
          <p className='text-red-400 tracking-[0.3em] text-sm mb-6'>CONCEPT</p>

          <h2 className='text-5xl md:text-7xl font-black leading-tight mb-10'>
            俺たちの夏、湧いて、沸いて、湧きまくれ
          </h2>

          <p className='text-zinc-400 leading-8 max-w-3xl mx-auto text-lg'>
            12回目の関ケ原唄姫合戦は、伝説の夏になる。
          </p>

          <Link href='../ticket'>
            <div className='mt-20 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition duration-300'>
              TICKET INFORMATION
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
