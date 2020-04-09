import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-triandash',
  templateUrl: './triandash.component.html',
  styleUrls: ['./triandash.component.css']
})
export class TriandashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }

  mapsol(){
this.router.navigate(['/dashboard/mapsol'])
  }
  
}
