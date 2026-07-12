import { SingleViewLayout } from '@/layouts/SingleViewLayout'
import { CheckoutView } from '@/views/checkout'

export default function CheckoutPage() {
  return <SingleViewLayout header={<></>} allView={<CheckoutView />} />
}
