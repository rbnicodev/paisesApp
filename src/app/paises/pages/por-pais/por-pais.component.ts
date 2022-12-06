import { Component, EventEmitter } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "";
  error: boolean = false;
  results: Country[] = [];
  

  constructor( private paisService: PaisService ){}

  search( termino: string ) {
    this.termino = termino;
    this.error = false;

    this.paisService.searchPais( this.termino ).subscribe({ next: (resp) => {
      console.log(resp);
      this.results = resp;
    }, error: (err) => {
      this.error = true;
      this.results = [];
    }});

  }

  sugerencias( termino: string ) {
    this.error = false;
    this.search( termino );
  }
}
