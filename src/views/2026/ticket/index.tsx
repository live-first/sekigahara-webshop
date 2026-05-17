'use client'

import { Alert, Container } from '@mui/material'
import './index.css'
import { Title } from '@/components/title/title.tsx'
import Link from 'next/link'
import { Frame } from '@/components/Frame/index.tsx'
import { Heading } from '@/components/Heading/index.tsx'
import { Img } from '@/components/Image/index.tsx'

export const TicketView = () => {
  return (
    <div className='ticket'>
      <Container maxWidth='lg'>
        <Title english='TICKET' japaniese='チケット概要' />
      </Container>
      <Container maxWidth='sm'>
        <div className='flex flex-col gap-4 py-4'>
          <Frame>
            <Heading tag={3} label='プレミアチケット' />
            <div className='py-4'>
              <div className='flex flex-col border-sekigahara border-2 my-3'>
                ・プレミア専用入場口
                <br />
                ・プレミア優先エリア（徳川・豊臣ステージ）
                <br />
                ・専用休憩所
                <br />
                ・プレミアオリジナルTシャツ
                <br />
                ・フリードリンク（ソフトドリンクのみ）
              </div>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='3DAYSチケット(P)　　52,000円' />
                <label className='pl-4'>2026年7月18日、19日、20日</label>
              </div>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='前2DAYSチケット(P)　　37,000円' />
                <label className='pl-4'>2026年7月18日、19日</label>
              </div>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='後2DAYSチケット(P)　　37,000円' />
                <label className='pl-4'>2026年7月19日、20日</label>
              </div>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='1DAYチケット(P)　　　19,500円' />
                <label className='pl-4'>各日</label>
              </div>
            </div>
          </Frame>
          <Frame>
            <Heading tag={3} label='一般チケット' />
            <div className='py-4'>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='3DAYSチケット(A)　　19,000円' />
                <label className='pl-4'>2026年7月18日、19日、20日</label>
              </div>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='前2DAYSチケット(B)　　13,500円' />
                <label className='pl-4'>2026年7月18日、19日</label>
              </div>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='後2DAYSチケット(B)　　13,500円' />
                <label className='pl-4'>2026年7月19日、20日</label>
              </div>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='1DAYチケット(C)　　　7,500円' />
                <label className='pl-4'>各日</label>
              </div>
            </div>
          </Frame>
          <Frame>
            <Heading tag={3} label='岐阜県限定チケット' />
            <div className='py-4'>
              <div className='flex flex-col py-3'>
                <Heading tag={4} label='1DAYSチケット(G)　　6,000円' />
                <label className='pl-4'>各日</label>
              </div>
              <Alert severity='warning' className='mt-4'>
                岐阜県に在住の方のみ、チケットの購入が可能になります。入場時に顔付き身分証の確認がございますので予めご了承下さい。
              </Alert>
            </div>
          </Frame>
        </div>
      </Container>
      <Container maxWidth='lg'>
        <div className='py-4'>
          <Img src='https://sekigahara-idolwars.net/2026/ticket-detail.jpeg' alt='チケット情報' />
        </div>
        <Link href='https://ticketdive.com/event/SEKIGAHARA_2026'>
          <div className='ticket-link-btn'>チケットの購入はこちら</div>
        </Link>
      </Container>
    </div>
  )
}
