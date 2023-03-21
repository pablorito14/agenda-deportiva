import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http:HttpClient) { }

  getAgenda(){

    let url:string = `${environment.apiUrl}/agenda`;
    return this.http.get(url).pipe(map((resp:any) => {
      console.log(resp.data);
      // console.log(resp.sortByDate)
      return resp.data;
    }),catchError(err => of({status:false,msg:err.error.msg}))
    )
  }
}
