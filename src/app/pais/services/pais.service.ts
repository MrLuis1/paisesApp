import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient) { }

  params = new HttpParams()
  .set('fields', 'name,capital,alpha2Code,flag,population');

  buscarPais( termino:string ): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, {params: this.params});
  }

  buscarCapital( termino:string ): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, {params: this.params});
  }

  buscarRegion(termino : string): Observable<Country[]>{
    const url = `${this.apiUrl}/regionalbloc/${termino}`
    return this.http.get<Country[]>(url, {params: this.params});
  }

  getPaisAlpha( id:string ): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }
}
