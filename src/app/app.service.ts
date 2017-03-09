import { Injectable } from '@angular/core';

import {Transaction} from './transaction';


@Injectable()
export class AppService {
  getData(data): Promise<Transaction[]> {
    return Promise.resolve(data);
  }
}
