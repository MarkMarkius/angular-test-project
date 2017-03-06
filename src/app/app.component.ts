import { Component, OnInit } from '@angular/core';

class Transaction{
  constructor(public name: string,
              public value: number,
              public date: string){}
}

const earningsData: Transaction[] = [
  {  name: 'name1', value: 250, date: '02.03.2017'},
  {  name: 'name1', value: 250, date: '02.03.2017'},
  {  name: 'name1', value: 250, date: '02.03.2017'},
  {  name: 'name1', value: 250, date: '02.03.2017'},
  {  name: 'name2', value: 400, date: '03.03.2017'}
];

const costsData: Transaction[] = [
  {  name: 'name1', value: 23, date: '04.03.2017'},
  {  name: 'name2', value: 10, date: '05.03.2017'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  earningsData: Transaction[] = earningsData;
  costsData: Transaction[] = costsData;

  earnings: number = 0;
  costs: number = 0;
  remainder: number = 0;

  earningsName: string = '';
  earningsValue: string = '';

  costsName: string = '';
  costsValue: string = '';

  date: string = '';

  ngOnInit(){
    this.earnings = this.getSum(earningsData);
    this.costs = this.getSum(costsData);
    this.getRemainder();
    this.date = this.getCurrentDate();
  }

  getSum(data) {
    let sum: number = 0;
    for (let key in data) {
      if( data.hasOwnProperty( key ) ) {
        sum += data[key].value;
      }
    }
    return sum;
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

  addEarnings() {
    let newEarningsData: Transaction = new Transaction(this.earningsName, Number(this.earningsValue), this.date);
    this.earningsData.push(newEarningsData);

    this.earnings = this.getSum(earningsData);

    this.earningsName = '';
    this.earningsValue = '';

    this.getRemainder();
  }

  addCosts(){
    let newCostsData: Transaction = new Transaction(this.costsName, Number(this.costsValue), this.date );
    this.costsData.push(newCostsData);

    this.costs = this.getSum(costsData);

    this.costsName = '';
    this.costsValue = '';

    this.getRemainder();
  }

  getRemainder(){
    this.remainder = this.earnings - this.costs;
  }


}
