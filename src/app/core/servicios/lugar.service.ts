import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Votos } from 'src/app/votos';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(private http: HttpClient) { }

  getAllsitios(){
    return this.http.get<Votos[]>('http://localhost:3000/votos');
  }

  moreVote(id:string,newVoto: Votos){
      return this.http.put<Votos>(`http://192.168.1.130:3000/votos/votomas/${id}`,newVoto);
  }
  lessVote(id:string,newVoto: Votos){
    return this.http.put<Votos>(`http://192.168.1.130:3000/votos/votomenos/${id}`,newVoto);
  }
}
