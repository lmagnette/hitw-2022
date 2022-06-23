import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Joke } from './jokes/models/joke';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const jokes = this.createDbJoke();
    return {  jokes };
  }

  createDbJoke():Joke[]{
    return [];
  }
}
