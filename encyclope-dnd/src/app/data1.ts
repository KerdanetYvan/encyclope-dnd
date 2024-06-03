import { LinkList } from "./rules"

export interface Data1 {
  index:string
  name:string
  desc:string[]
}

export interface SubData {
  index:string
  name:string
  desc:string
  subsections:LinkList[]
}

export interface SubDataWithDesc {
  index:string
  name:string
  desc:string
  subsections:Data1[]
}
