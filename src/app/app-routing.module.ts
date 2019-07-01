import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventListingComponent} from './components/event-listing/event-listing.component';
import {EventBookingComponent} from './components/event-booking/event-booking.component';


const routes: Routes = [
  {path: '', component: EventListingComponent},
  {path: ':evId', component: EventBookingComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
