import { Routes } from '@angular/router';
import { ControlPersonsComponent } from './components/control-persons/control-persons.component';

export const routes: Routes = [
    { path: 'home', component: ControlPersonsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
