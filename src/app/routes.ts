import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { Error404Component } from './errors/404.component';
import { SitesListResolver } from './dashboard/sites-list-resolver.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, resolve: {sites: SitesListResolver} },
    { path: 'sites/add-new', component: AddSiteComponent, canDeactivate: ['canDeactivateAddSiteComponent'] },
    { path: 'sites/:siteId', component: SiteDetailComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]