import { Component, OnInit } from '@angular/core';
import {AssessmentService} from '../../../services/assessment.service'

@Component({
  selector: 'app-dash-table',
  templateUrl: './dash-table.component.html',
  styleUrls: ['./dash-table.component.css']
})
export class DashTableComponent implements OnInit {

  constructor(private assessmentService:AssessmentService) { }


  assessments:any[] = [];

  ngOnInit(): void {

    this.getUserAssessment();
    
  }

  getUserAssessment(){
    this.assessmentService.getUserAssessmentDetail().subscribe({
      next: response => {
        this.assessments = response;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
