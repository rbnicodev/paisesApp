import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private name: string = '';

  private apiUrl: string = 'https://restcountries.com/v3.1'
  private httpParams: HttpParams = new HttpParams().set( 'fields', 'name,capital,flag,population,cca3');
  constructor( private http: HttpClient ) {}
  
  searchPais( termino: string): Observable<Country[]> {
      const url: string = `${ this.apiUrl }/name/${ termino }`;
      return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  searchRegion( termino: string): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/region/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  searchCapital( termino: string): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  verPais( termino: string): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/alpha/${ termino }`;

    return this.http.get<Country[]>( url );
  }
}
