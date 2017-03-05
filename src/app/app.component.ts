import { Component, OnInit } from '@angular/core';

class Transaction{
  constructor(public name: string,
              public value: number){}
}

const earningsData: Transaction[] = [
  {  name: 'name1', value: 250 },
  {  name: 'name2', value: 400 }
];

const costsData: Transaction[] = [
  {  name: 'name1', value: 23 },
  {  name: 'name2', value: 10 }
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

  ngOnInit(){
    this.earnings = this.getSum(earningsData);
    this.costs = this.getSum(costsData);
    this.getRemainder();
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

  addEarnings() {
    let newEarningsData: Transaction = new Transaction(this.earningsName, Number(this.earningsValue) );
    this.earningsData.push(newEarningsData);

    this.earnings = this.getSum(earningsData);

    this.earningsName = '';
    this.earningsValue = '';

    this.getRemainder();
  }

  addCosts(){
    let newCostsData: Transaction = new Transaction(this.costsName, Number(this.costsValue) );
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
