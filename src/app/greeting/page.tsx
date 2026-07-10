import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { Greeting2026View } from '@/views/2026/timetable/greeting'

export default function Greeting() {
  return <BaseViewLayout header={<Header />} main={<Greeting2026View />} footer={<Footer />} />
}
