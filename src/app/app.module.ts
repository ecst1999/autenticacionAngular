import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-nt3nvxsz.us.auth0.com',
      clientId: 'uz8jd2Fl9iYtPYMUWwSPKzU26QKqFsRZ'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
