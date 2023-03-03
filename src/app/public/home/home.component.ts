import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { AgendaService } from '../services/agenda.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .canales{
      font-size: .75rem
    }
  `]
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

  obtenerAgenda(){
    this._agenda.getAgenda().subscribe(resp => {
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
