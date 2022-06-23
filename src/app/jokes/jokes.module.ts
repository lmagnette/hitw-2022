import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeOfTheDayComponent } from './components/joke-of-the-day/joke-of-the-day.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokeRoutingModule } from './joke-routing.module';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    JokeOfTheDayComponent,
    JokesComponent,
    JokeFormComponent
  ],
  imports: [
    CommonModule,
    JokeRoutingModule,
    HttpClientModule
  ]
})
export class JokesModule { }
