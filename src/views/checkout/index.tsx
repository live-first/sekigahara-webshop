'use client'

import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState, useMemo } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useStore } from '@/store/useStore'
import { ItemContent } from '../returns'
import { returnItems } from '@/data/items/returnItems'
import { PaymentElement, useStripe, useElements, AddressElement } from '@stripe/react-stripe-js'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { contact, email, name } from '@/components/schema'
import { useForm } from 'react-hook-form'
import { TextFieldForm } from '@/templates/form/TextFieldForm'
import { TextAreaForm } from '@/templates/form/TextAreaForm'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { useCheckoutPresenter } from '@/presenter/checkoutPreseter'
import { FaShieldAlt } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

const ADDRESS_OPTIONS = {
  mode: 'shipping' as const,
  allowedCountries: ['JP'],
}

export const CheckoutView = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const stored = useStore('return-items').getItem()
  const deliveryStored = useStore('other-items').getItem()
  const router = useRouter()

  useEffect(() => {
    const items = stored ? (JSON.parse(stored) as ItemContent[]) : []
    const other = deliveryStored
      ? (JSON.parse(deliveryStored) as { isDelivery: boolean })
      : { isDelivery: true }

    const deliveryAmount = other.isDelivery ? 1000 : 0
    const amount =
      items?.reduce((sum, item) => {
        return sum + item.amount * Number(item.count) + deliveryAmount
      }, 0) ?? 0 + deliveryAmount

    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [stored, deliveryStored])

  // optionsオブジェクトをメモ化
  const options = useMemo(() => {
    if (!clientSecret) return null

    return {
      clientSecret,
      appearance: {
        theme: 'stripe' as const,
        variables: {
          colorPrimary: '#ff9ebb',
          colorBackground: '#ffffff',
          colorText: '#5a5a5a',
          colorDanger: '#ff6b6b',
          fontFamily: '"Noto Sans JP", sans-serif',
          fontSizeBase: '16px',
          spacingUnit: '5px',
          borderRadius: '12px',
        },
      },
    }
  }, [clientSecret])

  if (!clientSecret || !options)
    return (
      <div className='flex justify-center items-center h-[50vh]'>
        <div className='w-48 h-48'>
          <DotLottieReact
            src='https://lottie.host/9f202484-3b8b-4612-97f4-f882bcc5765a/Cfy5D3cNkG.lottie'
            loop
            autoplay
          />
          <Button
            type='button'
            className='bg-gray-500 hover:bg-gray-400 text-white items-center w-full'
            onClick={() => {
              router.push('/shop')
            }}
          >
            戻る
          </Button>
        </div>
      </div>
    )

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className='pb-24 pt-8 px-4 max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-secondary mb-8 drop-shadow-sm'>
          ご購入の手続き
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          <div className='order-2 md:order-1'>
            <div className='bg-white p-6 rounded-3xl shadow-lg border border-pink-100'>
              <CheckoutForm />
            </div>
            <div className='mt-6'>
              <button
                className='text-gray-500 hover:text-gray-700 underline text-sm w-full text-center transition-colors'
                onClick={() => {
                  router.back()
                }}
              >
                ← もどる
              </button>
            </div>
          </div>

          <div className='order-1 md:order-2'>
            <SummaryPanel />
          </div>
        </div>
      </div>
    </Elements>
  )
}

const SummaryPanel = () => {
  const stored = useStore('return-items').getItem()
  const deliveryStored = useStore('other-items').getItem()

  if (!stored) {
    return <div className='text-gray-500 text-center'>カートは空です</div>
  }
  const items = JSON.parse(stored) as ItemContent[]
  const other = deliveryStored
    ? (JSON.parse(deliveryStored) as { isDelivery: boolean })
    : { isDelivery: true }

  const deliveryAmount = other.isDelivery ? 1000 : 0
  const totalAmount =
    items?.reduce((sum, item) => {
      return sum + item.amount * Number(item.count) + deliveryAmount
    }, 0) ?? 0 + deliveryAmount

  return (
    <div className='bg-blue-50 p-6 rounded-3xl shadow-md border border-blue-100 sticky top-24'>
      <h3 className='text-xl font-bold text-blue-400 mb-4 flex items-center gap-2'>
        <span className='text-2xl'>🛒</span> 選択した商品
      </h3>
      <div className='flex flex-col gap-4 mb-6'>
        {items.map((item, index) => {
          const data = returnItems.filter((it) => it.id === item.id)[0]
          return (
            <div
              key={index}
              className='flex justify-between items-start border-b border-blue-200 pb-2 last:border-0'
            >
              <div className='flex flex-col'>
                <p className='font-bold text-gray-700 text-sm'>{data.title || '商品名'}</p>
                <p className='text-xs text-gray-500'>数量: {item.count}</p>
              </div>
              <p className='font-bold text-blue-500 whitespace-nowrap'>
                {data.amount.toLocaleString()} <span className='text-xs'>円</span>
              </p>
            </div>
          )
        })}
        {deliveryAmount > 0 && (
          <div className='flex justify-between items-start border-b border-blue-200 pb-2 last:border-0'>
            <div className='flex flex-col'>
              <p className='font-bold text-gray-700 text-sm'>配送料</p>
            </div>
            <p className='font-bold text-blue-500 whitespace-nowrap'>
              1,000 <span className='text-xs'>円</span>
            </p>
          </div>
        )}
      </div>
      <div className='flex justify-between items-end border-t-2 border-dashed border-blue-200 pt-4'>
        <p className='font-bold text-gray-600'>合計金額</p>
        <p className='text-3xl font-bold text-pink-500'>
          {totalAmount.toLocaleString()} <span className='text-lg text-gray-400'>円</span>
        </p>
      </div>
    </div>
  )
}

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const { sendNotification, setNotice, sendEmail, setSending, request } = useCheckoutPresenter()

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const PersonSchema = z.object({
    name: name,
    email: email,
    content: contact,
  })

  type PersonType = z.infer<typeof PersonSchema>

  const {
    watch,
    register,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PersonType>({
    mode: 'onChange',
    resolver: zodResolver(PersonSchema),
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = request(watch())
    setLoading(true)
    setErrorMessage(null)

    if (!stripe || !elements) return

    await sendNotification(data).then(async () => {
      setNotice(false)
      const { paymentIntent, error } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
      })

      if (error) {
        setErrorMessage(error.message || 'エラーが発生しました')
        setLoading(false)
        setOpen(false)
        return
      }

      if (paymentIntent!.status == 'succeeded') {
        await sendEmail(data).then(() => {
          setSending(false)
          router.push('/success')
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-lg font-bold text-gray-600 border-l-4 border-pink-300 pl-3'>
          お客様情報
        </h3>
        <TextFieldForm
          title='お名前'
          required
          placeholder='山田　花子'
          register={register('name')}
          error={errors.name?.message}
        />
        <TextFieldForm
          title='メールアドレス'
          required
          placeholder='example@mail.com'
          register={register('email')}
          error={errors.email?.message}
          type='email'
        />
        <TextAreaForm
          title='コメント等'
          required
          description=''
          register={register('content')}
          error={errors.content?.message}
        />
      </div>

      <div className='flex flex-col gap-4'>
        <h3 className='text-lg font-bold text-gray-600 border-l-4 border-blue-300 pl-3'>
          お届け先・お支払い
        </h3>

        <AddressElement options={ADDRESS_OPTIONS} />

        <div className='p-4 bg-gray-50 rounded-xl border border-gray-100'>
          <PaymentElement />
        </div>
      </div>

      {errorMessage && (
        <div className='bg-red-50 text-red-500 p-3 rounded-lg text-sm border border-red-100'>
          {errorMessage}
        </div>
      )}

      <div className='flex flex-col gap-4 pt-4'>
        <Modal
          button={
            loading ? (
              '処理中…'
            ) : (
              <div className='flex'>
                <FaShieldAlt style={{ transform: 'translateY(2px)', marginRight: '6px' }} />
                決済を確定して購入する
              </div>
            )
          }
          type='submit'
          disabled={!stripe || loading || !isValid || isSubmitting}
          className='text-center items-center bg-gradient-to-r from-pink-400 to-blue-300 hover:from-pink-500 hover:to-blue-400 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center gap-2 mt-4'
          overlay={false}
          hideCloseBottomBtn
          isOpen={open}
          onOpenChange={setOpen}
        >
          <LodingModal />
        </Modal>
        <p className='text-xs text-center text-gray-400'>
          ※ SSL暗号化通信により、情報は安全に送信されます
        </p>
      </div>
    </form>
  )
}

const LodingModal = () => {
  return (
    <div className='flex flex-col'>
      <DotLottieReact
        src='https://lottie.host/984fe129-736c-4a1b-8f4d-ad453f2f0592/P9QyOrV7jH.lottie'
        loop
        autoplay
      />
      <div className='flex flex-col items-center'>
        <p className='font-bold text-xl'>決済処理中</p>
        <p>画面を閉じないでください</p>
        <p>
          銀行振込の方はメールを確認し、振込を完了させてください。<Link href='/shop'>閉じる</Link>
        </p>
      </div>
    </div>
  )
}
