import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialsComponent } from './components/socials/socials.component';
import { LogoComponent } from './components/logo/logo.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { LaboralComponent } from './components/laboral/laboral.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialsComponent,
    LogoComponent,
    BannerComponent,
    AboutComponent,
    LaboralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
