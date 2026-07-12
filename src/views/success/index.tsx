'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useStore } from '@/store/useStore'
import topImage from '@/image/白地図プロローグ.jpg'
import { Img } from '@/components/Image'

export const SuccessView = () => {
  const store = useStore('return-items')

  // 完了画面が表示されたらカートを空にする
  useEffect(() => {
    store.clearItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] gap-8 py-12 px-4'>
      <Img src={topImage.src} alt='白地図プロローグ' cName='md:w-120' />

      <div className='text-center space-y-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-700'>
          ご購入
          <br className='md:hidden' />
          ありがとうございます！
        </h2>
        <p className='text-gray-500 text-sm md:text-base leading-relaxed'>
          商品のお届けまで、楽しみにお待ちください。
        </p>
      </div>

      <Link href='/shop'>
        <div className='bg-secondary px-12 py-4 rounded-full font-bold text-white text-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:opacity-90'>
          ショップに戻る
        </div>
      </Link>
    </div>
  )
}
