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
    this.jokeService.getAll().subscribe(data => this.jokes = data );
  }

}
