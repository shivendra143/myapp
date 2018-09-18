import { NgModule } from '@angular/core';
import { ThemeComponent } from '../theme/theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';


const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            {
                'path': 'city',
                'loadChildren': '.\/city.module#CityModule',
            },
            {
                'path': '',
                'redirectTo': 'city',
                'pathMatch': 'full',
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CityRoutingModule { }
