import {ProprietaireDTO} from "./Proprietaire.DTO";

export interface VehiculeDTO{
  id: number;
  matricule: string;
  marque: string;
  puissance_fiscale: number;
  model: string;

  proprietaire: ProprietaireDTO;
}
