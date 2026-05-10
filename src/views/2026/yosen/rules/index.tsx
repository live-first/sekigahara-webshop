import { Frame } from '@/components/Frame'
import { Heading } from '@/components/Heading'
import { Img } from '@/components/Image'
import { YosenTitle } from '@/components/title/title'
import rule from '@/image/2026/yosenkai2026_yosen_rule.jpg'

export const YosenRulesView = () => {
  return (
    <div className='flex flex-col gap-6 pb-12 p-2 md:px-20 lg:px-36'>
      <YosenTitle title='〜 投俵ルール 〜' />
      <Img src={rule.src} alt='関ケ原歌姫合戦2026 予戦会 ルール' />
      <Frame>
        <Header title='順位別特典について' />
        <Heading tag={4} label='1位' className='text-black' />
        <div className='flex flex-col gap-1 pl-6 py-4 text-black'>
          3DAYS(6ステージ)出演権・最終決戦出場権
          <br />
          MARQUEE掲載1P
          <br />
          無銭イベント開催権(200キャパ、8〜10月内) <br />
          関ケ原唄姫合戦2026会場内にパネル展示
          <br />
          関ケ原唄姫合戦2026会場内にのぼり20本展開
          <br />
          出演日食券30000円分
          <br />
        </div>
        <Heading tag={4} label='2位' className='text-black' />
        <div className='flex flex-col gap-1 pl-6 py-4 text-black'>
          3DAYS(5ステージ)出演権・最終決戦出場権
          <br />
          MARQUEE掲載0.5P
          <br />
          無銭イベント開催権(150キャパ、8〜10月内) <br />
          関ケ原唄姫合戦2026会場内にパネル展示
          <br />
          関ケ原唄姫合戦2026会場内にのぼり10本展開
          <br />
          出演日食券20000円分
          <br />
        </div>
        <Heading tag={4} label='3位' className='text-black' />
        <div className='flex flex-col gap-1 pl-6 py-4 text-black'>
          3DAYS(5ステージ)出演権・最終決戦出場権
          <br />
          MARQUEE掲載0.5P
          <br />
          無銭イベント開催権(100キャパ、8〜10月内) <br />
          関ケ原唄姫合戦2026会場内にパネル展示
          <br />
          関ケ原唄姫合戦2026会場内にのぼり5本展開
          <br />
          出演日食券10000円分
          <br />
        </div>
        <Heading tag={4} label='4〜7位' className='text-black' />
        <div className='flex flex-col gap-1 pl-6 py-4 text-black'>
          2DAYS(4ステージ)出演権・最終決戦出場権
          <br />
        </div>
        <Heading tag={4} label='8〜12位' className='text-black' />
        <div className='flex flex-col gap-1 pl-6 py-4 text-black'>
          2DAYS(3ステージ)出演権・最終決戦出場権
          <br />
        </div>
        <Heading tag={4} label='13〜20位' className='text-black' />
        <div className='flex flex-col gap-1 pl-6 py-4 text-black'>
          2DAYS(2ステージ)出演権
          <br />
        </div>
      </Frame>
    </div>
  )
}

const Header = ({ title }: { title: string }) => {
  return (
    <h3 className='flex text-center text-2xl font-bold border-b-[#e14040] border-b-2 mb-6 py-2 text-[#e14040]'>
      {title}
    </h3>
  )
}
