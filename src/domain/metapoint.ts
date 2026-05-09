type Idol = {
  avatar: string
  createAt: number
  donate: number
  id: number
  introduction: string
  name: string
  vote: number
}

export type MetaResponse = Record<string, Idol>
