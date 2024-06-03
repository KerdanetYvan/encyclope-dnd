import { ImgName } from './../monster';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrl: './monsters.component.css'
})
export class MonstersComponent {
  constructor(public apiService:ApiService){}

  value = 'Search';

  AllMonsters: ImgName[] = [];
  ngOnInit(): void {
    this.apiService.getMonsters().subscribe((allMonsters) => {
      allMonsters.results.forEach((monster) => {
        this.apiService.getMonster(monster.index).subscribe((mons) => {
          const nometimage: ImgName = {
            image: '',
            name: ''
          };

          console.log(nometimage.image)
          nometimage.name = mons.name;
          this.AllMonsters.push(nometimage);
        })
      })
    })
  }

  searchMonster(): void {
    const input = (document.getElementById("searchInput") as HTMLInputElement).value.toLowerCase();
    const monsters = document.getElementsByClassName("monstre");

    if (monsters != null){
      for (let i = 0; i < monsters.length; i++) {
        const monstre = monsters[i] as HTMLElement;
        if (monstre.textContent != null){
          const monstreNom = monstre.textContent.toLowerCase();
          if (monstreNom.indexOf(input) > -1) {
            monstre.style.display = "";
          } else {
            monstre.style.display = "none";
          }
        }
      }
    }
  }
}
