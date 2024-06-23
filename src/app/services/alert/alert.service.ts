import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  apiResponseAlert(Title: string,Icon:SweetAlertIcon) {
    Swal.fire({
      position: 'top',
      icon: Icon,
      title: Title,
      showConfirmButton: false,
      timer: 1500
    })
  }
  YesOrNo(Title:string,Text:string,Icon:SweetAlertIcon){
    return Swal.fire({
      title: Title,
      text: Text,
      icon: Icon,  /* warning */
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        return true
      }
      return false
    })
  }
  ok(Title:string = 'Info',Text:string,Icon: SweetAlertIcon = 'info'){
    return Swal.fire({
      title: Title,
      text: Title,
      icon: Icon
    });
  }
}
