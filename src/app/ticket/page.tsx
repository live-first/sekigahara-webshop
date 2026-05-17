import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'
import { TicketView } from '@/views/2026/ticket'

export default function Ticket() {
  return <BaseViewLayout header={<Header />} main={<TicketView />} footer={<Footer />} />
}
