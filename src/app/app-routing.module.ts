import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { SpacexListComponent } from './components/spacex-list/spacex-list.component';

const routes: Routes = [
  {
    path: '',component: SpacexListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
