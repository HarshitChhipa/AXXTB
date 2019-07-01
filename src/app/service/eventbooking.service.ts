import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BaseResponseModel } from '../model/base.response.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventBookingService {
    private LISTING_API = "assets/data/event.json";

    constructor(private _httpClient: HttpClient) {

    }

    getEventDetail(): Observable<any> {
        return this._httpClient.get<any>(this.LISTING_API);
    }
}
