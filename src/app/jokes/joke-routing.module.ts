import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeOfTheDayComponent } from './components/joke-of-the-day/joke-of-the-day.component';
import { JokesComponent } from './components/jokes/jokes.component';

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
    path:'**',
    redirectTo:'today'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }
