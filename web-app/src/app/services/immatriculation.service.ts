import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, retry} from "rxjs";
import {InfractionDTO} from "../models/Infraction.DTO";
import {ProprietaireDTO} from "../models/Proprietaire.DTO";

@Injectable({
  providedIn: 'root'
})
export class ImmatriculationService {

  baseUrl = environment.api;
  service = environment.IMMATRICULATION_SERVICE
  constructor(private httpClient:HttpClient) { }
  getAllImmatriculation():Observable<ProprietaireDTO[]>{
    return this.httpClient
      .get<ProprietaireDTO[]>(`${this.baseUrl}/${this.service}/proprietaires`)
      .pipe(retry(1))

  }

  deleteImmatriculation(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${this.service}/immatriculations/${id}`);
  }
}
