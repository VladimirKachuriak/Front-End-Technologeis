import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from '../shared/my-component/my-component.component';
import { LazyModuleModule } from './lazy-module.module';
import { ProductServiceComponent } from '../shared/product-service/product-service.component';


const routes: Routes = [
  { path: '', component: MyComponentComponent },
  { path: 'login', loadChildren: () => import('./lazy-module.module').then(m => m.LazyModuleModule) },
  { path: 'products', component: ProductServiceComponent },
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    LazyModuleModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModuleModule { }
