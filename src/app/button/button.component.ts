import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  public score = 0;

  //statsService

  constructor() {
  }

  ngOnInit(): void {
  }

  clickedButton(): void {

  }

}
