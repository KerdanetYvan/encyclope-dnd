import { Data1 } from "./data1"
import { LinkList } from "./rules"

export interface Ability {
  full_name:string
  desc:string[]
  skills:LinkList[]
}

export interface AbilityWithSkillDescription{
  full_name: string
  desc: string[]
  skills:Data1[]
}
