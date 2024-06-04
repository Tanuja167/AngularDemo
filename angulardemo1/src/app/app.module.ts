import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  //contains list of components that we want to load
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent
  ],

  //any other supporting module that we want to load
  //may contains system or user define modules
  imports: [
    BrowserModule,  //browser configuration (dge, chrome)
    AppRoutingModule,  //navigation
     FormsModule
  ],

  //services that we want to inject in this module
  providers: [],
  bootstrap: [AppComponent]   //default component to load
})
export class AppModule { }
