import { Component, OnInit } from '@angular/core';
import { UniversitiesService } from 'src/app/services/universities.service';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  styleUrls: ['./university-search.component.scss']
})
export class UniversitySearchComponent implements OnInit {

  uniSearch = '';
  constructor(private universitiesService: UniversitiesService) { }

  ngOnInit(): void {
  }
  onSearchUni() {
    this.universitiesService.searchUniversity(this.uniSearch.toUpperCase());
  }

}
