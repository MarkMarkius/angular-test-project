import {Injectable} from '@angular/core';

import {Transaction} from '../classes/transaction';
import {Category} from '../classes/category';

@Injectable()
export class AppService {
   getTransaction(data): Promise<Transaction[]> {
        return Promise.resolve(data);
    }

    getCategory(data): Promise<Category[]> {
        return Promise.resolve(data);
    }

    getTransByCat(name: string, data): Promise<Transaction[]> {
        return this.getTransaction(data)
            .then(category => category.filter(category => category.category === name));
    }
}
