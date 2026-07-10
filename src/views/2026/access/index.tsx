'use client'

import { Title } from '@/components/title/title'
import './style.css'
import { Container } from '@mui/material'
import { Img } from '@/components/Image'
import { Heading } from '@/components/Heading'

export const AccessView = () => {
  return (
    <div className=''>
      <Container maxWidth='md' className='flex flex-col gap-6'>
        <Title english='ACCESS' japaniese='会場アクセス' />
        <div className='my-4'>
          <div className='flex flex-col gap-4'>
            <Heading tag={4} label='桃配運動公園' className='text-sekigahara' />
            <div className='col'>
              <div>桃配運動公園</div>
              <div>〒503-1532 岐阜県不破郡関ケ原町野上1673-11</div>
              <div>「関ケ原駅」よりバスで約10分</div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full items-center my-4'>
          <iframe
            title='access-map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.5782728519935!2d136.49103081142948!3d35.366111072576665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003cac1c371e95b%3A0x9f50d1867cf24afd!2z5qGD6YWN6YGL5YuV5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1708770099558!5m2!1sja!2sjp'
            width='600'
            height='450'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </div>
        <div className='flex flex-col gap-4 my-4'>
          <Heading tag={4} label='公共交通機関でお越しの方' className='text-sekigahara' />
          <Img
            src='https://sekigahara-idolwars.net/common/access_route.png'
            alt='関ケ原歌姫合戦2026 アクセス'
          />
          <Img src='https://sekigahara-idolwars.net/2026/timetable/bus.jpg' alt='bus' />
        </div>
        <div className='flex flex-col gap-4 my-4'>
          <Heading tag={4} label='車でお越しの方' className='text-sekigahara' />
          <Img src='https://sekigahara-idolwars.net/2026/timetable/parking.jpg' alt='parking' />
        </div>
      </Container>
    </div>
  )
}
