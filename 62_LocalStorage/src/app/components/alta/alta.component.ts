import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente, Grupo } from '../../model/cliente.model';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  cliente!: Cliente;
  grupos!: Grupo[];

  constructor(private clienteService: ClientesService) { };

  ngOnInit() {
    this.cliente = this.clienteService.nuevoCliente();
    this.grupos = this.clienteService.getGrupos();
  }

  nuevoCliente(): void {
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
    document.getElementById('nombreCliente')?.focus();
  }
}
