import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Data1 } from '../data1';

@Component({
  selector: 'app-weapon-properties',
  templateUrl: './weapon-properties.component.html',
  styleUrl: './weapon-properties.component.css'
})
export class WeaponPropertiesComponent {
  constructor( public apiService: ApiService ){}

  weaponProperties: Data1[] = [];
  ngOnInit(): void {
    this.apiService.getWeaponProperties().subscribe(allWeaponProperties => {
      allWeaponProperties.results.forEach(weaponProperty => {
        this.apiService.getWeaponProperty(weaponProperty.index).subscribe(a => {
          this.weaponProperties.push(a)
        })
      })
    })
  }
}
