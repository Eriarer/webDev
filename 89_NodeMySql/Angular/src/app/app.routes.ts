import { Routes } from '@angular/router';
import { AltaComponent } from './componets/alta/alta.component';
import { ConsultaComponent } from './componets/consulta/consulta.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: AltaComponent },
  { path: 'alta', component: AltaComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: '**', redirectTo: '' },
];
