import { Injectable } from '@angular/core';
import {Item} from './item';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventory: Item[] = [];
  constructor() { }
  getInventory(): Item[] {
    return this.inventory;
  }
  giveItemToInvetory(item: Item): void{
    this.inventory.push(item);
  }
}
