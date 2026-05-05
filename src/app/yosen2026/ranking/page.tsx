'use client'

import { YosenTitle } from '@/components/title/title'
import { HalfMenuLayout } from '@/layouts/HalfMenuLayout'
import { MenuView } from '@/views/2026/yosen/menu'
import { YosenRankingView } from '@/views/2026/yosen/ranking'
import { CommingSoonView } from '@/views/common/commingSoon/commingSoon'

export default function YosenRanking() {
  return (
    <HalfMenuLayout
      menu={<MenuView />}
      main={
        <div className='flex flex-col gap-6'>
          <YosenRankingView />
        </div>
      }
    />
  )
}
