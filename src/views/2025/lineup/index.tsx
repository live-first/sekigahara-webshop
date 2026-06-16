'use client'

import { useState } from 'react'
import { Container } from '@mui/material'
import './lineup.css'
import { BaseView2025 } from '../layout/index.tsx'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { ArtistResponseType } from '@/domain/artist.ts'
import { Title } from '@/components/title/title.tsx'
import { ArtistBoxModal } from '@/templates/modal/ArtistBoxModal.tsx'
import { artistsData } from './artists.ts'

const LineUp = () => {
  const [units] = useState<ArtistResponseType[] | null>(artistsData)
  const [viewUnits, setViewUnits] = useState<ArtistResponseType[] | null>(null)
  const [day, setDay] = useState('all')

  const onClickDay1 = () => {
    if ('day1' === day) {
      setDay('all')
      setViewUnits(units)
    } else {
      setDay('day1')
      setViewUnits(
        units &&
          units.filter((unit) => {
            return unit.day1
          }),
      )
    }
  }

  const onClickDay2 = () => {
    if ('day2' === day) {
      setDay('all')
      setViewUnits(units)
    } else {
      setDay('day2')
      setViewUnits(
        units &&
          units.filter((unit) => {
            return unit.day2
          }),
      )
    }
  }

  const onClickDay3 = () => {
    if ('day3' === day) {
      setDay('all')
      setViewUnits(units)
    } else {
      setDay('day3')
      setViewUnits(
        units &&
          units.filter((unit) => {
            return unit.day3
          }),
      )
    }
  }

  return (
    <div className='lineup'>
      <Container maxWidth='lg'>
        <Title english='LINE UP' japaniese='出演者情報' />
        <div className='pb-24'>
          <div className='describe'>（50音順）</div>
          {units && (
            <div className='flex py-6'>
              <div className='w-1/3'>
                <button className={`button day1`} onClick={() => onClickDay1()}>
                  19日
                </button>
              </div>
              <div className='w-1/3'>
                <button className={`button day2`} onClick={() => onClickDay2()}>
                  20日
                </button>
              </div>
              <div className='w-1/3'>
                <button className={`button day3`} onClick={() => onClickDay3()}>
                  21日
                </button>
              </div>
            </div>
          )}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'>
            {viewUnits ? (
              viewUnits.map((unit, index) => {
                return (
                  <ArtistBoxModal
                    {...unit}
                    img={{
                      src: `https://lime-light.tv/images/2025/lineup/${unit.img}`,
                      alt: unit.name,
                    }}
                    key={index}
                  />
                )
              })
            ) : (
              <DotLottieReact
                src='https://lottie.host/cc8ec496-74a6-42ab-aed9-eadfaffb1718/Zx5ooLEWE9.lottie'
                loop
                autoplay
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export const Lineup2025View = () => {
  return (
    <BaseView2025>
      <LineUp />
    </BaseView2025>
  )
}
