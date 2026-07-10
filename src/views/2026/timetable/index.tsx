'use client'

import { Container } from '@mui/material'
import html2canvas from 'html2canvas'
import './timetable.scss'
import { day1Stage1 } from './day1/stage1.ts'
import { day1Stage2 } from './day1/stage2.ts'
import { day1Stage3 } from './day1/stage3.ts'
import { day1Stage4 } from './day1/stage4.ts'
import { day1Stage5 } from './day1/stage5.ts'
import { day2Stage1 } from './day2/stage1.ts'
import { day2Stage2 } from './day2/stage2.ts'
import { day2Stage3 } from './day2/stage3.ts'
import { day2Stage4 } from './day2/stage4.ts'
import { day2Stage5 } from './day2/stage5.ts'
import { day3Stage1 } from './day3/stage1.ts'
import { day3Stage2 } from './day3/stage2.ts'
import { day3Stage3 } from './day3/stage3.ts'
import { day3Stage4 } from './day3/stage4.ts'
import { day3Stage5 } from './day3/stage5.ts'
import { Title } from '@/components/title/title.tsx'
import { EllipseButton } from '@/components/button/ellipseButton.tsx'
import { Img } from '@/components/Image/index.tsx'
import { TimeTable } from '@/components/TimeTable/index.tsx'

const config = {
  tableHeadCellHeight: 120,
  tableCellHeight: 20,
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

const saveAsImage = (uri: string) => {
  const downloadLink = document.createElement('a')

  if (typeof downloadLink.download === 'string') {
    downloadLink.href = uri

    // ファイル名
    downloadLink.download = 'idol-wars-2026_timetable.png'

    // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
    document.body.appendChild(downloadLink)

    // ダウンロードリンクが設定された a タグをクリック
    downloadLink.click()

    // Firefox 対策で追加したリンクを削除しておく
    document.body.removeChild(downloadLink)
  } else {
    window.open(uri)
  }
}

const exportPng = (targetId: string) => {
  // const targetTimetable = document.getElementById('base-view-id')
  // const targetTimetableArea = document.getElementById('timetable-master')
  // targetTimetable && (targetTimetable.style.overflow = 'visible')
  // targetTimetableArea && (targetTimetableArea.style.overflow = 'visible')
  // 画像に変換する component の id を指定
  const target = document.getElementById(targetId)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  target &&
    html2canvas(target).then((canvas) => {
      const targetImgUri = canvas.toDataURL('img/png')
      saveAsImage(targetImgUri)
    })
  // targetTimetableArea && (targetTimetableArea.style.overflow = 'scroll')
  // targetTimetable && (targetTimetable.style.overflow = 'hidden')
}

export const TimeTable2026View = () => {
  const DateView = (props: date) => {
    const { year, month, day, youbi, other } = props
    return (
      <div className='date-area'>
        {year}年{month}月{day}日({youbi}) {other}
      </div>
    )
  }

  return (
    <div className='timetable'>
      <Container maxWidth='lg' className='flex flex-col gap-6'>
        <Title english='TIME TABLE' japaniese='タイムテーブル' />
        <div className='target-area' id='target-2026-component1'>
          <div className='timetable-top'>
            <DateView year='2026' month='7' day='18' youbi='土' other='DAY1' />
          </div>
          <div className='timetable-area' id='timetable-master1'>
            <TimeTable
              config={config}
              class={'stage2026-1'}
              date={day1Stage1.date}
              data={day1Stage1.data}
              stageName={day1Stage1.stageName}
              open={day1Stage1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/tokugawa.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-2'}
              date={day1Stage2.date}
              data={day1Stage2.data}
              stageName={day1Stage2.stageName}
              open={day1Stage2.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/toyotomi.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-3'}
              date={day1Stage3.date}
              data={day1Stage3.data}
              stageName={day1Stage3.stageName}
              open={day1Stage3.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/sengoku.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-4'}
              date={day1Stage4.date}
              data={day1Stage4.data}
              stageName={day1Stage4.stageName}
              open={day1Stage4.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/momokubari.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-5'}
              date={day1Stage5.date}
              data={day1Stage5.data}
              stageName={day1Stage5.stageName}
              open={day1Stage5.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
              img='https://sekigahara-idolwars.net/2026/timetable/gekokujo.png'
            />
          </div>
        </div>

        <div className='target-area' id='target-2026-component2'>
          <div className='timetable-top'>
            <DateView year='2026' month='7' day='19' youbi='日' other='DAY2' />
          </div>
          <div className='timetable-area' id='timetable-master2'>
            <TimeTable
              config={config}
              class={'stage2026-1'}
              date={day2Stage1.date}
              data={day2Stage1.data}
              stageName={day2Stage1.stageName}
              open={day2Stage1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/tokugawa.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-2'}
              date={day2Stage2.date}
              data={day2Stage2.data}
              stageName={day2Stage2.stageName}
              open={day2Stage2.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/toyotomi.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-3'}
              date={day2Stage3.date}
              data={day2Stage3.data}
              stageName={day2Stage3.stageName}
              open={day2Stage3.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/sengoku.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-4'}
              date={day2Stage4.date}
              data={day2Stage4.data}
              stageName={day2Stage4.stageName}
              open={day2Stage4.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/momokubari.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-5'}
              date={day2Stage5.date}
              data={day2Stage5.data}
              stageName={day2Stage5.stageName}
              open={day2Stage5.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
              img='https://sekigahara-idolwars.net/2026/timetable/gekokujo.png'
            />
          </div>
        </div>

        <div className='target-area' id='target-2026-component3'>
          <div className='timetable-top'>
            <DateView year='2026' month='7' day='20' youbi='月祝' other='DAY3' />
          </div>
          <div className='timetable-area' id='timetable-master3'>
            <TimeTable
              config={config}
              class={'stage2026-1'}
              date={day3Stage1.date}
              data={day3Stage1.data}
              stageName={day3Stage1.stageName}
              open={day3Stage1.open}
              isTimeStringViewLeft={true}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/tokugawa.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-2'}
              date={day3Stage2.date}
              data={day3Stage2.data}
              stageName={day3Stage2.stageName}
              open={day3Stage2.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/toyotomi.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-3'}
              date={day3Stage3.date}
              data={day3Stage3.data}
              stageName={day3Stage3.stageName}
              open={day3Stage3.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/sengoku.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-4'}
              date={day3Stage4.date}
              data={day3Stage4.data}
              stageName={day3Stage4.stageName}
              open={day3Stage4.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={false}
              img='https://sekigahara-idolwars.net/2026/timetable/momokubari.png'
            />
            <TimeTable
              config={config}
              class={'stage2026-5'}
              date={day3Stage5.date}
              data={day3Stage5.data}
              stageName={day3Stage5.stageName}
              open={day3Stage5.open}
              isTimeStringViewLeft={false}
              isTimeStringViewRight={true}
              img='https://sekigahara-idolwars.net/2026/timetable/gekokujo.png'
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
