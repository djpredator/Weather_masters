import { Component, OnInit } from '@angular/core';
import {AreaAlertsService } from '../services/area-alerts.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { detailsModel } from '../models/details.model';




export interface features{
  properties:detailsModel;
}



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  areaCode: string;
  alertDetails:detailsModel;
  newEvent = [];
  alertSelected: string;
  count=0

  constructor(private areaAlertsServices:AreaAlertsService, private activatedRoute:ActivatedRoute, private sharedservice: SharedService) { }

  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe(param => {
      this.areaCode = param.get('state');
    });
   

    // data from main component
    this.sharedservice.getSelectedEvent().subscribe(message => {
      console.log("Selected Alert from Main", message)
      this.alertSelected = message
      console.log("selected alert a:", this.alertSelected)
    });
    this.areaAlertsServices.getareaAlert(this.areaCode).subscribe((response:detailsModel)=>{
      console.log("Areas ", response);
      // if(this.alertSelected!=response.event){
      //   alert("Event Not Found")
      // }
      this.alertDetails = response
      console.log("Response", response)
      
    })

  }

}

// this.areaCode