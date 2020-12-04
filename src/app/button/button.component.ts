import { Component, OnInit } from '@angular/core';
import { StatsService } from "../stats.service";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
  }

  clickedButton(): void {
    this.statsService.incrementScore();
  }

}
