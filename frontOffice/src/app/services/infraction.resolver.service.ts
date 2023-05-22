import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {InfractionDTO} from "../models/Infraction.DTO";
import {Observable} from "rxjs";
import {InfractionService} from "./infraction.service";

@Injectable({
  providedIn: 'root'
})
export class InfractionResolverService implements Resolve<InfractionDTO[]>{

  constructor(private infractions: InfractionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InfractionDTO[]> | Promise<InfractionDTO[]> | InfractionDTO[] {
    return this.infractions.getAllInfraction();
  }

}
