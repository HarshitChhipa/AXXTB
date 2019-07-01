import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseResponseModel} from 'src/app/model/base.response.model';
import {EventData} from 'src/app/model/event.data.model';
import {EventBookingService} from 'src/app/service/eventbooking.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {validatorSeatSelection} from 'src/app/validators/form.validator';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.scss']
})
export class EventBookingComponent implements OnInit {

  private baseResponseModel: BaseResponseModel;
  eventDetail: EventData;
  eventID: number;
  bookingForm: FormGroup;
  bookingStatus = false;

  constructor(private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar,
              private eventBookingService: EventBookingService) {
  }

  ngOnInit() {

    this.bookingForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [Validators.maxLength(10), Validators.minLength(10)]),
      numberOfSeats: new FormControl(null, [Validators.required]),
      attendees: new FormArray([])
    });

    this.activatedRoute.params.subscribe(res => {
      this.eventID = parseInt(res.evId);
      this.eventBookingService.getEventDetail().subscribe(resp => {
        if (!!resp) {
          this.baseResponseModel = new BaseResponseModel(resp.data);
          this.eventDetail = this.baseResponseModel.data.filter(ele => ele.id === this.eventID).pop();
          this.bookingForm.get('numberOfSeats').setValidators(validatorSeatSelection(this.eventDetail.availableSeats));
        }
      });
    });

  }

  get attendeesArray() {
    return this.bookingForm.get('attendees') as FormArray;
  }

  /**
   * For creating the attendees.
   * Adding fields dynamically
   */

  setForm(event) {
    this.bookingForm.setControl('attendees', new FormArray([]));
    if (this.bookingForm.get('numberOfSeats').valid) {
      if (event.value === 1) {
        return;
      }
      for (let i = 1; i <= event.value; i++) {
        this.attendeesArray.push(new FormControl(null, [Validators.required]));
      }
    }
  }

  /**
   * Method called when we submit the form.
   * We can then perform any operation with the data from here onwards.
   */

  onSubmit() {
    if (this.bookingForm.valid) {
      this.matSnackBar.open('Tickets Booked : See Console', null, {
        duration: 2000,
      });
      this.bookingStatus = true;
      console.log(this.bookingForm.value);
    }
  }
}
