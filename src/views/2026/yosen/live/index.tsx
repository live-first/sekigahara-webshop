import { Box, Tab, Tabs } from '@mui/material'
import { PropsWithChildren, useState } from 'react'
import { edoEvents } from './edo'
import { YosenAccordion } from '@/templates/accordion/YosenAccordion'
import { owariEvents } from './owari'
import { osakaEvents } from './osaka'
import { YosenTitle } from '@/components/title/title'

export const YosenLiveView = () => {
  const [value, setValue] = useState<number>(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const a11yProps = (index: number) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    }
  }

  return (
    <div className='flex flex-col gap-6 pb-12 p-2 md:px-20 lg:px-36'>
      <YosenTitle title='〜 LIVE 〜' />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            variant='fullWidth'
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab className='!text-lg !bg-edo f-textshadow !text-white' label='江戸の陣' {...a11yProps(0)} />
            <Tab className='!text-lg !bg-owari f-textshadow !text-white' label='尾張の陣' {...a11yProps(1)} />
            <Tab className='!text-lg !bg-osaka f-textshadow !text-orange-400' label='大阪の陣' {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className='p-4 bg-edo_bg border-x-2 border-x-edo border-b-2 border-b-edo'>
            {edoEvents.length === 0 && (
              <p className='text-center text-black'>現在、イベントはありません。</p>
            )}
            {edoEvents.map((event, index) => (
              <YosenAccordion {...event} key={`edo-${index}`} />
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className='p-4 bg-owari_bg border-x-2 border-x-owari border-b-2 border-b-owari'>
            {owariEvents.length === 0 && (
              <p className='text-center text-black'>現在、イベントはありません。</p>
            )}
            {owariEvents.map((event, index) => (
              <YosenAccordion {...event} key={`owari-${index}`} />
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className='p-4 bg-osaka_bg border-x-2 border-x-osaka border-b-2 border-b-osaka'>
            {osakaEvents.length === 0 && (
              <p className='text-center text-black'>現在、イベントはありません。</p>
            )}
            {osakaEvents.map((event, index) => (
              <YosenAccordion {...event} key={`osaka-${index}`} />
            ))}
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  )
}

type TabPanelProps = {
  index: number
  value: number
}

const CustomTabPanel = (props: PropsWithChildren<TabPanelProps>) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}
