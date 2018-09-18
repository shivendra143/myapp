import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationinfoComponent } from './notificationinfo/notificationinfo.component';

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
                'component': NotificationinfoComponent,
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
    declarations: [NotificationinfoComponent],
    providers: [
    ]
})
export class NotificationModule { }
