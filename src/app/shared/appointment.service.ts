import { Injectable } from '@angular/core';
import { Estudiante } from '../shared/Appointment';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: Estudiante) {
    return this.bookingListRef.push({
        nombre: apt.nombre,
        calif1: apt.calif1, //aporta 20%
        calif2: apt.calif2, //aporta 20%
        calif3: apt.calif3, //aporta 20%
        calif4: apt.calif4, //aporta 10%
        calif5: apt.calif5,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id, apt: Estudiante) {
    return this.bookingRef.update({
        nombre: apt.nombre,
        calif1: apt.calif1, //aporta 20%
        calif2: apt.calif2, //aporta 20%
        calif3: apt.calif3, //aporta 20%
        calif4: apt.calif4, //aporta 10%
        calif5: apt.calif5, //aporta 30%
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}
