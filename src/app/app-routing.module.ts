import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: '', loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
