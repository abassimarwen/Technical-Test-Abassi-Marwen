import { Component, OnInit, ViewChild,Input } from '@angular/core';


@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  displayedColumns: string[] =['id', 'mission_name','launch_date_utc'];
  displayedColumns1: string[] =['id','name','company'];
  displayedColumns2: string[] =['id','name','description'];
  
 
  @Input() dataSource =  [];
  @Input() querie !:string ;
  @Input() re!:any;

  


  constructor() { }

  ngOnInit() {}
  
}
