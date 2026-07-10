import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { TimeTable2026View } from '@/views/2026/timetable'

export default function Live() {
  return <BaseViewLayout header={<Header />} main={<TimeTable2026View />} footer={<Footer />} />
}
