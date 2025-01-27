import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BatchreleaseComponent } from './batchrelease/batchrelease.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'batchrelease', component: BatchreleaseComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
