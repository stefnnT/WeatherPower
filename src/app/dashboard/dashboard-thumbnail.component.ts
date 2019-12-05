import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'dashboard-thumbnail',
    templateUrl: './dashboard-thumbnail.component.html',
    styles: [`
        .thumbnail { min-height: 190px }
    `]
})

export class DashboardThumbnailComponent {
    @Input() site: any;
    @Output() siteStatus = new EventEmitter();

    constructor(private toastr: ToastrService) {}

    showStatus() {
        this.toastr.success(this.site.status, this.site.name);
    }
}