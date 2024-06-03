import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Spells, SpellsWithName } from '../spells';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
export class SpellsComponent {
  constructor(public apiService:ApiService){}

  allSpells: SpellsWithName[] = [];

  ngOnInit(): void {
    this.apiService.getSpells().subscribe((allSpell) => {
      allSpell.results.forEach((Spell) => {
        this.apiService.getSpell(Spell.index).subscribe((sp) => {
          let nSch: string = '';
          this.apiService.getSchool(sp.school).subscribe(a => {
            nSch = a.name
          })
          let nCl: string[] = [];
          sp.classes.forEach(b => {
            nCl.push(b.name)
          })
          const spWithName: SpellsWithName = {...sp,nameSchool:nSch,nameClasses:nCl}
          this.allSpells.push(spWithName)
        })
      })
    })
  }

}
