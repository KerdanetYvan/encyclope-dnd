import { Action } from "rxjs/internal/scheduler/Action"

export interface Monster {
  name:string
  size:string
  type:string
  aligment:string
  armor_class: ArmorClass[]
  hit_points:number
  hit_dice:string
  hit_points_roll:string
  speed:Speed
  strength:number
  dexterity:number
  constitution:number
  intelligence:number
  wisdom:number
  charisma:number
  proficiencies:Proficiencies[]
  damage_vulnerabilities:string[]
  damage_resistance:string[]
  damage_immunities:string[]
  condition_immunities:string[]
  senses:Senses
  language:string
  challenge_rating:number
  proficiency_bonus:number
  xp:number
  special_abilities:SpecialAbility
  actions:Actions[]
  legendary_actions:Actions[]
  image:string
  url:string
}

export interface ArmorClass {
  type:string
  value:number
}

export interface Speed {
  walk:string
  fly:string
  swim:string
  burrow:string
}

export interface Proficiencies {
  value:number
  proficiency:Proficiency
}

export interface Proficiency {
  index:number
  name:string
  url:string
}

export interface Senses {
  blinsight:string
  darkvision:string
  temorsense:string
  truesight:string
  passive_perception:number
}

export interface SpecialAbility {
  name:string
  desc:string
  dc:DC
  spellcasting:SpellCasting
}

export interface DC {
  dc_type:DcType
  dc_value:number
  success_type:string
}

export interface DcType {
  index:string
  name:string
  url:string
}

export interface SpellCasting {
  ability:Ability
  dc:number
  components_required:string[]
  spells:Spell[]
}

export interface Ability {
  index:string
  name:string
  url:string
}

export interface Spell {
  name:string
  level:number
  url:string
  usage:Usage
}

export interface Usage {
  type:string
  rest_type:string[]
  times:number
}

export interface Actions {
  name:string
  multiattack_type:string
  desc:string
  actions:Actions
  attack_bonus:number
  damage:Damage[]
  usage:Usage
}

export interface Damage{
  damage_type:Damage_type
  damage_dice:string
}

export interface Damage_type{
  index:string
  name:string
  url:string
}

export interface ImgName {
  image:string
  name:string
}
