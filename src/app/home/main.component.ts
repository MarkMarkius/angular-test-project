import {Component, Input, OnInit} from '@angular/core';

import {Transaction} from '../classes/transaction';
import {Category} from '../classes/category';

import {AppService} from '../service/app.service';
import {INCOMEDATATA, LOSSDATA, CATEGORIES} from '../app.mook';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    incomeData: Transaction[];
    lossData: Transaction[];

    categories: Category[];

    transIncome: Transaction;
    transLoss: Transaction;

    @Input() incomeGross: number;
    @Input() lossSGross: number;
    @Input() remainder: number;

    date: string;

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
        });
    }

    getData() {
        return Promise.all([
            this.appService.getTransaction(INCOMEDATATA).then(incomeData => this.incomeData = INCOMEDATATA),
            this.appService.getTransaction(LOSSDATA).then(lossData => this.lossData = LOSSDATA),
            this.appService.getCategory(CATEGORIES).then(categories => this.categories = CATEGORIES)
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


}
