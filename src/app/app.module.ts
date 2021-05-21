import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material

import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { HomeslidesComponent } from './homeslides/homeslides.component';
import { HomebannerComponent } from './homebanner/homebanner.component';
import { DealbrandsComponent } from './dealbrands/dealbrands.component';
import { TreandingweasternComponent } from './treandingweastern/treandingweastern.component';
import { TreandingindianComponent } from './treandingindian/treandingindian.component';
import { TreandingaccessoriesComponent } from './treandingaccessories/treandingaccessories.component';
import { FooterComponent } from './footer/footer.component';
import { DaydealsComponent } from './daydeals/daydeals.component';
import { TreandingsportswearComponent } from './treandingsportswear/treandingsportswear.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './dashboard/product/product.component';
import { UserprofileComponent } from './dashboard/userprofile/userprofile.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { MyordersComponent } from './dashboard/myorders/myorders.component';
import { MywishlistComponent } from './dashboard/mywishlist/mywishlist.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { MensTshirtsComponent } from './mens-tshirts/mens-tshirts.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeslidesComponent,
    HomebannerComponent,
    DealbrandsComponent,
    TreandingweasternComponent,
    TreandingindianComponent,
    TreandingaccessoriesComponent,
    FooterComponent,
    DaydealsComponent,
    TreandingsportswearComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    UserprofileComponent,
    NotificationsComponent,
    MyordersComponent,
    MywishlistComponent,
    SidenavComponent,
    MensTshirtsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatFormFieldModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
