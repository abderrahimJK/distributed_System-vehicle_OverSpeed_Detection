import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  counter: any;
  timer:number;
  timer_var:string;
  units:'s';
  interval;

  constructor(private sharedService:SharedService) { }

 

  ngOnInit(): void {
    this.timer_var = `${this.timer}s linear  forwards`
    this.timer = this.sharedService.getTimer();
    var countdown = this.timer;
    let cd = (<HTMLInputElement>document.getElementById('countdown-number'));
    
    cd.textContent = countdown.toString();

    setInterval(function() {
        countdown = --countdown <= 0 ? 60 : countdown;
        cd.textContent = countdown.toString();
    }, 1000);
  }

  startCounter() {
    this.interval = interval(1000).subscribe(() => {
      this.counter--;
      if (this.counter === 0) {
        // this.currentQuestion++;
        this.counter = 60;
        // this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval.unsubscribe();
    }, 600000);
  }

  stopCounter() {
      this.interval.unsubscribe();
      this.counter = 0;
    }

  resetCounter() {
      this.stopCounter();
      this.counter = 60;
      this.startCounter();
    }

}
