import { MetaResponse } from '@/domain/metapoint'
import { useQuery } from '@tanstack/react-query'

const fetchMetaLive = async (): Promise<MetaResponse> => {
  const res = await fetch(
    'https://metalive-89648-default-rtdb.asia-southeast1.firebasedatabase.app/events/36.json',
  )

  if (!res.ok) {
    throw new Error('データ取得に失敗しました')
  }

  return res.json()
}

export const useMetaApi = () => {
  return useQuery({
    queryKey: ['event-36'],
    queryFn: fetchMetaLive,
    // 30秒ごと更新
    refetchInterval: 30000,
    // タブ非アクティブでも更新
    refetchIntervalInBackground: true,
  })
}
