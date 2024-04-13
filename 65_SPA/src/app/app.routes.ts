import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VtubersComponent } from './components/vtubers/vtubers.component';
import { AboutComponent } from './components/about/about.component';
import { AvtuberComponent } from './components/avtuber/avtuber.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'vtubers', component: VtubersComponent },
    { path: 'about', component: AboutComponent },
    { path: 'avtuber/:id', component: AvtuberComponent },
    { path: 'buscador/:nombre', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
