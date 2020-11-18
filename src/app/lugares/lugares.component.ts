import { Component, Input, OnInit } from '@angular/core';
import { Votos } from '../votos';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
   @Input() datosLugar: Votos;
  constructor() { }
  banderaVotos=false;

  ngOnInit(): void {
  }
  
  masVotos(id:string){
    this.banderaVotos = !this.banderaVotos;
  }
}
