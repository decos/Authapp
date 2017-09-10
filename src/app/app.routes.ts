import { RouterModule, Routes } from '@angular/router';
//Import components
import {HomeComponent} from './components/home/home.component';
import {PreciosComponent} from './components/precios/precios.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'protegida', component: ProtegidaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
