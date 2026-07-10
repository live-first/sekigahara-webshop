'use client'

import { Container } from '@mui/material'
import { Title } from '@/components/title/title.tsx'
import { Img } from '@/components/Image/index.tsx'

export const Map2026View = () => {
  return (
    <Container maxWidth='lg'>
      <Title english='MAP' japaniese='エリアマップ' />
      <div className='flex flex-col py-6'>
        <Img src='https://sekigahara-idolwars.net/2026/timetable/map.jpg' alt='map' />
      </div>
    </Container>
  )
}
