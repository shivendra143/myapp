import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from "./_services/script-loader.service";
import { AuthModule } from "./auth/auth.module";
import { FeedbackRoutingModule } from "./feedback/feedback-routing.module";
import { NotificationRoutingModule } from "./notification/notification-routing.module";
import { ContentmanagementRoutingModule } from "./contentmanagement/contentmanagement-routing.module";
import { MeassagemanagementRoutingModule } from './meassagemanagement/meassagemanagement-routing.module';
import { AdminmanagementRoutingModule } from './admin/adminmanagement-routing.module';
import { DriversRoutingModule } from './drivers/drivers-routing.module';
import { CountryRoutingModule } from './country/country-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { EmployeeRoutingModule } from './employee/employee-routing.module';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from "./services/http.factory";
import { ClassoflicenseRoutingModule } from './classoflicense/classoflicense-routing.module';
import { StateRoutingModule } from './state/state-routing.module';
import { CityRoutingModule } from './city/city-routing.module';





@NgModule({
    declarations: [
        ThemeComponent,
        AppComponent
    ],
    imports: [
        LayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DashboardRoutingModule,
        DriversRoutingModule,
        EmployeeRoutingModule,
        CountryRoutingModule,
        StateRoutingModule,
        CityRoutingModule,
        ClassoflicenseRoutingModule,
        FeedbackRoutingModule,
        NotificationRoutingModule,
        ContentmanagementRoutingModule,
        MeassagemanagementRoutingModule,
        AuthModule,
        AdminmanagementRoutingModule
    ],
    providers: [ 
        {
          provide: Http,
          useFactory: httpFactory,
          deps: [XHRBackend, RequestOptions]
        }, 
        ScriptLoaderService
     ],
    bootstrap: [AppComponent]
})
export class AppModule { }
