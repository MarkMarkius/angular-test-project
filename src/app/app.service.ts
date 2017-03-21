import {Injectable} from '@angular/core';

import {Transaction} from './transaction';
import {Category} from './category';

@Injectable()
export class AppService {
    getTransaction(data): Promise<Transaction[]> {
        return Promise.resolve(data);
    }

    getCategory(data): Promise<Category[]> {
        return Promise.resolve(data);
    }

    getTransByCat(id: number, data): Promise<Transaction[]> {
        return this.getTransaction(data)
            .then(category => category.filter(category => category.categoryId == id));
    }
}
