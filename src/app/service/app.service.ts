import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Transaction} from '../classes/transaction';
import {Category} from '../classes/category';
import {Balance} from '../classes/balance';

@Injectable()
export class AppService {
  private balanceUrl = 'api/balance';
  private incomeDataUrl = 'api/incomeData';
  private lossDataUrl = 'api/lossData';
  private categoryUrl = 'api/categories';

  constructor(private http: Http) {
  }

  getBalance(): Promise<Balance[]> {
    return this.http.get(this.balanceUrl)
      .toPromise()
      .then(response => response.json().data as Balance[]);
  }

  getIncomeData(): Promise<Transaction[]> {
    return this.http.get(this.incomeDataUrl)
      .toPromise()
      .then(response => response.json().data as Transaction[]);
  }

  getLossData(): Promise<Transaction[]> {
    return this.http.get(this.lossDataUrl)
      .toPromise()
      .then(response => response.json().data as Transaction[]);
  }

  getCategory(): Promise<Category[]> {
    return this.http.get(this.categoryUrl)
      .toPromise()
      .then(response => response.json().data as Category[]);
  }

  // getTransByCat(name: string, data): Promise<Transaction[]> {
  //   return this.getTransaction(data)
  //     .then(category => category.filter(category => category.category === name));
  // }
}
