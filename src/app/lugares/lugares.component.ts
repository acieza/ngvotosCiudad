import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { stringify } from 'querystring';
import { LugarService } from '../core/servicios/lugar.service';
import { Votos } from '../votos';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
   @Input() datosLugar: Votos;

   @Output() sumaVoto: EventEmitter <any> = new EventEmitter();
   @Output() restaVoto: EventEmitter <any> = new EventEmitter();
   
  constructor(private lugarService: LugarService) { }
  banderaVotos:boolean=false;

  ngOnInit(): void {
  }
  
  masVotos(id:string){
    this.banderaVotos = !this.banderaVotos;
    if(this.banderaVotos == true){
      this.sumaVoto.emit(this.datosLugar);
    }else{
      this.restaVoto.emit(this.datosLugar);
    }
   
   
  }
}
