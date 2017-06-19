import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NgModule } from '@angular/core'
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'contact', component: ContactComponent },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule' // Lazy Module Module..
  },
  { path: '**', component: NotFoundComponent }
];


// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule {

// }

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);