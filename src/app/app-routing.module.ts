import { NgModule, Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
//import { appRoutes } from 'src/app/Vistas/app.routing';
import { AppComponent } from './app.component';

import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { LeftComponentmenuComponent } from './left-componentmenu/left-componentmenu.component';
import { RighComponentbodyComponent } from './righ-componentbody/righ-componentbody.component';
import { PruebaComponent } from './prueba/prueba.component';

import { LoginIngresoComponent } from './usuarios-control/login-ingreso/login-ingreso.component';
import { TecnologiasComponent } from 'src/app/Vistas/tecnologias/tecnologias.component';
import { InfoinfraestructuraComponent } from './Vistas/infoinfraestructura/infoinfraestructura.component';
import { InfoServiciosComponent } from 'src/app/Vistas/info-servicios/info-servicios.component';
import { MonitoreoComponent } from 'src/app/Vistas/monitoreo/monitoreo.component';
import { InfoGeneralComponent } from 'src/app/Vistas/info-general/info-general.component';
//import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { NGNComponent } from './Vistas/ngn/ngn.component';
import { IMSComponent } from './Vistas/ims/ims.component';
import { NFVComponent } from './Vistas/nfv/nfv.component';
import { SNMPComponent } from './Vistas/snmp/snmp.component';
import { UDCComponent } from './Vistas/udc/udc.component';

import { from } from 'rxjs';

const routes: Route[]=[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'informacion', component:InfoGeneralComponent},
  //{path: 'home', component: AppComponent},
  //{path: '', component: PagInformacionComponent},
  //{path: '', component:InfoGeneralComponent},
  {path: 'MenuNavegacionComponent', component: MenuNavegacionComponent},
  {path: 'LeftComponentmenuComponent', component:LeftComponentmenuComponent},
  {path: 'PruebaComponent', component:PruebaComponent},

  /*
  {path: 'Righ', component: RighComponentbodyComponent},
  {path: 'monitoreo/monitoreo', component: MonitoreoComponent},
  {path: 'PagInformacion', component:PagInformacionComponent},*/
  {path: 'FormLogin', component: LoginIngresoComponent},
  {path: 'infoInfra', component: InfoinfraestructuraComponent},
  {path: 'InfServicios', component: InfoServiciosComponent},
  //{path: 'tecnologias', component: TecnologiasComponent},
  {path: 'infoTecno', component: TecnologiasComponent},
  {path: 'monitoreo', component: MonitoreoComponent},
  {path: 'InfoGeneral', component: InfoGeneralComponent},
  //{pathMatch: "**", component: PageNoFoundComponent}
  //pagina informacion
  {path: 'NGN', component: NGNComponent},
  {path: 'NFV', component: NFVComponent},
  {path: 'IMS', component: IMSComponent},
  {path: 'SNMP', component: SNMPComponent},
  {path: 'UDC', component: UDCComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routing=RouterModule.forRoot(routes)
export const routingComponents=[
  MenuNavegacionComponent,
  PruebaComponent,
  LeftComponentmenuComponent,
  TecnologiasComponent,
  MonitoreoComponent,
  RighComponentbodyComponent,
  LoginIngresoComponent,
  InfoinfraestructuraComponent,
  InfoServiciosComponent,
  AppComponent,
  InfoGeneralComponent,
  //PageNoFoundComponent
]