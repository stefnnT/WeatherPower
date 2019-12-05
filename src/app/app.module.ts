import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardThumbnailComponent } from './dashboard/dashboard-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SitesService } from './dashboard/shared/sites.service';
import { ToastrService } from './common/toastr.service';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AddSiteComponent } from './add-site/add-site.component';
import { Error404Component } from './errors/404.component';
import { checkDirtyState } from './site-detail/check-dirty-state'
import { SitesListResolver } from './dashboard/sites-list-resolver.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardThumbnailComponent,
    NavbarComponent,
    SiteDetailComponent,
    AddSiteComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SitesService,
    ToastrService,
    SitesListResolver,
    { 
      provide: 'canDeactivateAddSiteComponent', 
      useValue: checkDirtyState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
