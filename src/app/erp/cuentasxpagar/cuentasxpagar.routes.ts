import { Routes, RouterModule, Router } from '@angular/router';
import { CuentasxpagarComponent } from './cuentasxpagar.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { InicioComponent } from '../../cuentasxpagar/inicio/inicio.component';
import { LoginGuardGuard } from '../../services/service.index';
const cuentasRoutes: Routes = [
    {
        path: '',
        component: CuentasxpagarComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'inicio', component:  InicioComponent},
            { path: 'proveedores', component:  ProveedoresComponent},
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'solicitudes', component: SolicitudComponent },
            { path: '', redirectTo: '/login', pathMatch: 'full'},

        ]
    },
];
export const CUENTAS_ROUTES = RouterModule.forChild( cuentasRoutes );
