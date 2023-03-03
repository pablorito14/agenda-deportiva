import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http:HttpClient) { }

  getAgenda(){

    let url:string = 'http://localhost:4000/api/agenda';
    return this.http.get(url).pipe(map((resp:any) => {
      // console.log(resp);
      return resp.data;
    }),catchError(err => of({status:false,msg:'Error'}))
    )
  }
}
