import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MapsService} from '../service/maps.service';



@Component({
  selector: 'app-mapdash',
  templateUrl: './mapdash.component.html',
  styleUrls: ['./mapdash.component.css']
})
export class MapdashComponent implements OnInit {

  idpanel: boolean = true;
  locationform:FormGroup;


  // Where the map IP api setting go!
  lat: string = '';
  lngt: string = '';

  location: Object;


  constructor( public formbuilder: FormBuilder, private mapservice: MapsService) { 
    this.locationform = this.formbuilder.group({
      locationid:new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
    this.mapservice.getLocation().subscribe(data=>{
      console.log(data);
      this.lat = data.latitude;
      this.lngt = data.longitude;
    })
  }

  triangulate(){

  }

  cancelfxn(){
    
  }


}
