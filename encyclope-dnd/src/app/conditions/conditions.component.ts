import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Data1 } from '../data1';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrl: './conditions.component.css'
})
export class ConditionsComponent {
  constructor(
    public apiService:ApiService
  ){}

  conditions: Data1[] = [];
  ngOnInit(): void {
    this.apiService.getConditions().subscribe((allConditions) => {
      allConditions.results.forEach(condition => {
        this.apiService.getCondition(condition.index).subscribe(a => {
          this.conditions.push(a)
        })
      })
    })
  }
}
