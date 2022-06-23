import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes.service';
import { Joke } from '../../models/joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  jokes:Joke[]=[]

  constructor(private jokeService:JokesService) { }

  ngOnInit(): void {
    this.loadAllJokes();
  }

  onLike(updatedJoke:Joke) {

    this.jokeService.updateJoke({...updatedJoke, like:updatedJoke.like+1}).subscribe(
        () =>  this.loadAllJokes()
      )
  }

  private loadAllJokes() {
    this.jokeService.getAll().subscribe(data => this.jokes = data );
  }
}
