import { Component, OnInit } from '@angular/core';
import { StatsService } from "../stats.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  private score = 1;
  private pointsPerClick = 1;

  constructor(public statsService: StatsService) {

  }

  ngOnInit(): void {
    this.statsService.setScore(parseInt(JSON.parse(<string>localStorage.getItem('points'))));
    this.statsService.setPointsPerClick(parseInt(JSON.parse(<string>localStorage.getItem('pointsPerClick'))));
  }

  clickedButton(): void {
    this.score = this.statsService.getScore();
    this.pointsPerClick = this.statsService.getPointsPerClick();
    this.statsService.incrementScore();
    localStorage.setItem('points', this.score.toString());
    localStorage.setItem('pointsPerClick', this.pointsPerClick.toString());
  }
}

