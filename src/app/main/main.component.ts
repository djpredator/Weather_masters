import { Component, OnInit } from '@angular/core';
import { WeatherServices } from '../core/weather.services';
import { AlertType } from '../core/models/alert-type.model';
import { StatesService } from '../services/states.service';
import { AlertsService } from '../alerts.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  alertTypes: AlertType[];
  title = 'Weather-App';
  dropAlert:string;

  constructor(
    private weatherServices: WeatherServices, private stateservice:StatesService, private router:Router, private sharedservice:SharedService) {
  }


  alert = []
  formModel: Array<string> = new Array()

  area!: string

  ngOnInit(): void {
    this.weatherServices.getAlertTypes().subscribe(res => {
      this.alertTypes = res;
    });

    this.stateservice.getarea().subscribe(data => {
      console.log(data)
      this.alert = Object.keys(data["areas"])

      this.area = this.alert[0]

      console.log("List of states:", this.alert)

      // this.stateservice(this.area).subscribe(message => {
      //   console.log(message)
      //   this.areas.push(message)

      })

    }
    selectedValue:String
    SelectAlertinDrop(selectedValue:String) {
     console.log("Value of selected alert",selectedValue)
      this.sharedservice.sendSelectedEvent(selectedValue);
  
    }
    getArea() {

    }
    getAreaDetails(areaCode: string) {
  
  
      this.router.navigate(['details', areaCode])
  }}
