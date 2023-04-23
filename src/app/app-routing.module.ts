import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AddadminComponent } from './adminCRUD/addadmin/addadmin.component';
import { UpdateadminComponent } from './adminCRUD/updateadmin/updateadmin.component';
import { ViewadminComponent } from './adminCRUD/viewadmin/viewadmin.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  { path: 'admins', component: ViewadminComponent },
  { path: 'add', component: AddadminComponent },
  { path: 'update/:cin', component: UpdateadminComponent },
  { path: 'subscribers', component: SubscribersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
