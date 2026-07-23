'use client'

import { Img } from '@/components/Image'
import { productItems, ProductItemType } from '@/data/items/productItems'
import { Button } from '@/components/button/button'
import { useShopApi } from '@/api/shopApi'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'

export type ItemContent = {
  id: string
  amount: number
  count: string //いくつか
}

export const ProductsView = () => {
  return (
    <div className='flex flex-col pt-12 mb-24 pb-24 items-center gap-12'>
      <h2
        id='return'
        className='font-bold text-3xl text-sekigahara drop-shadow-sm scroll-mt-24 text-center'
      >
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
              disabled={true}
            />
          )
        })}
      </div>
    </div>
  )
}

type ItemProps = {
  disabled?: boolean
} & ProductItemType

const ItemPanel = (props: ItemProps) => {
  const { name, image, price, description, max_count, count, disabled } = props
  const { checkEnablePurchase } = useShopApi()
  const router = useRouter()
  const stored = useStore('return-items')

  const onClickPurchase = async () => {
    const res = await (await checkEnablePurchase.mutateAsync({ id: props.id })).data

    if (res) {
      stored.setItem([{ id: props.id, amount: props.price, count: '1' }])
      router.push('/checkout')
    } else {
      alert('購入できませんでした。')
    }
  }

  return (
    <div className='flex flex-col gap-2 bg-white w-full rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-2xl transition-shadow'>
      {image && <Img src={image} cName='h-50 object-contain' />}
      {name && <p className='text-lg font-bold leading-6 text-gray-700'>{name}</p>}
      {description && <p className='text-gray-500 text-sm'>{description}</p>}
      <div className='h-px w-full bg-gray-100 my-2'></div>
      <p className=''>{price.toLocaleString()} 円(税込)</p>
      {max_count === count ? (
        <p className='bg-gray-600 text-white w-full rounded-sm text-center font-bold'>販売終了</p>
      ) : (
        <Button
          className='bg-sekigahara py-2 hover:cursor-pointer hover:brightness-110 transition'
          onClick={onClickPurchase}
          disabled={disabled}
        >
          購入する
        </Button>
      )}
    </div>
  )
}
