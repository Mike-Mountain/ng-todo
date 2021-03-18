import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './modules/core/components/landing/landing.component';
import {AuthGuard} from './modules/core/guards/auth-guard/auth.guard';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'tasks', loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule), canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
