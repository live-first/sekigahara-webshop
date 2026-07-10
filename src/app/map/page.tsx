import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { Map2026View } from '@/views/2026/map'

export default function Map() {
  return <BaseViewLayout header={<Header />} main={<Map2026View />} footer={<Footer />} />
}
