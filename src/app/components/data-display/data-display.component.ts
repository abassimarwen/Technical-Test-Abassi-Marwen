import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { map } from 'rxjs';
import { PastLaunchesListGQL } from 'src/app/services/spacexGraphql.service';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  displayedColumns: string[] = ['id', 'mission_name'];
  dataSource =  []
 
  


  constructor(private readonly pastLaunchesService: PastLaunchesListGQL , private apollo: Apollo) { }

  

 
  
  ngOnInit() {

    

    this.apollo.watchQuery<any>({
      query: gql`
        query {
          launches {
          id
            mission_name
            launch_date_utc
            links {
              flickr_images
            }
          }
        }
      `
    }).valueChanges.pipe(
      map(result => result.data.launches)
    ).subscribe( launches => {
      this.dataSource = launches
      // new MatTableDataSource(launches);
    });
  }
  
}
