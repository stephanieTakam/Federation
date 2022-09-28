import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './modules/general/login/login-routing.module';
import { ServicesService } from './modules/application/services.service';
import { AboutRoutingModule } from './modules/general/about/about-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'federation'}),
    AppRoutingModule,
    LoginRoutingModule,
    HttpClientModule,
    AboutRoutingModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
