import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { AgendaService } from '../services/agenda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moment:any = moment;
  constructor(private _agenda:AgendaService) { }
  
  agenda:any[] = [];
  fechaSel!:string;
  indiceFechaSel!:number;
  
  ngOnInit(): void {
    this.obtenerAgenda();
  }

  notificacion(msg:string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: true,
      confirmButtonText: 'Actualizar',
      // timer: 5000,
      timerProgressBar: true,
      // didOpen: (toast) => {
      //   toast.addEventListener('mouseenter', Swal.stopTimer)
      //   toast.addEventListener('mouseleave', Swal.resumeTimer)
      // }
    })
    
    Toast.fire({
      icon: 'error',
      title: `¡Ocurrió un Error!`,
      text: msg
    }).then((result) => {
      if (result.isConfirmed) {
        this.obtenerAgenda();
      }
    })
  }

  obtenerAgenda(){
    this._agenda.getAgenda().subscribe(resp => {
      console.log(resp);
      if(resp.status === false){
        this.notificacion(resp.msg);
        return;
      }
      this.agenda = resp;
      this.fechaSel = resp[0].fecha; 
      this.indiceFechaSel = 0;

      this.reload = false;
    });
  }

  cambiarFecha(val:string){
    if(val == '-1'){
      this.indiceFechaSel--;
      this.fechaSel = this.agenda[this.indiceFechaSel].fecha;
    } else if(val == '+1'){
      this.indiceFechaSel++;
      this.fechaSel = this.agenda[this.indiceFechaSel].fecha;
    }
  }

  reload:boolean = false;
  actualizar(){
    this.reload = true;
    this.obtenerAgenda();

  }

}
