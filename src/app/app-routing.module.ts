import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'jokes',
    loadChildren: () => import('./jokes/jokes.module')
      .then(m => m.JokesModule),
  },
  {
    path:'**',
    redirectTo:'jokes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
