import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {


  regiones: Object = {
    'europe':'Europa',
    'americas':'America',
    'africa':'África',
    'asia':'Asia',
    'oceania':'Australia'
  }

  regionActiva: string = '';

  getClassBtn( region: string) {
    return ( region === this.regionActiva ) 
      ? 'btn btn-primary m-1'
      : 'btn btn-outline-primary m-1';
  }

  results: Country[] = [];


  constructor( private regionService: PaisService ) {}


  search( region: string ) {
    this.regionActiva = region;

    this.regionService.searchRegion( this.regionActiva ).subscribe({ next: (resp) => {
      console.log(resp);
      this.results = resp;
    }, error: (err) => {
      this.results = [];
    }});

  }
}
