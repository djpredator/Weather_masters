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
      this.alertDetails = response
      console.log("Response", response)
    })
  }

}

// this.areaCode