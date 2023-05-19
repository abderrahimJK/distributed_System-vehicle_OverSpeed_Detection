import {Component, OnInit} from '@angular/core';
import {InfractionDTO} from "./models/Infraction.DTO";
import {InfractionService} from "./services/infraction.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web-app';
  infractions: InfractionDTO[] = [];
  constructor(private infractionService:InfractionService) {
  }
  ngOnInit(): void {

    this.infractionService.getAllInfraction().subscribe({
      next: response=>{
        this.infractions = response;
        console.log(response);
      },
      error : err => console.error(err)
    })
  }
}
