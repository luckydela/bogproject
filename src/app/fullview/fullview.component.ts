import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MapsService} from '../service/maps.service';

@Component({
  selector: 'app-fullview',
  templateUrl: './fullview.component.html',
  styleUrls: ['./fullview.component.css']
})
export class FullviewComponent implements OnInit {
  idpanel: boolean = true;
  locationform:FormGroup;


  // Where the map IP api setting go!
  lat: string = '';
  lngt: string = '';
  title: string='';
  ip:string='';
  callcode:string;
  c_area:string;
  city:string;
  region:string;


  location: Object;


  constructor( public formbuilder: FormBuilder, private mapservice: MapsService) { 
    this.locationform = this.formbuilder.group({
      locationid:new FormControl('',[Validators.required])
    });

   }

  ngOnInit(): void {

    this.mapservice.getLocation().subscribe(data=>{
      console.log(data);
      this.lat = data.latitude;
      this.lngt = data.longitude;
      this.title = data.country_name;
      this.ip = data.ip;
      this.c_area = data.country_area;
      this.city = data.city;
      this.callcode = data.country_calling_code;
      this.region = data.region;

    })
  }

}
