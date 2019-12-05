import { Component } from '@angular/core';

@Component({
    template: `
        <h1 class="error404">404'd</h1>
    `,
    styles: [`
        .error404 {
            margin-top: 150px;
            font-size: 200px;
            text-align: center;
        }
    `]
})

export class Error404Component {

}