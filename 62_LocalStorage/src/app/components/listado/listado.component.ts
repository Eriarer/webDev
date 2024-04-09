import { Component } from '@angular/core';
import { Cliente } from '../../model/cliente.model';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  clientes!: Cliente[];

  constructor(public clienteService: ClientesService) { };

  ngOnInit() {
    this.clientes = this.clienteService.getClientes();
  }
}
