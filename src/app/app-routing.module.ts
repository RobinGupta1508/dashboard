import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from 'app/login/login.component';
import { ContainerComponent } from 'app/container/container.component';
import { HomeComponent } from 'app/home/home.component';

import { LoginRouteGuard } from './services/auth-guard.service';
import { containsTree } from '@angular/router/src/url_tree';

const appRoutes: Routes = [{
  path: '',
  component: ContainerComponent,
  canActivate: [LoginRouteGuard],
  children: [{
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginRouteGuard],
  }, {
    path: '',
    component: HomeComponent,
    canActivate: [LoginRouteGuard]
  }]
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: '**',
  redirectTo: '/home'
}]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
