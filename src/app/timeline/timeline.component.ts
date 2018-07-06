import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  jobsTest: {
    id: number,
    title: string,
    description: string,
    company: string,
    start: Date,
    end: Date
  }[];

  constructor() { }

  ngOnInit() {
    this.jobsTest = [];
    this.jobsTest.push({
      id: 1,
      title: 'Vakkenvuller',
      description: 'Parttime, 9 uur per week',
      company: 'C1000',
      start: new Date(2013, 6),
      end: new Date(2014, 3)
    });
    this.jobsTest.push({
      id: 2,
      title: 'Keukenmedewerker',
      description: 'Parttime, 7 uur per week',
      company: 'Van Der Valk Hotels',
      start: new Date(2014, 10),
      end: new Date(2015, 2)
    });
    this.jobsTest.push({
      id: 3,
      title: 'Bediening',
      description: 'Parttime, 15 uur per week',
      company: 'Shizen Sushi & Grill',
      start: new Date(2015, 2),
      end: new Date(2017, 6)
    });
    this.jobsTest.push({
      id: 4,
      title: 'Computerhulp',
      description: 'Parttime, varierende uren',
      company: 'Student Aan Huis',
      start: new Date(2017, 9),
      end: new Date(2018, 2)
    });
    this.jobsTest.push({
      id: 5,
      title: 'Front-end stagiair',
      description: 'Fulltime, 40 uur per week',
      company: 'Regas B.V.',
      start: new Date(2018, 2),
      end: new Date(2018, 7)
    });
  }
}
