import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './components/home/home.component';
import { SuccessComponent } from './components/success/success.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'success', component: SuccessComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);