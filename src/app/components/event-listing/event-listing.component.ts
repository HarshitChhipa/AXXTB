import {Component, OnInit} from '@angular/core';
import {EventListingService} from 'src/app/service/eventListing.service';
import {EventData} from 'src/app/model/event.data.model';
import {BaseResponseModel} from 'src/app/model/base.response.model';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {

  private baseResponseModel: BaseResponseModel;
  eventList: EventData[] = [];

  constructor(private eventListingService: EventListingService) {
  }

  ngOnInit() {
    this.eventListingService.getEventList().subscribe(res => {
      this.baseResponseModel = new BaseResponseModel(res.data);
      this.eventList = this.baseResponseModel.data;
    });
  }

  searchEvent(value: string) {
    if (value.length === 0) {
      this.eventList = this.baseResponseModel.data;
    } else {
      this.eventList = this.baseResponseModel.data.filter(event => !event.name.toLocaleLowerCase().search(value.toLocaleLowerCase()));
    }
  }

}
