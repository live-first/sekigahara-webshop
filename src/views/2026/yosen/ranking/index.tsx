import { RankingType, RankingUnit, UnitInit } from '@/domain/ranking'
import { artists } from '@/resource/2026/yosen/artists'
import { RankingBox } from '@/templates/rankingBox'
import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { YosenTitle } from '@/components/title/title'

export const YosenRankingView = () => {
  const [ranking, setRanking] = useState<RankingType | null>(null)

  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbzjk6JVQIDUXrRIFCSHqSL5xDPFm5jTnTs16ZCele-A09keIhmgFxZo1j-KlT2jBQupdw/exec',
      { mode: 'cors' },
    )
      .then((response) => response.json())
      .then((data: RankingType) => {
        const ranking = data.ranking.map((unit): RankingUnit => {
          const artist = artists.find((artist) => artist.name === unit.name) ?? UnitInit
          return {
            ...unit,
            name: artist.name,
            img: artist.img,
            x: artist.x,
          }
        })
        setRanking({
          date: data.date,
          time: data.time,
          ranking: ranking,
        })
      })
      .catch((error) => {
        console.error('リクエストエラー:', error)
      })
  }, [])

  return (
    <div className='flex flex-col gap-6 pb-40 p-2 md:px-20 lg:px-60'>
      <YosenTitle title='〜 RANKING 〜' />
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
