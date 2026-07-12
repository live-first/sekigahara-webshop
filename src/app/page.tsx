import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { ShopView } from '@/views/2026/shop'

export default function Home() {
  return <BaseViewLayout header={<Header />} main={<ShopView />} footer={<Footer />} />
}
