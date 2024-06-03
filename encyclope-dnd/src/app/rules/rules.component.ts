import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Data1, SubDataWithDesc } from '../data1';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.css'
})
export class RulesComponent {
  constructor( public apiService: ApiService ){}

  rules: SubDataWithDesc[] = [];
  subsections: Data1[] = [];
  ngOnInit(): void {
    this.apiService.getRules().subscribe(allRules => {
      allRules.results.forEach(rule => {
        this.apiService.getRule(rule.index).subscribe(a => {
          const rulesWithDesc:Data1[] = []
          a.subsections.forEach(ss => {
            this.apiService.getSubSection(ss.index).subscribe(s => {
              rulesWithDesc.push(s)
            })
          })
          const rd: SubDataWithDesc = {...a,subsections:rulesWithDesc}
          this.rules.push(rd)
        })
      })
    })
  }
}
