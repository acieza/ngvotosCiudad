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
      let newnuevo=this.votos.find( Votos => Votos._id===id )
       
    newnuevo.likes ++;
    });
  }

  menosmenos(id:string,newVoto:Votos){
    this.lugarService.lessVote(id, newVoto)
    .subscribe(votaciones => {
    /* this.cargaLugares();*/
    let newnuevo=this.votos.find( Votos => Votos._id===id )

    newnuevo.likes --;
    })
  }
  
}
