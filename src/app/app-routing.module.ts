import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TriandashComponent } from './triandash/triandash.component';
import {MapdashComponent} from './mapdash/mapdash.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard',
   component:TriandashComponent,
 children:[
  {path:'mapsol', component:MapdashComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent=[LoginComponent, TriandashComponent, MapdashComponent]
