import {Component, OnInit} from '@angular/core';

import {Transaction} from './transaction';
import {AppService} from './app.service';
import {INCOMEDATATA, LOSSDATA} from './mook-transaction';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    incomeData: Transaction[];
    lossData: Transaction[];

    transIncome: Transaction = new Transaction('', null, null);
    transLoss: Transaction = new Transaction('', null, null);

    incomeGross: number;
    lossSGross: number;
    remainder: number;

    incomeName: string;
    incomeValue: string;

    lossName: string;
    lossValue: string;

    date: string;

    constructor(private appService: AppService) {
        this.incomeGross = 0;
        this.lossSGross = 0;
        this.remainder = 0;

        this.incomeName = '';
        this.incomeValue = '';

        this.lossName = '';
        this.lossValue = '';

        this.date = '';
    }

    ngOnInit() {
        this.getData().then(() => {
            this.incomeGross = AppComponent.getSum(this.incomeData);
            this.lossSGross = AppComponent.getSum(this.lossData);
            this.getRemainder();
            this.date = AppComponent.getCurrentDate();
        });
    }

    getData() {
        return Promise.all([
            this.appService.getData(INCOMEDATATA).then(incomeData => this.incomeData = INCOMEDATATA),
            this.appService.getData(LOSSDATA).then(lossData => this.lossData = LOSSDATA)
        ]);
    }

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

    getRemainder() {
        this.remainder = this.incomeGross - this.lossSGross;
    }

    add(type: string, transaction: Transaction) {
        if (type === 'income') {
            this.incomeData.push(Object.assign({date: AppComponent.getCurrentDate()}, transaction));
            this.incomeGross = AppComponent.getSum(this.incomeData);
        } else {
            this.lossData.push(Object.assign({date: AppComponent.getCurrentDate()}, transaction));
            this.lossSGross = AppComponent.getSum(this.lossData);
        }
        transaction.name = '';
        transaction.value = null;

        this.getRemainder();
    }


}
