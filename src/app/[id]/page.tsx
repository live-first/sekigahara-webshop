import { productItems } from '@/data/items/productItems'
import { ItemDetailView } from '@/views/2026/shop/itemDetail'
import React from 'react'

export async function generateStaticParams() {
  return productItems.map((item) => ({
    id: item.id.toString(),
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Items = (props: { params: any }) => {
  const { params } = props
  // force a compatible JSX component type if ItemDetailView has an incompatible signature
  const View = ItemDetailView as unknown as React.ComponentType<{ id?: string }>
  return <View id={params?.id} />
}

export default Items
