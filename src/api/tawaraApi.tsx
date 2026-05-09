import { RankingType } from '@/domain/ranking'
import { useQuery } from '@tanstack/react-query'

const fetchTawaraData = async (): Promise<RankingType> => {
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbzjk6JVQIDUXrRIFCSHqSL5xDPFm5jTnTs16ZCele-A09keIhmgFxZo1j-KlT2jBQupdw/exec',
    { mode: 'cors' },
  )

  if (!res.ok) {
    throw new Error('データ取得に失敗しました')
  }

  return res.json()
}

export const useTawaraApi = () => {
  return useQuery({
    queryKey: ['tawara'],
    queryFn: fetchTawaraData,
    // 30秒ごと更新
    refetchInterval: 30000,
    // タブ非アクティブでも更新
    refetchIntervalInBackground: true,
  })
}
