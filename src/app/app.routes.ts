import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesFiltradosComponent } from './components/heroes-filtrados/heroes-filtrados.component';
import { HeroeFiltradoComponent } from './components/heroe-filtrado/heroe-filtrado.component';

const APP_ROUTES: Routes = 
[
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroesFiltrados/:termino', component: HeroesFiltradosComponent },
    { path: 'heroeFiltrado/:id', component: HeroeFiltradoComponent},
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
