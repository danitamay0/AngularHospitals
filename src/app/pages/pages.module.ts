import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { ProgressComponent } from "./progress/progress.component";
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgbDropdownModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
    ],
    exports: [
    ],
    imports:[
        SharedModule, 
        CommonModule,
        BrowserModule,
        RouterModule,
        PerfectScrollbarModule,
        NgbDropdownModule,
        NgbModalModule,
    ]
})
export class PagesModule {}