import { imgInit, ImgType } from './img'

export type RankingType = {
  date: string
  time: string
  ranking: RankingUnit[]
}

export const rankingInit: RankingType = {
  date: '',
  time: '',
  ranking: [],
}

export type RankingUnit = UnitType & {
  point: number
  live?: number
  meta?: number
}

export type UnitType = {
  id?: number
  name: string
  yomi?: string
  img: ImgType
  content?: string
  movie?: string
  x?: string
  insta?: string
  tiktok?: string
  youtube?: string
  other?: string
  withColle?: string
}

export const UnitInit: UnitType = {
  name: '',
  img: imgInit,
  x: '',
}
