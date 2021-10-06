import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  areaurl:string='https://api.weather.gov/alerts/active/count'
  constructor(private httpclient:HttpClient) { }


  getarea(){

    return this.httpclient.get(this.areaurl)

  }

}
