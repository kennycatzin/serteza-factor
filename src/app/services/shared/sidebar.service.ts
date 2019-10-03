import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Inicio',
      icono: 'mdi mdi-book-open-variant',
      url: '/inicio'
    },
    {
      titulo: 'Usuarios',
      icono: 'mdi mdi-gauge',
      url: '/usuarios'
    },
    {
      titulo: 'Solicitudes',
      icono: 'mdi mdi-account-check',
      url: '/solicitudes'
    },
    {
      titulo: 'Proveedores',
      icono: 'mdi mdi-emoticon',
      url: '/proveedores'
    }
  ];
  constructor() { }
}
