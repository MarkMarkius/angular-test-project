import { Component, OnInit } from '@angular/core';

import { Transaction } from './transaction';
import { AppService } from './app.service';
import { INCOMEDATATA, LOSSDATA } from './mook-transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  incomeData: Transaction[];
  lossData: Transaction[];

  incomeGross: number;
  lossSGross : number;
  remainder: number;

  incomeName: string;
  incomeValue: string;

  lossName: string;
  lossValue: string;

  date: string;

  constructor(private appService: AppService) {
    this.incomeGross = 0;
    this.lossSGross = 0;
    this.remainder  = 0;

    this.incomeName = '';
    this.incomeValue = '';

    this.lossName = '';
    this.lossValue = '';

    this.date = '';
  }

  getData(): void {
    this.appService.getData(INCOMEDATATA).then(incomeData => this.incomeData = INCOMEDATATA);
    this.appService.getData(LOSSDATA).then(lossData => this.lossData = LOSSDATA);
  }

  getSum(data): number{
    let sum: number = 0;
    for (let key in data) {
      if( data.hasOwnProperty( key ) ) {
        sum += data[key].value;
      }
    }
    return sum;
  }

  getRemainder(){
    this.remainder = this.incomeGross - this.lossSGross;
  }

  ngOnInit(){
    this.getData();
    this.incomeGross = this.getSum(this.incomeData);
    this.lossSGross = this.getSum(this.lossData);
    this.getRemainder();
    this.date = this.getCurrentDate();
  }

  getCurrentDate(){
    let currentDate = new Date();
    let day, month, year, fullDate;

    currentDate.getDate() < 10 ? day = '0' + currentDate.getDate() : day = currentDate.getDate();
    (currentDate.getMonth()+1) < 10 ? month = '0' + (currentDate.getMonth()+1) : month = (currentDate.getMonth()+1);
    year =  currentDate.getFullYear();

    fullDate = day + '.' + month + '.' + year;

    return fullDate;
  }

  addIncome() {
    let newIncomeData: Transaction = new Transaction(this.incomeName, Number(this.incomeValue), this.date);
    this.incomeData.push(newIncomeData);

    this.incomeGross = this.getSum(this.incomeData);

    this.incomeName = '';
    this.incomeValue = '';

    this.getRemainder();
  }

  addLoss(){
    let newLossData: Transaction = new Transaction(this.lossName, Number(this.lossValue), this.date );
    this.lossData.push(newLossData);

    this.lossSGross = this.getSum(this.lossData);

    this.lossName = '';
    this.lossValue = '';

    this.getRemainder();
  }


}
