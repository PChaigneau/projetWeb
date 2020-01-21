import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PromoComponent } from './promo/promo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarreFiltreComponent } from './barre-filtre/barre-filtre.component';
import { ListeDestinationsComponent } from './liste-destinations/liste-destinations.component';
import { CarteDestinationComponent } from './carte-destination/carte-destination.component';
import { InfosDestinationComponent } from './infos-destination/infos-destination.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PageDestinationsComponent } from './page-destinations/page-destinations.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PromoComponent,
    BarreFiltreComponent,
    ListeDestinationsComponent,
    CarteDestinationComponent,
    InfosDestinationComponent,
    InscriptionComponent,
    ConnexionComponent,
    PageDestinationsComponent,
    PaiementComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
