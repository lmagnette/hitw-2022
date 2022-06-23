import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeOfTheDayComponent } from './components/joke-of-the-day/joke-of-the-day.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { JokeFormComponent } from './components/joke-form/joke-form.component';

const routes: Routes = [
  {
    path: 'today',
    component: JokeOfTheDayComponent
  },
  {
    path: 'list',
    component: JokesComponent
  },
  {
    path: 'new ',
    component: JokeFormComponent
  },
  {
    path:'**',
    redirectTo:'today'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
