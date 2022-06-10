import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DahsboardComponent } from './components/dahsboard/dahsboard.component';
import { NoExisteComponent } from './components/no-existe/no-existe.component';
import { MensajeEnviadoComponent } from './components/mensaje-enviado/mensaje-enviado.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"cotizar", component:CotizarComponent},
  {path:"inicio-sesion", component:InicioSesionComponent},
  {path:"productos", component:ProductosComponent},
  {path: "footer", component:FooterComponent},
  {path: "admin", component:DahsboardComponent},
  {path: "404", component: NoExisteComponent},
  {path: "mensaje-enviado", component: MensajeEnviadoComponent},
  {path: "editar-cotizar/:id", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
