import { LinkList, Results } from "./rules"

export interface Spells {
  index:string
  name:string
  desc:string[]
  higher_level:string[]
  range:string
  components:string[]
  material:string
  ritual:boolean
  duration:string
  concentration:boolean
  casting_time:string
  level:number
  attack_type:string
  damage:Damage
  school:LinkList
  classes:LinkList[]
  subclasses:Results[]
}

export interface SpellsWithName {
  index:string
  name:string
  desc:string[]
  higher_level:string[]
  range:string
  components:string[]
  material:string
  ritual:boolean
  duration:string
  concentration:boolean
  casting_time:string
  level:number
  attack_type:string
  damage:Damage
  nameSchool:string
  nameClasses:string[]
}

export interface Damage {
  damage_type:Results
  damage_at_slot_level:DamageSlotLevel
}

export interface DamageSlotLevel {
  2:string
  3:string
  4:string
  5:string
  6:string
  7:string
  8:string
  9:string
}
