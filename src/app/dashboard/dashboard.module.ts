import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardinfoComponent } from './dashboardinfo/dashboardinfo.component';

import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../theme/layouts/layout.module';
import { DefaultComponent } from '../theme/pages/default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': DashboardinfoComponent,
            }
        ],
    },
];

@NgModule({
  imports: [
		CommonModule,
		RouterModule.forChild(routes),
		LayoutModule,
		FormsModule,
		ReactiveFormsModule
  ],
  declarations: [DashboardinfoComponent]
})
export class DashboardModule { }
