import {Component, OnInit} from '@angular/core';

import {Balance} from '../classes/balance';
import {AppService} from '../service/app.service';
import {BALANCE} from '../app.mook';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
  balance: Balance[];

  constructor(private appService: AppService) {
  }
  ngOnInit() {
    this.getData().then(() => {
      this.test();
    });
  }

  getData() {
    return Promise.all([
      this.appService.getBalance(BALANCE).then(balance => this.balance = BALANCE)
    ]);
  }

  test() {
    console.log(this.balance);
  }
}
