import 'rxjs';
import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
import {CATEGORIES} from '../app.mook';
import {Category} from '../category';


@Component({
    selector: 'app-category-item',
    templateUrl: './category-item.component.html',
    styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

    category: Category;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.getCategory(+params['id']))
            .subscribe(category => this.category = category);

    }

    getCategories(): Promise<Category[]> {
        return Promise.resolve(CATEGORIES);
    }

    getCategory(id: number): Promise<Category> {
        return this.getCategories()
            .then(category => category.find(category => category.id === id));
    }


}
