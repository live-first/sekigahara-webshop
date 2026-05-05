import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { SlArrowDown } from 'react-icons/sl'
import Link from 'next/link'
import { Img } from '@/components/Image'

export type YosenAccordionProps = {
  cName?: string
  title: string
  date: string
  open?: string
  start?: string
  place: string
  artists: string
  ticket?: string
  image1?: string
  image2?: string
}

export const YosenAccordion = (props: YosenAccordionProps) => {
  const { cName, title, date, open, start, place, artists, ticket, image1, image2 } = props
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<SlArrowDown />}
        className={`bg-${cName} text-lg font-bold text-black`}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <div className='font-bold'>日時</div>
        <div className='pl-2'>{date}</div>
        <div className='font-bold'>会場</div>
        <div className='pl-2'>{place}</div>
        {open ? (
          <>
            <div className='font-bold'>開場{start ? '/開演' : ''}</div>
            <div className='pl-2'>
              {open}
              {start ? <span> / {start}</span> : <></>}
            </div>
          </>
        ) : (
          <></>
        )}
        <div className='font-bold'>出演者</div>
        <div className='pl-2'>{artists}</div>
        {ticket ? (
          <>
            <div className='font-bold'>チケット</div>
            <div className='pl-2'>
              <Link target='_blank' href={ticket}>
                {ticket}
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className='pt-2'>
          {image1 && <Img src={image1 ?? ''} alt='' />}
          {image2 && <Img src={image2 ?? ''} alt='' />}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
