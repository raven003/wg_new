import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Item {
  _id?: string,
  AssignedTo: string,
  Title: string,
  Reward: number,
  Due: Date,
  Icon: string
}

@Injectable()
export class ItemService {
  static BASE_URL: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  /**
   * Läd ein Item, welches predicate matched
   *
   * @param {*} predicate
   * @returns {Promise<Item>}
   * @memberof ItemService
   */
  public async getItem(predicate: any): Promise<Item> {
    const items = (await this.exec('', predicate)) as Item[];
    if (items && items.length) return items[0];
    return null;
  }

  /**
   * Läd Items, welche auf predicate matchen
   *
   * @param {*} predicate
   * @returns {Promise<Item[]>}
   * @memberof ItemService
   */
  public async getItems(predicate: any): Promise<Item[]> {
    return (await this.exec('', predicate)) as Item[];
  }

  /**
   * Erstellt ein Item in der Datenbank
   *
   * @param {Item} item Das Item welches gespeichert werden soll
   * @returns {Promise<Item>}
   * @memberof ItemService
   */
  public async createItem(item: Item): Promise<Item> {
    return (await this.exec('/create', item)) as Item;
  }

  /**
   * Updated ein Item
   *
   * @param {Item} updatee Das bearbeitete Item
   * @returns {Promise<Item>}
   * @memberof ItemService
   */
  public async updateItem(updatee: Item): Promise<Item> {
    return (await this.exec('/update', updatee)) as Item;
  }

  /**
   * Löscht ein Item
   *
   * @param {Item} deletee
   * @returns {Promise<Item>}
   * @memberof ItemService
   */
  public async deleteItem(deletee: Item): Promise<Item> {
    return (await this.exec('/delete', deletee)) as Item;
  }

  private async exec(path: string = '', payload) {
    const url = ItemService.BASE_URL + path;
    try {
      return await this.http.post(url, payload).toPromise();
    } catch (e) {
      console.warn('Error loading data', payload, e);
      return null;
    }
  }
}
