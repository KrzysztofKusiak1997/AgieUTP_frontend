import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ListaProjektowComponent } from './lista-projektow/lista-projektow.component';
import { DodajProjektComponent } from './dodaj-projekt/dodaj-projekt.component';
import { EdytujProjektComponent } from './edytuj-projekt/edytuj-projekt.component';
import { UsunProjektComponent } from './usun-projekt/usun-projekt.component';
import { ZadaniaComponent } from './zadania/zadania.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaStudentowComponent } from './lista-studentow/lista-studentow.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';

import { FormsModule } from '@angular/forms';
import { ProjektService } from './service/projekt.service';
import { HttpClientModule } from '@angular/common/http';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ListaProjektowComponent,
    DodajProjektComponent,
    EdytujProjektComponent,
    UsunProjektComponent,
    ZadaniaComponent,
    LoginComponent,
    ListaStudentowComponent,
    RejestracjaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
    providers: [ ProjektService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
