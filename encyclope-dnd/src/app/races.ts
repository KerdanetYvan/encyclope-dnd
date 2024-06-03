import { Results } from "./rules"

export interface Races {
  index:string
  name:string
  speed:number
  ability_bonuses:AbilityBonuses[]
  alignment:string
  age:string
  size:string
  size_description:string
  starting_proficiencies:Results[]
  starting_proficiency_options:StartingProOptions
  languages:Results[]
  language_desc:string
  traits:Results[]
  subraces:Results[]
}

export interface AbilityBonuses {
  ability_score:Results
  bunus:number
}

export interface StartingProOptions {
  desc:string
  choose:number
  type:string
  from:From[]
}

export interface From {
  option_set_type:string
  options:Options[]
}

export interface Options {
  option_type:string
  item:Results
}

export interface Subrace {
  index:string
  name:string
  race:Results
  desc:string
  ability_bonuses:AbilityBonuses[]
  starting_proficiencies:Results[]
  languages:Results[]
  racial_traits:Results[]
}
