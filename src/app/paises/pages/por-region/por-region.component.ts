import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  termino: string = "";
  error: boolean = false;
  results: Country[] = [];


  constructor( private regionService: PaisService ) {}


  search( termino: string ) {
    this.termino = termino;
    this.error = false;

    this.regionService.searchRegion( this.termino ).subscribe({ next: (resp) => {
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
