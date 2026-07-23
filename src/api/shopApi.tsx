'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { axios } from './baseApi'

export type CheckIdRequest = {
  id: string
}

export type PurchaseRequest = {
  id: string
  name: string
  email: string
  content: string
  product?: string
}

export const useShopApi = () => {
  const queryClient = useQueryClient()
  const URL =
    'https://script.google.com/macros/s/AKfycbzhUpJpuleikfib_4aNtvPFDBQPZI4Z2U3eYeVaCpqo3TB3SvRE1_WhIAGfIVvT9rRR8Q/exec'

  /**
   * 販売状況を取得します
   */
  const getShopStatus = useQuery({
    queryKey: ['nobori'],
    queryFn: async () => {
      return await axios.get(URL)
    },
  })

  /**
   * 購入可能か返します
   */
  const checkEnablePurchase = useMutation({
    mutationFn: (data: { id: string }) => {
      return axios.post(URL, encodeURI(`id=${data.id}`), {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['nobori'] })
    },
  })

  const addPurchase = useMutation({
    mutationFn: (data: PurchaseRequest) => {
      return axios.post(
        URL,
        encodeURI(`id=${data.id}&name=${data.name}&email=${data.email}&content=${data.content}`),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['nobori'] })
    },
  })

  return { getShopStatus, addPurchase, checkEnablePurchase }
}
