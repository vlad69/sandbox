import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const registerRoutes: Routes = [
  { path: 'register', component: UserComponent},
];

export const registerRouting: ModuleWithProviders = RouterModule.forChild(registerRoutes);