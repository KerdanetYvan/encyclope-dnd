import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Data1 } from '../data1';

@Component({
  selector: 'app-magic-schools',
  templateUrl: './magic-schools.component.html',
  styleUrl: './magic-schools.component.css'
})
export class MagicSchoolsComponent {
  constructor(public apiService: ApiService) {}

  magicShools: Data1[] = [];
  ngOnInit(): void {
    this.apiService.getMagicSchools().subscribe(allMagicSchools => {
      allMagicSchools.results.forEach(magicSchool => {
        this.apiService.getMagicSchool(magicSchool.index).subscribe(d => {
          this.magicShools.push(d)
        })
      })
    })
  }
}
