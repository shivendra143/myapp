import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityinfoComponent } from './cityinfo/cityinfo.component';
import { AddcityComponent } from './addcity/addcity.component';
import { EditcityComponent } from './editcity/editcity.component';

import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../theme/layouts/layout.module';
import { DefaultComponent } from '../theme/pages/default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxUploaderModule } from 'ngx-uploader';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ValidationService } from '../services/validation.service';
import { AgmCoreModule } from '@agm/core';
import { ScheduleModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': CityinfoComponent,
            },
            {
                'path': 'edit-city/:driverid',
                'component': EditcityComponent,
              },
              {
                'path': 'add-city',
                'component': AddcityComponent,
              }
        ],
    },
];

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAp5vIeGvze_ZWYwee-fVE3JS3LYnREZP0",
      libraries: ["places"]
    }),
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    Ng4GeoautocompleteModule.forRoot(),
	  RouterModule.forChild(routes),
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUploaderModule,
    Ng2PaginationModule,
    FileUploadModule,
    ScheduleModule,
    CalendarModule
  ],
  declarations: [CityinfoComponent, AddcityComponent, EditcityComponent]
})
export class CityModule { }
