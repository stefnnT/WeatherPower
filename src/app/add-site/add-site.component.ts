import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent {

  isDirty: boolean = true;
  
  constructor(private router: Router) {}
  
  goBackHome() {
    //this.router.navigate(['/dashboard']);
    myObservable.subscribe(myObserver);
  }

}

const myObservable = of(1, 2, 3);

const myObserver: any = {
  next: x => console.log(x),
  complete: () => console.log('done'),
  error: err => console.log(err)
};
