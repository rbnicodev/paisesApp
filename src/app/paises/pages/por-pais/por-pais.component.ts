import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "hola Mundo";
  error: boolean = false;
  

  constructor( private paisService: PaisService ){}

  search() {
    console.log(this.termino);
    this.error = false;

    this.paisService.searchPais( this.termino ).subscribe({ next: (resp) => {
      console.log(resp);
    }, error: (err) => {
      this.error = true;
    }});

  }
}
