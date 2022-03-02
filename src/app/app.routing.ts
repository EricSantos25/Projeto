import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponentesComponent } from "./admin/admin-componentes/admin-componentes.component";
import { CadastroFormComponent } from "./cadastro-form/cadastro-form.component";

const APP_ROUTES: Routes = [
    {path: '', component: CadastroFormComponent},
    {path: 'admin', component: AdminComponentesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot (APP_ROUTES);