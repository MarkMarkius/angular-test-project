import {Component, OnInit} from '@angular/core';

import {Transaction} from '../classes/transaction';
import {Category} from '../classes/category';
import {Balance} from '../classes/balance';

import {AppService} from '../service/app.service';

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

  date: string;

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
    this.date = MainComponent.getCurrentDate();
    this.transIncome = new Transaction(null, null, null, this.date);
    this.transLoss = new Transaction(null, null, null, this.date);
  }

  ngOnInit() {
    this.getData();
    this.filterCategory();
  }

  getData() {
      this.appService.getIncomeData().subscribe(incomeData => this.incomeData = incomeData);
      this.appService.getLossData().subscribe(lossData => this.lossData = lossData);
      this.appService.getCategory().subscribe(categories => this.categories = categories);
  }

  add(type: string, transaction: Transaction) {
    if (type === 'income') {
      this.incomeData.push((Object.assign({}, transaction)));
    } else {
      this.lossData.push(Object.assign({}, transaction));
    }
    transaction.name = '';
    transaction.value = null;
    transaction.category = '';
  }

  filterCategory() {
    console.log(this.lossData);
    this.incomeCategory = this.categories.filter(categories => categories.type === 'income');
    this.lossCategory = this.categories.filter(categories => categories.type === 'loss');
  }
}
