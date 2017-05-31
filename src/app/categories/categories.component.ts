import {Component, OnInit} from '@angular/core';

import {Category} from '../classes/category';

import {AppService} from '../service/app.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getCategory()
      .subscribe(categories => this.categories = categories);
  }


}
