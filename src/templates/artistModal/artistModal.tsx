import { ArtistType } from '@/domain/artist'
import './artistModal.scss'
import { Img } from '@/components/Image'
import Link from 'next/link'

export const ArtistModal = (props: ArtistType) => {
  const { img, name, x } = props
  return (
    <div className='artist-modal'>
      <div className='img-area'>
        <Img src={img.src} alt={img.alt} />
      </div>
      <div className='artist-name'>{name}</div>
      <div className='concept'>{/* {artistData.concept} */}</div>
      <div className='flex gap-4 justify-center'>
        {x !== '' && (
          <Link href={`${x}`} target='_blank' className='w-6'>
            <Img src='https://lime-light.tv/picture/x-logo.png' alt='x' />
          </Link>
        )}
      </div>
    </div>
  )
}
