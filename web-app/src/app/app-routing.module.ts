import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfractionComponent} from "./pages/infraction/infraction.component";
import {HomeComponent} from "./pages/home/home.component";
import {RadarComponent} from "./pages/radar/radar.component";
import {ImmatriculationComponent} from "./pages/immatriculation/immatriculation.component";

const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path: 'infraction',component: InfractionComponent},
  {path: 'radar',component: RadarComponent},
  {path: 'immatriculation',component: ImmatriculationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
