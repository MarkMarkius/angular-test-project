import {Injectable} from '@angular/core';

import {Transaction} from '../classes/transaction';
import {Category} from '../classes/category';
import {Balance} from "../classes/balance";

@Injectable()
export class AppService {
  getBalance(data): Promise<Balance[]> {
    return Promise.resolve(data);
  }

  getTransaction(data): Promise<Transaction[]> {
    return Promise.resolve(data);
  }

  getCategory(data): Promise<Category[]> {
    return Promise.resolve(data);
  }

  getTransByCat(name: string, data): Promise<Transaction[]> {
    return this.getTransaction(data)
      .then(category => category.filter(category => category.category === name));
  }
}
