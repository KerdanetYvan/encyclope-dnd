export interface Rules {
  ability_scores:Results[]
  alignments:Results[]
  conditions:Results[]
  "damage-types":Results[]
  "magic-schools":Results[]
  rule:Results[]
  "weapon-properties":Results[]
  skills:Results[]
}

export interface Results {
  results:LinkList[]
}

export interface LinkList {
  index:string
  name:string
  url:string
}
