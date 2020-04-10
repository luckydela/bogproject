import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

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
  
  mapview(){
    this.router.navigate(['/dashboard/view']);
  }

  logout(){
  

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'logout ?',
      text: "You are logging out...",
      showCancelButton: true,
      confirmButtonText: 'Yes Confirm',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        


    window.localStorage.clear();
    this.router.navigate(['']);
        
      } else (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) 
     
    })


  }
}
