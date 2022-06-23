import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeOfTheDayComponent } from './components/joke-of-the-day/joke-of-the-day.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokeRoutingModule } from './joke-routing.module';



@NgModule({
  declarations: [
    JokeOfTheDayComponent,
    JokesComponent
  ],
  imports: [
    CommonModule,
    JokeRoutingModule
  ]
})
export class JokesModule { }
