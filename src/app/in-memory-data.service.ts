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
    return [
      {
        id:1,
        author:'Carambar',
        text:'Quelle est la femelle du hamster ?' +
          'L’Amsterdam',
        like:0
      },

      {
        id:2,
        author:'Carambar',
        text:'Que dit un oignon quand il se cogne ?' +
          'Aïe',
        like:0
      },

      {
        id:3,
        author:'Carambar',
        text:'Quel est l\'animal le plus heureux ?' +
          'Le hibou, parce que sa femme est chouette.',
        like:0
      },

      {
        id:4,
        author:'Carambar',
        text:'Quelle est le fruit préféré de l\'homme ?' +
          'L’ananas',
        like:0
      }
    ];
  }
}
