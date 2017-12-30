import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';

const appRoutes: Routes = [
  { path: 'tab-one', component: RouteOneComponent },
  { path: 'tab-two', component: RouteTwoComponent },
  { path: 'tab-three', component: RouteThreeComponent },
  { path: '**', component: RouteOneComponent , pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });