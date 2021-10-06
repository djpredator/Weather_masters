import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AreaAlertsService {

  areaurl:string='https://api.weather.gov/alerts/active/area/'
  constructor(private httpclient:HttpClient) { }

  getareaAlert(area:string){

    return this.httpclient.get(this.areaurl+area)

  }



}


// pas:string
// +pas