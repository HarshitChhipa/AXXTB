import {EventData} from './event.data.model';

export class BaseResponseModel {
  data: EventData[] = [];

  constructor(data = null) {
    if (data) {
      data.forEach(ele => {
        this.data.push(new EventData(ele));
      });
    }
  }
}
