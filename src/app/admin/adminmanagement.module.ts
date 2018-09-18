import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../theme/layouts/layout.module';
import { DefaultComponent } from '../theme/pages/default/default.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { PagerService } from '../services/pager.service';
import { AdminmanagementinfoComponent } from './adminmanagementinfo/adminmanagementinfo.component';
import { ActivityComponent } from './activity/activity.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': AdminmanagementinfoComponent,
            },
            {
                'path': 'my-activity',
                'component': ActivityComponent,
            },
            {
                'path': 'update-password',
                'component': ChangepasswordComponent,
            }
        ],
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [AdminmanagementinfoComponent, AdmineditComponent, ActivityComponent, ChangepasswordComponent],
    providers: [
      PagerService
    ]
})

export class AdminmanagementModule { }
