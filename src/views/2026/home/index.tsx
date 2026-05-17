'use client'

import { Container } from '@mui/material'
import { ContentTitle } from '@/components/title/contentTitle.tsx'
import Link from 'next/link'
import { Img } from '@/components/Image/index.tsx'
import { Frame } from '@/components/Frame/index.tsx'
import { NewsList } from '@/templates/newsList'
import { useNewsApi } from '@/api/newsApi'
import { NewsContentsType } from '@/domain/news'
import { useEffect, useRef } from 'react'
import { EllipseButton } from '@/components/button/ellipseButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import yosen_key from '@/image/2026/yosenkai2026_keyvisual_yoko.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ImageContainer } from '@/components/ImageContainer'

export const Home2026View = () => {
  const { getNews } = useNewsApi()
  const news: NewsContentsType[] = getNews.data
    ? (getNews.data.contents as unknown as NewsContentsType[])
    : []

  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    videoRef.current?.play()
  }, [])

  const keyVisuals = [
    'https://sekigahara-idolwars.net/2026/keyVisuals/関ケ原唄姫合戦2026_第一布陣_告知用.jpg',
    'https://sekigahara-idolwars.net/2026/keyVisuals/関ケ原唄姫合戦2026_第二布陣_告知用.jpg',
    'https://sekigahara-idolwars.net/2026/keyVisuals/関ケ原唄姫合戦2026_第三布陣_告知用.jpg',
    'https://sekigahara-idolwars.net/2026/keyVisuals/関ケ原唄姫合戦2026_第四布陣_告知用.jpg',
    'https://sekigahara-idolwars.net/2026/keyVisuals/関ケ原唄姫合戦2026_第五布陣_告知用.jpg',
    'https://sekigahara-idolwars.net/2026/keyVisuals/関ケ原唄姫合戦2026_第六布陣_告知用.jpg',
    'https://sekigahara-idolwars.net/2026/keyVisuals/関ケ原唄姫合戦2026_第七布陣_告知用.jpg',
  ]

  return (
    <div className='flex flex-col gap-5 pb-10'>
      <div>
        {/* <video
          className='w-full h-full object-cover'
          src='https://lime-light.tv/images/2026/Sekigahara2026_Aori.mp4'
          autoPlay
          muted
          loop
          playsInline
        ></video> */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          pagination={{ clickable: false, el: '#pagination' }}
          mousewheel={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          speed={1000}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {keyVisuals.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <ImageContainer img={{ src: data }} width='100%' height='800px' />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <Container maxWidth='md'>
        <div className='flex flex-col gap-8'>
          <div>
            <ContentTitle>お知らせ</ContentTitle>
            <NewsList news={news} max={5} />
            <div className='flex text-center justify-center py-6'>
              <Link href='/news' className='bg-white border border-sekigahara rounded-md p-2'>
                お知らせ一覧
              </Link>
            </div>
          </div>
          <div>
            <ContentTitle>予戦会情報</ContentTitle>
            <Frame>
              <Img src={yosen_key.src} alt='トップ画像' cName='w-full mb-6' />
              <div className='flex justify-center'>
                <Link href='https://yosen2026.sekigahara-idolwars.net' target='_blank'>
                  <EllipseButton className='bg-sekigahara text-white hover:bg-[#fe7e7e] px-4 w-52'>
                    特設サイトへ ▶︎
                  </EllipseButton>
                </Link>
              </div>
            </Frame>
          </div>
          {/* <div>
            <ContentTitle>予戦会エントリー</ContentTitle>
            <div className='flex justify-center py-8'>
              <button onClick={() => router.push('/entry')} className='hover:cursor-pointer'>
                <Img src={banner.src} alt='banner' />
              </button>
            </div>
          </div> */}
          <div>
            <ContentTitle>協力</ContentTitle>
            <Frame>
              <div className='flex justify-center'>
                <Img
                  src='https://lime-light.tv/images/2024/cooperation/girlsbomb_logo.jpg'
                  alt='Girls Bomb!!'
                  cName='w-1/3'
                />
              </div>
            </Frame>
          </div>
          <div>
            <ContentTitle>SNS</ContentTitle>
            <div className='flex gap-8 py-8 justify-center'>
              <Link href='https://x.com/_IDOLWARS' className='bg-white rounded-full w-20 h-20 p-4'>
                <Img src='https://lime-light.tv/images/x-logo-black.png' alt='x-logo' />
              </Link>
              <Link
                href='https://www.instagram.com/_idolwars'
                className='bg-white rounded-full w-20 h-20 p-2'
              >
                <Img
                  src='https://lime-light.tv/images/Instagram-logo-color.png'
                  alt='instagram-logo'
                />
              </Link>
              <Link
                href='https://youtube.com/@sekigaharaidolwarspr7582'
                className='bg-white rounded-full w-20 h-20 p-2 content-center'
              >
                <Img src='https://lime-light.tv/images/youtube-logo.png' alt='youtube-logo' />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
