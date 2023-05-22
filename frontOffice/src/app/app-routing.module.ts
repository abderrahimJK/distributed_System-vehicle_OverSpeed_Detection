import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component'
import {ImmatriculationComponent} from "./pages/immatriculation/immatriculation.component";
import {RadarComponent} from "./pages/radar/radar.component";
import {InfractionComponent} from "./pages/infraction/infraction.component";
import {InfractionResolverService} from "./services/infraction.resolver.service";

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'infraction',component: InfractionComponent, resolve : {infractions:InfractionResolverService}},
  {path: 'radar',component: RadarComponent},
  {path: 'immatriculation',component: ImmatriculationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

