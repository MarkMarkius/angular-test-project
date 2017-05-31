import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
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

  static extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  constructor(private http: Http) {
  }

  getBalance(): Observable<Balance[]> {
    return this.http.get(this.balanceUrl)
      .map(AppService.extractData);
  }

  getIncomeData(): Observable<Transaction[]> {
    return this.http.get(this.incomeDataUrl)
      .map(AppService.extractData);
  }

  getLossData(): Observable<Transaction[]> {
    return this.http.get(this.lossDataUrl)
      .map(AppService.extractData);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get(this.categoryUrl)
      .map(AppService.extractData);
  }

  // getTransByCat(name: string, data): Promise<Transaction[]> {
  //   return this.getTransaction(data)
  //     .then(category => category.filter(category => category.category === name));
  // }
}
