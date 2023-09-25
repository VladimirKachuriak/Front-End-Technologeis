import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../shared/login/login.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
  // { path: 'products/:id/details', component: ProductDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LazyModuleModule { }
