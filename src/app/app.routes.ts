import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ContasPagarComponent } from './pages/contas-pagar/contas-pagar.component';
import { ContasReceberComponent } from './pages/contas-receber/contas-receber.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { AddFuncionarioComponent } from './pages/funcionarios/add-funcionario/add-funcionario.component';
import { AddContasPagarComponent } from './pages/contas-pagar/add-contas-pagar/add-contas-pagar.component';
import { AddContasReceberComponent } from './pages/contas-receber/add-contas-receber/add-contas-receber.component';



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
                path: 'add-contas-pagar',
                component: AddContasPagarComponent
            },
            {
                path: 'contas-receber',
                component: ContasReceberComponent
            },
            {
                path: 'add-contas-receber',
                component: AddContasReceberComponent
            },
            {
                path: 'caixa',
                component: CaixaComponent
            }, 
            {
                path: 'funcionarios',
                component: FuncionariosComponent
            },
            {
                path: 'funcionario',
                component: AddFuncionarioComponent
            },
            {
                path: 'empresa',
                component: EmpresaComponent
            },
            {
                path: 'estoque',
                component: EstoqueComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/login',
    }
];
