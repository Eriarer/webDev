import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VtubersComponent } from './components/vtubers/vtubers.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '#', pathMatch: 'full', redirectTo: 'home' },
    { path: 'vtubers', component: VtubersComponent },
    { path: 'about', component: AboutComponent }
];
