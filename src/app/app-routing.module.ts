import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TDetailsComponent } from './t-details/t-details.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';


import { BookingListComponent } from './booking-list/booking-list.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
  { path: 'bookings', component: BookingListComponent },
  { path: 'add', component: BookTicketComponent },
  { path: 'update/:id', component: UpdateBookingComponent },
  { path: 'details/:id', component: TDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
