import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ability } from './ability';
import { Data1, SubData } from './data1';
import { Results, LinkList } from './rules';
import { Races, Subrace } from './races';
import { Spells } from './spells';
import { ImgName, Monster } from './monster';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public base1 = "https://www.dnd5eapi.co/api/"
  constructor(private http: HttpClient) { }

  getAbilityScores():  Observable<Results>{
    return this.http.get<Results>(this.base1 + 'ability-scores/');
  }

  getAbility(ability:string): Observable<Ability>{
    return this.http.get<Ability>(this.base1 + 'ability-scores/' + ability)
  }

  getSkills(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'skills/')
  }

  getSkill(skill:string): Observable<Data1>{
    return this.http.get<Data1>(this.base1 + 'skills/' + skill)
  }

  getAlignments(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'alignments/')
  }

  getAlignment(alignment:string): Observable<Data1>{
    return this.http.get<Data1>(this.base1 + 'alignments/' + alignment)
  }

  getConditions(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'conditions/')
  }

  getCondition(condition:string): Observable<Data1>{
    return this.http.get<Data1>(this.base1 + 'conditions/' + condition)
  }

  getDamageTypes(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'damage-types/')
  }

  getDamageType(damage_type:string): Observable<Data1>{
    return this.http.get<Data1>(this.base1 + 'damage-types/' + damage_type)
  }

  getMagicSchools(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'magic-schools/')
  }

  getMagicSchool(magic_school:string): Observable<Data1>{
    return this.http.get<Data1>(this.base1 + 'magic-schools/' + magic_school)
  }

  getRules(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'rules/')
  }

  getRule(rule:string): Observable<SubData>{
    return this.http.get<SubData>(this.base1 + 'rules/' + rule)
  }

  getSubSection(subsec:string): Observable<Data1>{
    return this.http.get<Data1>(this.base1 + 'rule-sections/' + subsec)
  }

  getWeaponProperties(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'weapon-properties/')
  }

  getWeaponProperty(wp:string): Observable<Data1>{
    return this.http.get<Data1>(this.base1 + 'weapon-properties/' + wp)
  }

  getRaces(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'races/')
  }

  getRace(race:string): Observable<Races>{
    return this.http.get<Races>(this.base1 + 'races/' + race)
  }

  getSubraces(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'subraces/')
  }

  getSubrace(sr:string): Observable<Subrace>{
    return this.http.get<Subrace>(this.base1 + 'subraces/' + sr)
  }

  getSpells(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'spells/')
  }

  getSpell(spell:string): Observable<Spells>{
    return this.http.get<Spells>(this.base1 + 'spells/' + spell)
  }

  getSchool(school:LinkList): Observable<LinkList>{
    return this.http.get<LinkList>(this.base1 + 'magic-schools/' + school.index)
  }

  getClasses(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'classes/')
  }

  getMonsters(): Observable<Results>{
    return this.http.get<Results>(this.base1 + 'monsters')
  }

  getMonster(monster:string): Observable<Monster>{
    return this.http.get<Monster>(this.base1 + 'monsters/' + monster)
  }
}
