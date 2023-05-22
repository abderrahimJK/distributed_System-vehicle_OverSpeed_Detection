import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, retry} from "rxjs";
import {RadarDTO} from "../models/Radar.DTO";

@Injectable({
  providedIn: 'root'
})
export class RadarService {

  baseUrl = environment.api;
  service = environment.RADAR_SERVICE
  constructor(private httpClient:HttpClient) { }
  getAllRadars():Observable<RadarDTO[]>{
    return this.httpClient
      .get<RadarDTO[]>(`${this.baseUrl}/${this.service}/radars`)
      .pipe(retry(1))

  }

  deleteRadar(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${this.service}/radars/${id}`);
  }
}
