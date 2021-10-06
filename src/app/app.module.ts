import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


/**Modules */
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

/**Components */
import { SpinnerComponent } from './shared/spinner.component';
import { AppComponent } from './app.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    
    NotPageFoundComponent,
  ],
  imports: [
    PagesModule,
    AuthModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
