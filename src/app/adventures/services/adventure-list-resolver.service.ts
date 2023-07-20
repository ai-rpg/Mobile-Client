import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AdventureModel } from '../../api/adventure-service/models/adventure-model'
import { AdventureService } from './adventure.service'
@Injectable()
export class AdventureListResolverService
  implements Resolve<AdventureModel[]> {

  constructor(private service: AdventureService) { }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<AdventureModel[]> {
    return this.service.getAdventures('test1').pipe(
      retry(3)
    );
  }

}




