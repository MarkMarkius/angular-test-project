import 'rxjs';
import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
// import {INCOMEDATATA, CATEGORIES} from '../app.mook';

import {Transaction} from '../classes/transaction';
import {AppService} from '../service/app.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  item: Transaction[];

  constructor(private route: ActivatedRoute,
              private appService: AppService) {}

  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.appService.getTransByCat(params['name'], INCOMEDATATA))
    //   .subscribe(item => this.item = item);
  }



}
