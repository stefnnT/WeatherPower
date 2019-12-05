import { Component, OnInit } from '@angular/core';
import { SitesService } from './shared/sites.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  sites: any[];

  constructor(private sitesService: SitesService, private route: ActivatedRoute) {}
  
  showStatus(data) {
    //change this to popper or toastr
    console.log(data);
  }

  ngOnInit() {
    this.sites = this.route.snapshot.data['sites']
  }

}
