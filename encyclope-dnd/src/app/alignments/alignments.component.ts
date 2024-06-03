import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Data1 } from '../data1';

@Component({
  selector: 'app-alignments',
  templateUrl: './alignments.component.html',
  styleUrl: './alignments.component.css'
})
export class AlignmentsComponent {
  constructor(
    public apiService:ApiService
  ){}

  alignments: Data1[] = [];
  ngOnInit(): void {
    this.apiService.getAlignments().subscribe((allAlignments) => {
      console.log(allAlignments)
      allAlignments.results.forEach(alignment => {
        this.apiService.getAlignment(alignment.index).subscribe(a => {
          this.alignments.push(a)
        })
      });
    })
  }
}
