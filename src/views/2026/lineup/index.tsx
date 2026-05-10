'use client'

import { useState } from 'react'
import { Container } from '@mui/material'
import './lineup.css'
import { ArtistType } from '@/domain/artist.ts'
import { Title } from '@/components/title/title.tsx'
import { ArtistBoxModal } from '@/templates/modal/ArtistBoxModal.tsx'

export const Lineup2026View = () => {
  const [units] = useState<ArtistType[]>([])
  const [viewUnits, setViewUnits] = useState<ArtistType[]>([])
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
            {viewUnits.map((unit, index) => {
              return <ArtistBoxModal {...unit} key={index} />
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

