import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomPreloaderService } from './custom-preloader.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'clientes',
    loadChildren: './clientes/clientes.module#ClientesModule',
    data: {preload: true, delay: 500}
  },
  { path: 'fornecedores', loadChildren: './fornecedores/fornecedores.module#FornecedoresModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloaderService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
