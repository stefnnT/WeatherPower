import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dashboard-thumbnail',
    templateUrl: './dashboard-thumbnail.component.html',
    styles: [`
        .thumbnail { min-height: 190px }
    `]
})

export class DashboardThumbnailComponent {
    @Input() sitesList: any;
    @Output() siteStatus = new EventEmitter();

    showStatus() {
        this.siteStatus.emit("ON");
    }
}