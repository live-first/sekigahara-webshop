'use client'

import { PurchaseRequest } from '@/api/shopApi'
import { useState } from 'react'
import { init, send } from '@emailjs/browser'
import { useStore } from '@/store/useStore'
import { ItemContent } from '@/views/products'

export const useCheckoutPresenter = () => {
  const [notice, setNotice] = useState<boolean>(false)
  const [sending, setSending] = useState<boolean>(false)

  const sendNotification = async (data: PurchaseRequest) => {
    init('IdTWr2VgMdRiCW1AG')
    if (!notice) {
      setNotice(true)
      await send('service_cloudfunding', 'cloud-fund-notification', data)
    }
  }

  const sendEmail = async (data: PurchaseRequest) => {
    init('IdTWr2VgMdRiCW1AG')
    if (!sending) {
      setSending(true)
      await send('service_cloudfunding', 'cloud-fund-rara', data)
    }
  }

  const stored = useStore('return-items').getItem()
  const items = JSON.parse(stored!) as ItemContent[]
  const request = ({
    id,
    name,
    email,
    content,
  }: {
    id: string
    name: string
    email: string
    content: string
  }): PurchaseRequest => {
    return {
      id: id,
      name: name,
      email: email,
      content: content,
    }
  }

  return { sendNotification, setNotice, sendEmail, setSending, request }
}
