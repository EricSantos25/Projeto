import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { FormularioComponent } from "./formulario/formulario.component";
import { HomeComponent } from "./home/home.component";

import { AutenticacaoComponent } from "./autenticacao/autenticacao.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/auth.guard";



const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {path: '', component: HomeComponent}
        ],
   canActivate: [AuthGuard]
    },
        {
            path:'',
            //trocar este login component
            component: AutenticacaoComponent ,
            children:[
                {path:'', redirectTo: 'login', pathMatch:'full'},
                {path:'login', component: LoginComponent},
                {path:'cadastro', component: FormularioComponent}
            ]
        }
    
    
  


    
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot (APP_ROUTES);