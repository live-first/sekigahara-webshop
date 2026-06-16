'use client'

import { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { ArtistResponseType } from '@/domain/artist.ts'
import { Title } from '@/components/title/title.tsx'
import { ArtistBoxModal } from './ArtistBoxModal'

export const Lineup2026View = () => {
  const [units, setUnit] = useState<ArtistResponseType[]>([])
  const [viewUnits, setViewUnits] = useState<ArtistResponseType[]>([])
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

  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbwPyhxfmgyr95_Wu6UDXUJixC24-3NC2OfM9OrxnYmUg9wKcEx35Z0ss04XZA2uI58v/exec',
      { mode: 'cors' },
    )
      .then((response) => response.json())
      .then((data: ArtistResponseType[]) => {
        setUnit(data)
        setViewUnits(data)
      })
      .catch((error) => {
        console.error('リクエストエラー:', error)
      })
  }, [])

  return (
    <div className='lineup'>
      <Container maxWidth='lg'>
        <Title english='LINE UP' japaniese='出演者情報' />
        <div className='pb-24'>
          <div className='describe'>（50音順）</div>
          {units && (
            <div className='flex py-6'>
              <div className='w-1/3'>
                <button className='day1 w-full py-2 rounded-full' onClick={() => onClickDay1()}>
                  18日
                </button>
              </div>
              <div className='w-1/3'>
                <button className='day2 w-full py-2 rounded-full' onClick={() => onClickDay2()}>
                  19日
                </button>
              </div>
              <div className='w-1/3'>
                <button className='day3 w-full py-2 rounded-full' onClick={() => onClickDay3()}>
                  20日
                </button>
              </div>
            </div>
          )}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'>
            {viewUnits.map((unit, index) => {
              return (
                <ArtistBoxModal
                  {...unit}
                  img={{
                    src: `https://sekigahara-idolwars.net/2026/artists/${unit.img}`,
                    alt: unit.name,
                  }}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}
