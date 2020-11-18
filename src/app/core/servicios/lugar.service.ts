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
}
