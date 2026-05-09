import { Img } from '@/components/Image'
import keyvisual from '@/image/2026/yosenkai2026_keyvisual_yoko.jpg'
import artists from '@/image/2026/yosenkai2026_artists.jpg'

export const YosenTopView = () => {
  return (
    <div className='flex flex-col'>
      <Img src={keyvisual.src} />
      <Img src={artists.src} />
    </div>
  )
}
