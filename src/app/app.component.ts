import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'agenda-futbol';
  constructor(private update:SwUpdate){}

  ngOnInit(): void {
    this.updateClient();
  }

  updateClient(){

    if(!this.update.isEnabled){
      return;
    }
       
    this.update.versionUpdates.subscribe((event:any) => {
      console.log(event.type)
      console.log(event)
      // localStorage.setItem('checkingUpdate','false');
      if(event.type === "VERSION_READY"){

        Swal.fire({
          title: `Nueva version disponible`,
          html: '¿Queres actualizar?',
          icon: 'info',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          showCancelButton: true,
          confirmButtonText: 'Actualizar',
          cancelButtonText: 'Cancelar',
          allowOutsideClick: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.update.activateUpdate().then(() => location.reload());
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Actualizacion cancelada',
              'No recibiras notificación hasta la proxima actualización',
              'error'
            )
          }
        })
      
        
        

      }
    });


  }
}
