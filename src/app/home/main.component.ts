import {Component, OnInit} from '@angular/core';

import {Transaction} from '../classes/transaction';
import {Category} from '../classes/category';
import {Balance} from '../classes/balance';

import {AppService} from '../service/app.service';
import {CATEGORIES} from '../app.mook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  balance: Balance[];
  incomeData: Transaction[];
  lossData: Transaction[];

  categories: Category[];
  incomeCategory: Category[];
  lossCategory: Category[];

  transIncome: Transaction;
  transLoss: Transaction;

  incomeGross: number;
  lossSGross: number;
  remainder: number;

  date: string;

  static getSum(data: Transaction[]): number {
    return data.reduce((prev, item) => prev + item.value, 0);
  }

  static getCurrentDate() {
    const currentDate = new Date();
    let day, month, year, fullDate;

    day = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
    month = (currentDate.getMonth() + 1) < 10 ? '0' + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1);
    year = currentDate.getFullYear();

    fullDate = day + '.' + month + '.' + year;

    return fullDate;
  }

  constructor(private appService: AppService) {
    this.incomeGross = 0;
    this.lossSGross = 0;
    this.remainder = 0;
    this.date = MainComponent.getCurrentDate();
    this.transIncome = new Transaction(null, null, null, this.date);
    this.transLoss = new Transaction(null, null, null, this.date);
  }

  ngOnInit() {
    this.getData().then(() => {
      this.incomeGross = MainComponent.getSum(this.incomeData);
      this.lossSGross = MainComponent.getSum(this.lossData);
      this.getRemainder();
      this.filterCategory();
    });
  }

  getData() {
    return Promise.all([
      this.appService.getIncomeData().then(incomeData => this.incomeData = incomeData),
      this.appService.getLossData().then(lossData => this.lossData = lossData),
      this.appService.getCategory().then(categories => this.categories = categories)
    ]);
  }

  getRemainder() {
    this.remainder = this.incomeGross - this.lossSGross;
  }

  add(type: string, transaction: Transaction) {
    if (type === 'income') {
      this.incomeData.push((Object.assign({}, transaction)));
      this.incomeGross = MainComponent.getSum(this.incomeData);
    } else {
      this.lossData.push(Object.assign({}, transaction));
      this.lossSGross = MainComponent.getSum(this.lossData);
    }
    transaction.name = '';
    transaction.value = null;
    transaction.category = '';

    this.getRemainder();
  }

  filterCategory() {
    this.incomeCategory = this.categories.filter(categories => categories.type === 'income');
    this.lossCategory = this.categories.filter(categories => categories.type === 'loss');
  }
}
