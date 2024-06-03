import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Data1 } from '../data1';

@Component({
  selector: 'app-damage-types',
  templateUrl: './damage-types.component.html',
  styleUrl: './damage-types.component.css'
})
export class DamageTypesComponent {
  constructor(public apiService: ApiService) {}

  damageTypes: Data1[] = [];
  ngOnInit(): void {
    this.apiService.getDamageTypes().subscribe(allDamageTypes => {
      allDamageTypes.results.forEach(damageType => {
        this.apiService.getDamageType(damageType.index).subscribe(d => {
          this.damageTypes.push(d)
        })
      })
    })
  }
}
