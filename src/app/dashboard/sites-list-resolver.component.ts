import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { SitesService } from './shared/sites.service';
//import { map } from 'rxjs/operators';

@Injectable()

export class SitesListResolver implements Resolve<any>{
    constructor(private sitesService: SitesService){}
    
    resolve(){
        return this.sitesService.getSites()
            //.pipe(map(sites => sites))
    }
}