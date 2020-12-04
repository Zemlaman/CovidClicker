import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private pointsPerClick = 1; // Points Per Click
  private score = 0;
  constructor() { }
  getPointsPerClick(): number {
    return this.pointsPerClick;
  }
  getScore(): number {
    return this.score;
  }
  incrementScore(): void {
    this.score++;
    console.log(this.score);
  }
  increaseScore(amount: number): void {
    this.score += amount;
  }
  decreaseScore(amount: number): void {
    this.score -= amount;
  }
}
