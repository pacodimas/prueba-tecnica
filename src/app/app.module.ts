import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreakingbadComponent } from './breakingbad/breakingbad.component';
import { ReservaComponent } from './reserva/reserva.component';
import { ShortterLinkComponent } from './shortter-link/shortter-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeAComponent } from './home-a/home-a.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    BreakingbadComponent,
    ReservaComponent,
    ShortterLinkComponent,
    HomeAComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
