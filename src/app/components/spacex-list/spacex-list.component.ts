import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';
import { PastLaunchesListGQL } from 'src/app/services/spacexGraphql.service';


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
  dataSource =  [];
  selectedQuerie !: string;
  
  constructor(private readonly pastLaunchesService: PastLaunchesListGQL , private apollo: Apollo) { }

  ngOnInit(): void {
    this.onSelected(this.queries[0]);
   

  }
  onSelected(value:string){
    console.log(value);
    this.selectedQuerie = value;
    if(value === 'Launch Data'){
      console.log('in launch block ')
    this.apollo.watchQuery<any>(
      {
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
    }
    ).valueChanges.pipe(
      map(result => result.data.launches)
    ).subscribe( launches => {
      this.dataSource = launches
      console.log(launches)
      
    });
    
  }
  else if (value === 'Rocket Data'){
    console.log('in rocket block ')
    this.apollo.watchQuery<any>(
      {
      query: gql`
        query {
          rockets {
            id
            name
            company
          }
        
        }
      `
    }
    ).valueChanges.pipe(
      map(result => result.data.rockets)
    ).subscribe( rockets => {
      this.dataSource = rockets
      console.log(rockets)
      
    });
  }
  else if (value === 'Mission Data'){
    this.apollo.watchQuery<any>(
      {
      query: gql`
        query {
          missions {
            id
            name
            description
          }
        
        }
      `
    }
    ).valueChanges.pipe(
      map(result => result.data.missions)
    ).subscribe( missions => {
      this.dataSource = missions
      console.log(missions)
      
    });
  }
}

}
