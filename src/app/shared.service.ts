import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) {

   }
   public selectedEvent = new BehaviorSubject<any>(null);
   public datasubscription =this.selectedEvent.asObservable()
   sendSelectedEvent(message:any){
     this.selectedEvent.next(message);
   }




   getSelectedEvent():Observable<any>{
     return this.selectedEvent.asObservable();
   }
}
