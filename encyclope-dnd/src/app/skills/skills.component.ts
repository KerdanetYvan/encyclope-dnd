import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Data1 } from '../data1';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  constructor( public apiService: ApiService ){}

  skills: Data1[] = [];
  ngOnInit(): void {
    this.apiService.getSkills().subscribe(allSkills => {
      allSkills.results.forEach(skill => {
        this.apiService.getSkill(skill.index).subscribe(a => {
          this.skills.push(a)
        })
      })
    })
  }
}
