import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../api/adventure-service/services/api.service'
import { AdventureModel } from '../../api/adventure-service/models/adventure-model'

@Injectable()
export class AdventureService {
  constructor(private apiService: ApiService) { }

  public getAdventures(userId: string): Observable<AdventureModel[]> {
    return this.apiService.getAllAdventuresForUserAdventuresUserIdGet({ user_id: userId })
  }

}
