import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDestinationsComponent } from './page-destinations/page-destinations.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InfosDestinationComponent } from './infos-destination/infos-destination.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PaiementComponent } from './paiement/paiement.component';
import { LoginGuardService } from './shared/login-guard.service';


const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'destinations', component: PageDestinationsComponent},
  {path:'destinations/:id', component:InfosDestinationComponent},  
  {path:'paiement/:id', component:PaiementComponent, canActivate:[LoginGuardService]},
  {path:'**', redirectTo:'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }