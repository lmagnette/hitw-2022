import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from '../models/joke';

@Injectable( {
  providedIn: 'root'
} )
export class JokesService {

  private apiUrl = 'api/jokes'

  constructor( private http: HttpClient ) {

  }

  getAll(): Observable<Joke[]> {
    return this.http.get<Joke[]>( this.apiUrl )
  }

  getJokeOfTheDay():Observable<Joke>{
    return this.http.get<Joke>( `${this.apiUrl}/3` );
  }
}
