import {VehiculeDTO} from "./Vehicule.DTO";
import {RadarDTO} from "./Radar.DTO";

export interface InfractionDTO {
  id: number;
  date: Date;
  radar_id: number;
  vehicule_id: number;
  vitesse_vehicule: number;
  vitesseMax: number;
  montant: number;
  state: boolean;
  vehicule:VehiculeDTO;
  radar: RadarDTO;
}
