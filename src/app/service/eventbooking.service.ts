import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EventBookingService {
  private LISTING_API = 'assets/data/event.json';

  constructor(private httpClient: HttpClient) {

  }

  getEventDetail(): Observable<any> {
    return this.httpClient.get<any>(this.LISTING_API);
  }
}
