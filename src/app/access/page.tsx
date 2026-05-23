import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { AccessView } from '@/views/2026/access'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'

export default function Access() {
  return <BaseViewLayout header={<Header />} main={<AccessView />} footer={<Footer />} />
}
