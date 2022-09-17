import { ShortterLinkComponent } from './shortter-link/shortter-link.component';
import { BreakingbadComponent } from './breakingbad/breakingbad.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservaComponent } from './reserva/reserva.component';
import { HomeComponent } from './home/home.component';
import { HomeAComponent } from './home-a/home-a.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'homeA', component: HomeAComponent },
  { path: 'breaking', component: BreakingbadComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'shortterlink', component: ShortterLinkComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
