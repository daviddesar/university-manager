import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-universities-main',
  templateUrl: './university-main.component.html',
  styleUrls: ['./university-main.component.scss']
})
export class UniversityMainComponent implements OnInit {

  isEditable: boolean;
  constructor(
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
