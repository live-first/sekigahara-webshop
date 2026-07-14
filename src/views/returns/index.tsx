'use client'

import { Img } from '@/components/Image'
import { Modal } from '@/components/Modal'
import { productItems, ProductItemType } from '@/data/items/productItems'
import { ChangeEventHandler } from 'react'

export type ItemContent = {
  id: string
  amount: number
  count: string //いくつか
}

export const ProductsView = () => {
  return (
    <div className='flex flex-col pt-12 mb-24 pb-24 items-center gap-12'>
      <h2 id='return' className='font-bold text-3xl text-pink-400 drop-shadow-sm scroll-mt-24'>
        関ケ原歌姫合戦
        <br />
        オンラインショップ
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {productItems.map((item, index) => {
          return (
            <ItemPanel
              key={index}
              id={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              tax={item.tax}
              delivery_price={item.delivery_price}
              max_count={item.max_count}
              count={item.count}
              onChange={(e) => {}}
            />
          )
        })}
      </div>
    </div>
  )
}

type ItemProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>
  disabled?: boolean
} & ProductItemType

const ItemPanel = (props: ItemProps) => {
  const { id, name, description, image, price, max_count, count, onChange, disabled } = props

  return (
    <div className='flex flex-col gap-2 bg-white w-full rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-2xl transition-shadow'>
      <p className='font-bold text-pink-500 text-4xl text-center'>
        {price.toLocaleString()}
        <span className='text-2xl ml-1 text-gray-400'>円</span>
      </p>
      <div className='h-px w-full bg-gray-100 my-2'></div>
      {name && <p className='text-lg font-bold leading-6 text-gray-700'>{name}</p>}

      <Modal
        button={
          <span className='border-b border-pink-300 text-pink-500 font-bold'>もっと見る</span>
        }
        cName='w-fit text-left p-1 hover:opacity-70 transition-opacity'
      >
        <div className='flex flex-col gap-4 p-2' id={id}>
          {image && <Img src={image} />}
          <p className='font-bold text-pink-500 text-4xl'>
            {price.toLocaleString()}
            <span className='text-2xl ml-1'>円</span>
          </p>
          {name && <p className='text-xl font-bold text-gray-700'>{name}</p>}
          <div
            dangerouslySetInnerHTML={{
              __html: `${description}`,
            }}
            className='text-gray-600 leading-7'
          />
        </div>
      </Modal>
    </div>
  )
}
