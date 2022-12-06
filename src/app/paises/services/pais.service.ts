import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private name: string = '';

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor( private http: HttpClient ) { 

    
  }
  
  searchPais( termino: string): Observable<Country[]> {
      const url: string = `${ this.apiUrl }/name/${ termino }`;

      return this.http.get<Country[]>( url );
  }

  searchRegion( termino: string): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/region/${ termino }`;

    return this.http.get<Country[]>( url );
  }

  searchCapital( termino: string): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url );
  }

  verPais( termino: string): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/alpha/${ termino }`;

    return this.http.get<Country[]>( url );
  }
}
