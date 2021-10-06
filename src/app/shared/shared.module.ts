import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

/**Libreries */
import { NgbDropdownModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

/**Components */
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavigationComponent } from "./header-navigation/navigation.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { SpinnerComponent } from "./spinner.component";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [SidebarComponent,
        HeaderComponent,
        NavigationComponent,
        BreadcrumbsComponent,
    ],
    exports: [SidebarComponent,
        HeaderComponent,
        NavigationComponent,
        BreadcrumbsComponent,
    ],
    imports:[
        CommonModule,
        PerfectScrollbarModule,
        BrowserModule,
        NgbDropdownModule,
        NgbModalModule,
        RouterModule
    ]
})

export class SharedModule {}