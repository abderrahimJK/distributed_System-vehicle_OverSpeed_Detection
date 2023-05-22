import { Component, OnInit } from '@angular/core';
import {RadarDTO} from "../../models/Radar.DTO";
import {RadarService} from "../../services/radar.service";

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  radars: RadarDTO[] = [];
  constructor(private radarService:RadarService) {
  }
  ngOnInit(): void {
    this.fetchData();

  }

  onRemove(id: number) {
    this.radarService.deleteRadar(id).subscribe({
      next : rep => console.log(rep),
      error : err => console.error(err)
    });
    this.fetchData();
  }

  fetchData(): void{
    this.radarService.getAllRadars().subscribe({
      next: response=>{
        this.radars = response;
        console.log(response);
      },
      error : err => console.error(err)
    })
  }

}
