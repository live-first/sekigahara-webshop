'use client'

import { Container } from '@mui/material'
import '../timetable.scss'

import { Title } from '@/components/title/title.tsx'
import { TimeTable } from '@/components/TimeTable/index.tsx'
import { Img } from '@/components/Image/index.tsx'

const config = {
  tableHeadCellHeight: 20,
  tableCellHeight: 10,
  contentMargin: 2,
  contentPadding: 5,
  borderBoldInterval: 6,
  timeStringInterval: 3,
}

interface date {
  year: string
  month: string
  day: string
  youbi: string
  other: string
}

export const Greeting2026View = () => {
  const DateView = (props: date) => {
    const { year, month, day, youbi, other } = props
    return (
      <div className='date-area'>
        {year}年{month}月{day}日({youbi}) {other}
      </div>
    )
  }

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
