'use client'

import { Img } from '@/components/Image'
import { productItems } from '@/data/items/productItems'
import { NotFoundView } from '@/views/common/notfound/notFound'
import logo from '@/image/2026/logo_2026.png'
import { Button } from '@/components/button/button'

export const ItemDetailView = (props: { id: string }) => {
  const { id } = props

  const item = productItems[productItems.findIndex((item) => item.id === id)]

  if (item) {
    return (
      <div className='flex flex-col gap-6 p-6 justify-self-center max-w-4xl'>
        <div className='flex flex-col gap-2 bg-white w-full rounded-3xl p-6 shadow-lg border border-pink-100 transition-shadow'>
          <Img src={item.image ?? logo.src} cName='h-50 object-contain' />
          {item.name && <p className='text-lg font-bold leading-6 text-gray-700'>{item.name}</p>}
          <div className='h-px w-full bg-gray-100 my-2'></div>
          <p className=''>{item.price.toLocaleString()} 円(税込)</p>
          {item.max_count === item.count ? (
            <p className='bg-gray-600 text-white w-full rounded-sm text-center font-bold'>
              販売終了
            </p>
          ) : <Button className='bg-sekigahara py-2 hover:cursor-pointer hover:brightness-110 transition' onClick={() => {}}>購入する</Button>}
        </div>
      </div>
    )
  } else {
    return <NotFoundView />
  }
}
