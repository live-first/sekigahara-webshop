import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { Lineup2026View } from '@/views/2026/lineup'

export default function LineUp() {
  return <BaseViewLayout header={<Header />} main={<Lineup2026View />} footer={<Footer />} />
}
