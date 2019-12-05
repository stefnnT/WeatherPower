import { Component, OnInit } from '@angular/core';
import { SitesService } from '../dashboard/shared/sites.service';

@Component({
  selector: 'site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {
  site: any;
  constructor(private siteService: SitesService) { }

  ngOnInit() {
    this.site = this.siteService.getSite(1);
  }

}
