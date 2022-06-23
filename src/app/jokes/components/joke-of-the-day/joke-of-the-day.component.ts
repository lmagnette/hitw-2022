import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes.service';
import { Joke } from '../../models/joke';

@Component({
  selector: 'app-joke-of-the-day',
  templateUrl: './joke-of-the-day.component.html',
  styleUrls: ['./joke-of-the-day.component.scss']
})
export class JokeOfTheDayComponent implements OnInit {

  joke: Joke = {id:-1,author:'', text:'',like:0};

  constructor( private jokeService: JokesService ) {
  }

  ngOnInit(): void {
    this.loadJoke();
  }

  private loadJoke() {
    this.jokeService.getJokeOfTheDay().subscribe(
      data => this.joke = data
    );
  }

  onLike(updatedJoke:Joke) {

    this.jokeService.updateJoke({...updatedJoke, like:updatedJoke.like+1}).subscribe(
      () =>  this.loadJoke()
    )
  }
}
