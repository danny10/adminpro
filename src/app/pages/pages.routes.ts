import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs.component';


const pagesRoute: Routes = [
    
    {
        path:'', 
        component:PagesComponent,
        children:[  //rutas hijas
            {path:'dashboard', component:DashboardComponent, data:{ titulo:'Dashboard'}},
            {path:'progress', component:ProgressComponent, data:{ titulo:'Progress'}},
            {path:'graficas1', component:Graficas1Component, data:{ titulo:'Graficas'}},
            {path:'promesas', component:PromesasComponent, data:{ titulo:'Promesas'}},
            {path:'rxjs', component:RxjsComponent , data:{ titulo:'Rxjs'}},
            {path:'account-settings', component:AccountSettingsComponent, data:{ titulo:'Ajustes del tema'}},
            {path:'', pathMatch:'full', redirectTo:'/dashboard' }
        ]
    }

];

export const PAGES_ROUTES =RouterModule.forChild(pagesRoute);