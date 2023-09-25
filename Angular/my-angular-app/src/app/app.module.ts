import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyComponentComponent } from './shared/my-component/my-component.component';
import { PricePipePipe } from './pipe/price-pipe.pipe';
import { LoginComponent } from './shared/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule  } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { MatListModule } from '@angular/material/list';
import { RoutingModuleModule } from './features/routing-module.module';
import { ProductComponentComponent } from './shared/product-component/product-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PricePipePipe,
    LoginComponent,
    WelcomeComponent,
    ProductComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    RoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
