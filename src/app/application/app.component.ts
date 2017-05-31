import {Component, OnInit} from '@angular/core';

import {Balance} from '../classes/balance';
import {AppService} from '../service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
  balance: Balance[];

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getBalance()
      .subscribe(balance => this.balance = balance);
  }
}
