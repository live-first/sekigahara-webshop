'use client'

import { Container } from '@mui/material'
import '../timetable.scss'

import { Title } from '@/components/title/title.tsx'
import { Img } from '@/components/Image/index.tsx'

export const Greeting2026View = () => {
  return (
    <div className='timetable mb-10'>
      <Container maxWidth='lg'>
        <Title english='GREETING' japaniese='物販・特典会情報' />
        <div className='flex flex-col gap-6 mt-10'>
          <Img src='https://sekigahara-idolwars.net/2026/timetable/greeting_day1.jpg' alt='greeting' />
          <Img src='https://sekigahara-idolwars.net/2026/timetable/greeting_day2.jpg' alt='greeting' />
          <Img src='https://sekigahara-idolwars.net/2026/timetable/greeting_day3.jpg' alt='greeting' />
        </div>
      </Container>
    </div>
  )
}
