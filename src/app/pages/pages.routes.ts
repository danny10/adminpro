import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const pagesRoute: Routes = [
    
    {
        path:'', 
        component:PagesComponent,
        children:[  //rutas hijas
            {path:'dashboard', component:DashboardComponent},
            {path:'progress', component:ProgressComponent},
            {path:'graficas1', component:Graficas1Component},
            {path:'', pathMatch:'full', redirectTo:'/dashboard' }
        ]
    }

];

export const PAGES_ROUTES =RouterModule.forChild(pagesRoute);