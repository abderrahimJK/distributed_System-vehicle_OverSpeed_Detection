import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {InfractionDTO} from "../models/Infraction.DTO";
import { environment } from 'src/environments/environment';
import {Observable, retry} from "rxjs";

const httpOptions= {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class InfractionService {

  baseUrl = environment.api;
  service = environment.INFRACTION_SERVICE
  constructor(private httpClient:HttpClient) { }
  getAllInfraction():Observable<InfractionDTO[]>{
    return this.httpClient
      .get<InfractionDTO[]>(`${this.baseUrl}/${this.service}/infractions`)
      .pipe(retry(1))

  }

  deleteInfraction(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${this.service}/infractions/${id}`);
  }
}
