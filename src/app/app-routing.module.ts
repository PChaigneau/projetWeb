import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDestinationsComponent } from './page-destinations/page-destinations.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InfosDestinationComponent } from './infos-destination/infos-destination.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PaiementComponent } from './paiement/paiement.component';


const routes: Routes = [
  {path:'acceuil', component:AccueilComponent},  
  {path:'inscription', component:InscriptionComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'destinations', component: PageDestinationsComponent},
  {path:'infosDestination/:id', component:InfosDestinationComponent},  
  {path:'paiement', component:PaiementComponent},
  {path:'**', redirectTo:'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
