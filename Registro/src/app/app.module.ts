import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
//importar servicios
import {  RegistrosService} from "./services/registros.service";
import { AddRegisterComponent } from './components/add-register/add-register.component';
import { ViewReComponent } from './components/view-re/view-re.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddRegisterComponent,
    ViewReComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RegistrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
