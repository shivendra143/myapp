import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeassagemanagementinfoComponent } from './meassagemanagementinfo/meassagemanagementinfo.component';

import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../theme/layouts/layout.module';
import { DefaultComponent } from '../theme/pages/default/default.component';


const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': MeassagemanagementinfoComponent,
            }
        ],
    },
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
    ],
    declarations: [MeassagemanagementinfoComponent],
    providers: [
    ]
})
export class MeassagemanagementModule { }
