import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validator, Validators } from '@angular/forms';
import { JokesService } from '../../services/jokes.service';
import { Joke } from '../../models/joke';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: [ './joke-form.component.scss' ]
} )
export class JokeFormComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder, private jokeService: JokesService, private router: Router ) {
    this.form = fb.nonNullable.group( {
        author: [ '', Validators.required ],
        text: [ '', Validators.required ]
      }
    )
  }

  ngOnInit(): void {
  }

  save() {
    const newJoke: Partial<Joke> = {  like: 0, ...this.form.value };
    this.jokeService.createJoke( newJoke ).subscribe( {
        next: ( data ) => console.log( 'New joe saved' ),
        error: () => this.leavePage(),
        complete: () => this.leavePage()
      }
    )
  }

  private leavePage() {
    this.router.navigate( [ '/jokes/list' ] );
  }
}
