import { Component, OnInit } from '@angular/core';
import { LugarService } from './core/servicios/lugar.service';
import { Votos } from './votos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngvotosCiudad';
 

  votos: Votos[]=[];

  constructor(private lugarService: LugarService){}



  ngOnInit(){
    this.cargaLugares()
  };
  

  cargaLugares(){
    this.lugarService.getAllsitios()
    .subscribe(lugares =>{
      this.votos = lugares
    });
  }

  
}
