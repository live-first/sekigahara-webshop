import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import { AboutView } from '@/views/2026/about'
import { Footer } from '@/views/2026/footer'
import { Header } from '@/views/2026/header'

export default function About() {
  return <BaseViewLayout header={<Header />} main={<AboutView />} />
}
