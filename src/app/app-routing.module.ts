import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZadaniaComponent } from './zadania/zadania.component';
import { EdytujProjektComponent } from './edytuj-projekt/edytuj-projekt.component';
import { DodajProjektComponent } from './dodaj-projekt/dodaj-projekt.component';
import { ListaProjektowComponent } from './lista-projektow/lista-projektow.component';
import { UsunProjektComponent } from './usun-projekt/usun-projekt.component';
import { LoginComponent } from './login/login.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-projektow', pathMatch: 'full' },
  { path: 'lista-projektow', component: ListaProjektowComponent },
  { path: 'dodaj-projekt', component: DodajProjektComponent },
  { path: 'edytuj-projekt/:id', component: EdytujProjektComponent },
  { path: 'usun-projekt', component: UsunProjektComponent },
  { path: 'zadania/:id', component: ZadaniaComponent },
  { path: 'login', component: LoginComponent},
  { path: 'rejestracja', component: RejestracjaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
