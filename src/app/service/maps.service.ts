import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Location{
  latitude: string;
  longitude: string;
  country_name: string;
  city:string;
  ip:string;
  country_calling_code:string;
  country_area:string;
  region:string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<Location>('https://ipapi.co/json')
  }

  findLocation(){
    return this.http.get<Location>('https://ipapi.co/city')
  }

}
