import { Routes } from '@angular/router';
import { Home } from './home/home';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'flights',
    loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
  },
];