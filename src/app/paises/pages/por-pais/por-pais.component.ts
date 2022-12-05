import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "hola Mundo";

  constructor( private paisService: PaisService ){}

  search() {
    console.log(this.termino);

    this.paisService.searchPais( this.termino ).subscribe( resp => {
      console.log(resp);
    } );

  }
}
