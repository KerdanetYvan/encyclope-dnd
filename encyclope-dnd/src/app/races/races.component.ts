import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent {
  constructor( public aipService:ApiService ){}

  ngOnInit(): void {

  }
}
