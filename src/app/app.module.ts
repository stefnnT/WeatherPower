import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardThumbnailComponent } from './dashboard/dashboard-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SitesService } from './dashboard/shared/sites.service';
import { ToastrService } from './common/toastr.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SitesService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
