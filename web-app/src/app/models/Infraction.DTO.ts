export interface InfractionDTO {
  id: number;
  date: Date;
  radar_id: number;
  vehicule_id: number;
  vitesse_vehicule: number;
  vitesseMax: number;
  montant: number;
  // Vehicule vehicule;
  // Radar radar;
}
