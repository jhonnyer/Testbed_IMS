import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NGNComponent } from './Vistas/ngn/ngn.component';
import { IMSComponent } from './Vistas/ims/ims.component';
import { NFVComponent } from './Vistas/nfv/nfv.component';
import { SNMPComponent } from './Vistas/snmp/snmp.component';
import { UDCComponent } from './Vistas/udc/udc.component';
//import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
/*import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { MenuVerticalnavegComponent } from './menu-verticalnaveg/menu-verticalnaveg.component';
import { LeftComponentmenuComponent } from './left-componentmenu/left-componentmenu.component';
import { RighComponentbodyComponent } from './righ-componentbody/righ-componentbody.component';
import { PruebaComponent } from './prueba/prueba.component';
import { TecnologiasComponent } from './Vistas/tecnologias/tecnologias.component';
import { MonitoreoComponent } from 'src/app/Vistas/monitoreo/monitoreo.component';
import { LoginIngresoComponent } from './usuarios-control/login-ingreso/login-ingreso.component';


import { from } from 'rxjs';
import { InfoinfraestructuraComponent } from './Vistas/infoinfraestructura/infoinfraestructura.component';
import { InfoServiciosComponent } from './Vistas/info-servicios/info-servicios.component';
import { InfoGeneralComponent } from './Vistas/info-general/info-general.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NGNComponent,
    IMSComponent,
    NFVComponent,
    SNMPComponent,
    UDCComponent,
  //  PageNoFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
