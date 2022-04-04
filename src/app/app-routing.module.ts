import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadAquarioComponent } from './components/cad-aquario/cad-aquario.component';
import { HomeComponent } from './components/home/home.component';
import { ListaAquarioComponent } from './components/lista-aquario/lista-aquario.component';
import { ListaPeixeComponent } from './components/lista-peixe/lista-peixe.component';

const routes: Routes = [  
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'peixes', component: ListaPeixeComponent},    
  {path: 'aquarios', component: ListaAquarioComponent},
  {path: 'gerenciar', component: CadAquarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
