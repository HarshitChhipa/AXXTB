import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BaseResponseModel } from '../model/base.response.model';
import { Observable } from 'rxjs';
import { EventData } from '../model/event.data.model';

@Injectable({ providedIn:'root' })
export class EventListingService {

    private LISTING_API = "assets/data/event.json";

    constructor(private _httpClient:HttpClient){

    }


    getEventList() : Observable<BaseResponseModel>{
        return this._httpClient.get<BaseResponseModel>(this.LISTING_API);
    }
    
}