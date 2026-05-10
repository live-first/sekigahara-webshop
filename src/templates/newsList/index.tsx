'use client'

import React, { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { formatDate } from '@/utils/stringUtils'
import { NewsContentsType } from '@/domain/news'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2'

type NewsListProps = {
  news: NewsContentsType[]
  max?: number
  isPagination?: boolean
}

export const NewsList = (props: NewsListProps) => {
  const { news, max = news.length, isPagination } = props
  const maxContent = max ? max : 10
  const pageCount = Math.ceil(news.length / maxContent)
  const [page, setPage] = useState<number>(1)
  const [displayedItems, setDisplayedItems] = useState<NewsContentsType[]>(news)

  //表示データを抽出
  useEffect(() => {
    setDisplayedItems(news.slice((page - 1) * maxContent, page * maxContent))
  }, [page, news, maxContent])

  const handleChange = (event: ChangeEvent<unknown>, index: number) => {
    setPage(index)
  }

  return (
    <div className='flex flex-col'>
      {displayedItems.map((data, index) => {
        return (
          <div
            className='p-1 bg-white mx-3 mb-3 rounded-md border border-sekigahara shadow-[2px_2px_0_0_#e14040] hover:shadow-none hover:translate-y-2'
            key={index}
          >
            <Link href={`/news/${data.id}`}>
              <div className='font-bold text-sekigahara'>
                {formatDate(data.openedAt ?? data.publishedAt, 'YYYY / MM / DD')}
              </div>
              <div className='pl-5 font-normal text-sekigahara'>{data.title}</div>
            </Link>
          </div>
        )
      })}
      {isPagination ? (
        <div className='flex justify-center mt-6'>
          <Pagination
            className='pagination'
            count={pageCount < 1 ? 1 : pageCount}
            onChange={handleChange}
            page={page}
            renderItem={(item) => (
              <PaginationItem slots={{ previous: HiArrowLeft, next: HiArrowRight }} {...item} />
            )}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
