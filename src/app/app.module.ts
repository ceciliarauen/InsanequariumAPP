import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadAquarioComponent } from './components/cad-aquario/cad-aquario.component';
import { ListaAquarioComponent } from './components/lista-aquario/lista-aquario.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaPeixeComponent } from './components/lista-peixe/lista-peixe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,    
    CadAquarioComponent,
    ListaAquarioComponent,        
    HomeComponent,
    ListaPeixeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    HttpClientModule, NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
