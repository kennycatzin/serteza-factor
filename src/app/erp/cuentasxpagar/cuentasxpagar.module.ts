import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CuentasxpagarComponent } from './cuentasxpagar.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { sharedModule } from '../../shared/shared.module';
import { CUENTAS_ROUTES } from './cuentasxpagar.routes';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { MatTabsModule } from '@angular/material';
import { InicioComponent } from '../../cuentasxpagar/inicio/inicio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    InicioComponent,
    UsuariosComponent,
    ProveedoresComponent,
    CuentasxpagarComponent,
    SolicitudComponent,

  ],
  imports: [
      sharedModule,
      CUENTAS_ROUTES,
      MatTabsModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      HttpClientModule
  ],
  exports: [
    UsuariosComponent,
    ProveedoresComponent,
    SolicitudComponent
  ],
  providers: [],
  bootstrap: []
})
export class CuentasxpagarModule {}
