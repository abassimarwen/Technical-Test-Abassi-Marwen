import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-spacex-list',
  templateUrl: './spacex-list.component.html',
  styleUrls: ['./spacex-list.component.css']
})
export class SpacexListComponent implements OnInit {
  queries: string[] = [
    'Launch Data' ,
    'Rocket Data' ,
    'Mission Data' 
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
// ng-template => ngif