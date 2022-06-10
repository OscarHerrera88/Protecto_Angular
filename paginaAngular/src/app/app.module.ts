import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';
import { NoExisteComponent } from './components/no-existe/no-existe.component';
import { MensajeEnviadoComponent } from './components/mensaje-enviado/mensaje-enviado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    CotizarComponent,
    InicioSesionComponent,
    FooterComponent,
    DahsboardComponent,
    NoExisteComponent,
    MensajeEnviadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
