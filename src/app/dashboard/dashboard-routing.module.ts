import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyordersComponent } from './myorders/myorders.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../shared/auth.guard';

const dashboardrouting:Routes=[

{
  path:'dashboard',
  component:DashboardComponent,
  canActivate:[AuthGuard],
  children:[
    {
      path:'userprofile',
      component:UserprofileComponent
    },
    {
      path:'notifications',
      component:NotificationsComponent
    },
    {
      path:'myorders',
      component:MyordersComponent
    },
    {
      path:'mywishlist',
      component:MywishlistComponent
    },
  ]
},
]

@NgModule({
  imports: [RouterModule.forRoot(dashboardrouting)],
  exports: [RouterModule]
})

export class DashboardRoutingModule{}
