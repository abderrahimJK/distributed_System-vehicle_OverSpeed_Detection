import { Component, OnInit } from '@angular/core';
import {ImmatriculationService} from "../../services/immatriculation.service";
import {ProprietaireDTO} from "../../models/Proprietaire.DTO";

@Component({
  selector: 'app-immatriculation',
  templateUrl: './immatriculation.component.html',
  styleUrls: ['./immatriculation.component.css']
})
export class ImmatriculationComponent implements OnInit {

  proprietaires: ProprietaireDTO[] = [];
  constructor(private immatriculationService: ImmatriculationService) {
  }
  ngOnInit(): void {
    this.fetchData();

  }

  onRemove(id: number) {
    this.immatriculationService.deleteImmatriculation(id).subscribe({
      next : rep => console.log(rep),
      error : err => console.error(err)
    });
    this.fetchData();
  }

  fetchData(): void{
    this.immatriculationService.getAllImmatriculation().subscribe({
      next: response=>{
        this.proprietaires = response;
        console.log(response);
      },
      error : err => console.error(err)
    })
  }

}
