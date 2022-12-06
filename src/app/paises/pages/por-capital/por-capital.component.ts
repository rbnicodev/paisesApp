import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = "";
  error: boolean = false;
  results: Country[] = [];


  constructor( private capitalService: PaisService ) {}


  search( termino: string ) {
    this.termino = termino;
    this.error = false;

    this.capitalService.searchCapital( this.termino ).subscribe({ next: (resp) => {
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
