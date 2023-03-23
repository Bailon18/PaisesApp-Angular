import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],

  // aqui se importa todos los modulos de los componentes
  imports: [
    BrowserModule,
    AppRoutingModule, // routing
    PaisModule,
    SharedModule,
    HttpClientModule // global el http 
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
