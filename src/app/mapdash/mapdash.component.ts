import { Component, OnInit,NgZone,ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MapsService} from '../service/maps.service';
import { MapsAPILoader, MouseEvent } from '@agm/core';




@Component({
  selector: 'app-mapdash',
  templateUrl: './mapdash.component.html',
  styleUrls: ['./mapdash.component.css']
})
export class MapdashComponent implements OnInit {

  idpanel: boolean = true;
  locationform:FormGroup;


  // Where the map IP api setting go!
  latitude: number;
  longitude: number;
  zoom:number;
  address: string;
  private geoCoder;
  title: string='';

  location: Object;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor( 
    private mapsAPILoader: MapsAPILoader,
    public formbuilder: FormBuilder,
    private ngZone: NgZone, 
    private mapservice: MapsService) { 
    this.locationform = this.formbuilder.group({
      locationid:new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
    // this.mapservice.getLocation().subscribe(data=>{
    //   console.log(data);
    //   this.latitude = data.latitude;
    //   this.longitude = data.longitude;
    //   this.title = data.country_name;
    // })
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  triangulate(){

  }

  cancelfxn(){
    
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        // this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
 
 
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event['coords'].lat;
    this.longitude = $event['coords'].lng;
    this.getAddress(this.latitude, this.longitude);
  }
 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      // console.log(results);
      // console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }

}
