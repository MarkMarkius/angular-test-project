import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import {Category} from '../category';

import {AppService} from '../app.service';


import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
    category;
    constructor(
        private appService: AppService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

  ngOnInit(): void {
      this.route.params
          .switchMap((params: Params) => this.appService.getData(+params['id']))
          .subscribe(category => this.category = category);
  }

}
