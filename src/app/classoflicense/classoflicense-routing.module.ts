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
                'path': 'license',
                'loadChildren': '.\/classoflicense.module#ClassoflicenseModule',
            },
            {
                'path': '',
                'redirectTo': 'license',
                'pathMatch': 'full',
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClassoflicenseRoutingModule { }
