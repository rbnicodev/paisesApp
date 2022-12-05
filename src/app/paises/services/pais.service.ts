import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private name: string = '';
  private accesKey: string = '?access_key=05257fda04d7389eb228cd1e6496b43e';
  private apiUrl: string = 'http://api.countrylayer.com/v2'

  constructor( private http: HttpClient ) { 

    
  }
  
  searchPais( termino: string): Observable<any> {
      const url: string = `${ this.apiUrl }/name/${ termino }${ this.accesKey }`;

      return this.http.get( url );
  }
}
