import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseResponseModel} from '../model/base.response.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EventListingService {

  private LISTING_API = 'assets/data/event.json';

  constructor(private httpClient: HttpClient) {
  }

  getEventList(): Observable<BaseResponseModel> {
    return this.httpClient.get<BaseResponseModel>(this.LISTING_API);
  }

}
