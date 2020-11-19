import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
masmas(id:string,newVoto:Votos){
    this.lugarService.moreVote(id, newVoto)
    .subscribe(votaciones => {
          let newnuevo=this.votos.filter( Votos => Votos._id===id )
      console.log( newnuevo);
      console.log(votaciones)
     newnuevo[0]=votaciones;
     console.log(newnuevo[0]);
     console.log(this.votos);
     //newnuevo = votaciones
    /* this.cargaLugares();*/
    });
  }

  menosmenos(id:string,newVoto:Votos){
    this.lugarService.lessVote(id, newVoto)
    .subscribe(votaciones => {
    /* this.cargaLugares();*/
    console.log( votaciones);
    })
  }
  
}
