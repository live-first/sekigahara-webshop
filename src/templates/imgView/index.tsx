import React from 'react'
import './style.css'
import { Img } from '@/components/Image'

interface ImgProp {
  children?: React.ReactNode
  imgUrl?: string
  width?: string
  height?: string
  iconSize?: string
  fontSize?: string
  borderRadius?: string
  childrenHeight?: string
  backImg: string
}

export const ImgView = (props: ImgProp) => {
  const { children, imgUrl, width, height, borderRadius, fontSize, childrenHeight, backImg } = props

  const imgHeight = () => {
    return `calc(100% - ${childrenHeight}`
  }

  return (
    <div
      className='img-area'
      style={{
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${borderRadius ? borderRadius : ''}`,
      }}
    >
      {imgUrl ? (
        <>
          <Img cName='event-card-back-img' src={backImg} alt='' style={{ height: imgHeight() }} />
          <Img cName='event-card-img' src={imgUrl} alt='' style={{ height: imgHeight() }} />
        </>
      ) : (
        <div className='no-image' style={{ height: imgHeight() }}>
          <div className='img-content' style={{ fontSize: `${fontSize}` }}>
            No Image
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
