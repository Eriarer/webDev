import { Injectable } from '@angular/core';
import { Cliente, Grupo } from '../../model/cliente.model';
import { GRUPOS } from '../../model/grupo';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes!: Cliente[];
  grupos: Grupo[] = GRUPOS;

  constructor() {
    this.clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    // Comprobar que el cliente tenga los parametros necesarios
    if (!cliente.name || !cliente.cif || !cliente.direccion || !cliente.grupo) {
      return;
    }
    this.clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      name: '',
      cif: '',
      direccion: '',
      grupo: 0
    }
  }
}
