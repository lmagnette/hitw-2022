import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeOfTheDayComponent } from './components/joke-of-the-day/joke-of-the-day.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokeRoutingModule } from './joke-routing.module';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeCardComponent } from './components/joke-card/joke-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    JokeOfTheDayComponent,
    JokesComponent,
    JokeFormComponent,
    JokeCardComponent
  ],
  imports: [
    CommonModule,
    JokeRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class JokesModule { }
