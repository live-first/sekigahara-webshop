'use client'

import { useState } from 'react'
import './header.scss'
import { Img } from '@/components/Image'
import Link from 'next/link'
import logo from '@/image/2026/logo_2026.png'

export const Header = () => {
  const [value, setValue] = useState(false)

  const classToggle = () => {
    setValue(!value)
  }

  return (
    <div className='header-body'>
      <h1 className='flex flex-col max-h-full'>
        <Link href='/' className='flex flex-col h-full'>
          <Img cName='h-[44px] w-auto' src={logo.src} alt='logo' notNext />
        </Link>
      </h1>
      <div className='menu-nav-pc'>
        <Menu displayMode={'inline-flex'} />
      </div>
      <div className='menu-nav-sp'>
        <MenuSp displayMode={value ? 'block' : 'none'} />
      </div>
      <div className={`hamburger-menu ${value ? 'active' : ''}`} id='menu01' onClick={classToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

type MenuProp = {
  displayMode: string
}
const Menu = (props: MenuProp) => {
  const { displayMode } = props

  return (
    <div className='menu-view' style={{ display: `${displayMode}` }}>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link href='/about' className='nav-link'>
            ABOUT<div>関ケ原唄姫合戦</div>
          </Link>
        </li>
        <li className='nav-li'>
          <Link href='/ticket' className='nav-link'>
            TICKET<div>チケット</div>
          </Link>
        </li>
        <li className='nav-li'>
          <Link href='/lineup' className='nav-link'>
            LINE UP<div>出演者情報</div>
          </Link>
        </li>
        <li className='nav-li'>
          <div className='nav-link'>
            TIMETABLE<div>タイムテーブル</div>
          </div>
          <ul className='dropdown-menu'>
            <li className='dropdown-li'>
              <Link href='/live' className='nav-link'>
                LIVE<div>ライブ</div>
              </Link>
            </li>
            <li className='dropdown-li'>
              <Link href='/greeting' className='nav-link'>
                GREETING<div>物販・特典会</div>
              </Link>
            </li>
          </ul>
        </li>
        {/* <li className='nav-li'>
          <div className='nav-link'>SHOP<div>ショップ</div></div>
          <ul className='dropdown-menu'>
            <li className='dropdown-li'><Link href='/2024/goods' className='nav-link'>GOODS<div>グッズ</div></Link></li>
            <li className='dropdown-li'><Link href='/2024/foods' className='nav-link'>FOODS<div>飲食情報</div></Link></li>
          </ul>
        </li> */}
        <li className='nav-li'>
          <Link href='/notice' className='nav-link'>
            NOTICE<div>注意事項</div>
          </Link>
        </li>
        <li className='nav-li'>
          <div className='nav-link'>
            MAP<div>マップ</div>
          </div>
          <ul className='dropdown-menu'>
            <li className='dropdown-li'>
              <Link href='/map' className='nav-link'>
                MAP<div>マップ</div>
              </Link>
            </li>
            <li className='dropdown-li'>
              <Link href='/access' className='nav-link'>
                ACCESS<div>アクセス</div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

const MenuSp = (props: MenuProp) => {
  const { displayMode } = props

  return (
    <div className='menu-sp-view' style={{ display: `${displayMode}` }}>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link href='/about' className='nav-link'>
            ABOUT<span>関ケ原唄姫合戦</span>
          </Link>
        </li>
        <li className='nav-li'>
          <Link href='/ticket' className='nav-link'>
            TICKET<span>チケット</span>
          </Link>
        </li>
        <li className='nav-li'>
          <Link href='/lineup' className='nav-link'>
            LINE UP<span>出演者情報</span>
          </Link>
        </li>
        <li className='nav-li'>
          <div className='nav-link'>
            TIMETABLE<span>タイムテーブル</span>
          </div>
          <ul className='dropdown-ul'>
            <li className='dropdown-li'>
              <Link href='/live' className='nav-link'>
                LIVE<span>ライブ</span>
              </Link>
            </li>
            <li className='dropdown-li'>
              <Link href='/greeting' className='nav-link'>
                GREETING<span>物販・特典会</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* <li className='nav-li'>
          <div className='nav-link'>SHOP<span>ショップ</span></div>
          <ul className='dropdown-ul'>
            <li className='dropdown-li'><Link href='/goods' className='nav-link'>GOODS<span>グッズ</span></Link></li>
            <li className='dropdown-li'><Link href='/foods' className='nav-link'>FOODS<span>飲食情報</span></Link></li>
          </ul>
        </li> */}
        <li className='nav-li'>
          <Link href='/notice' className='nav-link'>
            NOTICE<span>注意事項</span>
          </Link>
        </li>
        <li className='nav-li'>
          <div className='nav-link'>
            MAP<span>マップ</span>
          </div>
          <ul className='dropdown-ul'>
            <li className='dropdown-li'>
              <Link href='/map' className='nav-link'>
                MAP<span>マップ</span>
              </Link>
            </li>
            <li className='dropdown-li'>
              <Link href='/access' className='nav-link'>
                ACCESS<span>アクセス</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
