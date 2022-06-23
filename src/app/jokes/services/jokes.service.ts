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

  updateJoke(joke:Joke):Observable<Joke>{
    return this.http.put<Joke>(this.apiUrl,joke);
  }

  createJoke(joke:Partial<Joke>):Observable<Joke>{
    return this.http.post<Joke>(this.apiUrl,joke);
  }
}
