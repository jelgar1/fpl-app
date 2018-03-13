import { Component, OnInit } from '@angular/core';
import { TEAMS } from "../mock-teams";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  teams = TEAMS;
  ngOnInit() {
  }

}
