import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ContasPagarComponent } from './pages/contas-pagar/contas-pagar.component';
import { ContasReceberComponent } from './pages/contas-receber/contas-receber.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'contas-pagar',
                component: ContasPagarComponent
            },
            {
                path: 'contas-receber',
                component: ContasReceberComponent
            },
            {
                path: 'funcionarios',
                component: FuncionariosComponent
            },
            {
                path: 'empresa',
                component: EmpresaComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/login',
    }
];
