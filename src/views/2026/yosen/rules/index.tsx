import { Img } from '@/components/Image'
import { YosenTitle } from '@/components/title/title'
import rule from '@/image/2026/yosenkai2026_yosen_rule.jpg'

export const YosenRulesView = () => {
  return (
    <div className='flex flex-col gap-6 pb-12 p-2 md:px-20 lg:px-36'>
      <YosenTitle title='〜 投俵ルール 〜' />
      <Img src={rule.src} alt='関ケ原歌姫合戦2026 予戦会 ルール' />
    </div>
  )
}
