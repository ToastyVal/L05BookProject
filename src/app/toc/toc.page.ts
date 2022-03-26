import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Cover | The Start Of Learning Computer Programming",
      url: "/cover"
    },
    {
      title: "Chapter 1 | Where It Starts",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | A Journey is Coming?",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | Climbing Starts",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | A Steady Pace Needed!",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | The Down Hill Climb",
      url: "/chapter5"
    },
    {
      title: "Chapter 6 | The Final Stretch is Here!",
      url: "/chapter6"
    },
    {
      title: "Back Cover | About the Story",
      url: "/back-cover"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
