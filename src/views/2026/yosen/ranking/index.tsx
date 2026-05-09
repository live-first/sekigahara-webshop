import { RankingUnit, UnitInit } from '@/domain/ranking'
import { artists } from '@/resource/2026/yosen/artists'
import { RankingBox } from '@/templates/rankingBox'
import { useMemo } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { YosenTitle } from '@/components/title/title'
import { useMetaApi } from '@/api/metaApi'
import { useTawaraApi } from '@/api/tawaraApi'

export const YosenRankingView = () => {
  const { data: metaRank } = useMetaApi()
  const { data: tawaraRank } = useTawaraApi()

  const ranking = useMemo(() => {
    if (!tawaraRank) return null

    const rank = tawaraRank.ranking.map((unit): RankingUnit => {
      const artist = artists.find((artist) => artist.name === unit.name) ?? UnitInit
      console.log(artist.name, metaRank)
      const metaPoint =
        Object.values(metaRank ?? {}).find((idol) => idol.id == artist.id)?.donate ?? 0
      const livePoint = unit.live ?? 0

      return {
        ...unit,
        live: livePoint,
        meta: metaPoint,
        point: metaPoint + livePoint * 200, // 俵 × 200pt + METALIVEポイント
        name: artist.name,
        img: artist.img,
        x: artist.x,
      }
    })

    return {
      date: tawaraRank.date,
      time: tawaraRank.time,
      ranking: rank,
    }
  }, [metaRank, tawaraRank])

  return (
    <div className='flex flex-col gap-6 pb-40 p-2 md:px-20 lg:px-60'>
      <YosenTitle title='〜 RANKING 〜' desc='自動更新です。' />
      {ranking && (
        <div className='flex flex-col w-full text-end text-sm text-black py-2'>
          更新日時：{`${ranking.date} ${ranking.time}`}
        </div>
      )}
      <div className='flex flex-col border-4 border-font-blue'>
        {ranking ? (
          ranking.ranking
            .sort((a, b) => b.point - a.point)
            .map((unit, index) => (
              <RankingBox
                rank={index + 1}
                name={unit.name}
                point={unit.point}
                live={unit.live}
                meta={unit.meta}
                img={unit.img}
                key={index}
                showBorder={ranking.ranking.length !== index + 1}
              />
            ))
        ) : (
          <DotLottieReact
            src='https://lottie.host/cc8ec496-74a6-42ab-aed9-eadfaffb1718/Zx5ooLEWE9.lottie'
            loop
            autoplay
          />
        )}
      </div>
    </div>
  )
}
