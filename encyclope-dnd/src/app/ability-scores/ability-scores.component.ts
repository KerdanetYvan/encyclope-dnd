import { AbilityWithSkillDescription } from '../ability';
import { Data1 } from '../data1';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrl: './ability-scores.component.css'
})
export class AbilityScoresComponent implements OnInit {
  constructor(
    public apiService:ApiService
  ){}

  abilities: AbilityWithSkillDescription[] = [];
  skills: Data1[] = [];
  ngOnInit(): void {
    this.apiService.getAbilityScores().subscribe((allAbilities) => {
      allAbilities.results.forEach((ability) => {
        this.apiService.getAbility(ability.index).subscribe((a) => {
          const skillsWithDesc:Data1[] = []
          a.skills.forEach(sk => {
            this.apiService.getSkill(sk.index).subscribe((s) =>{
              skillsWithDesc.push(s)
            })
          })
          const ab:AbilityWithSkillDescription = {...a,skills:skillsWithDesc}
          this.abilities.push(ab)
        });
      });
    })
  }
}
