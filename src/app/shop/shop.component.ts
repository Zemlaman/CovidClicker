import { Component, OnInit } from '@angular/core';
import {ShopService} from '../shop.service';
import {Item} from '../item';
import items from '../../items/items.json';
// @ts-ignore
import {ItemInterface} from '../item.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private tempItems: ItemInterface = items;

  constructor(public shopService: ShopService) { }
  ngOnInit(): void {
    this.addItems();
  }
  addItems(): void {
    for(let i = 0; i < this.tempItems.length; i++){
      const tempItem: Item = new Item(this.tempItems[i].name, this.tempItems[i].price, this.tempItems[i].clicksPerSecond,
        this.tempItems[i].boughtTimes, this.tempItems[i].description,
        this.tempItems[i].pointsPerClick, this.tempItems[i].icon);
      this.shopService.getAllItems().push(tempItem);
    }
  }
  showDescription(desc: HTMLParagraphElement): void {
    desc.style.display = 'block';
  }
  hideDescription(desc: HTMLParagraphElement): void {
    desc.style.display = 'none';
  }
}
