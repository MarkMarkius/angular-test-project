import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let balance = [
      {income: 750, loss: 43, balance: 707}
    ];
    let incomeData = [
      {name: 'name1', value: 250, category: 'food', date: '02.03.2017'},
      {name: 'name1', value: 250, category: 'food', date: '02.03.2017'},
      {name: 'name1', value: 250, category: 'food', date: '02.03.2017'}
    ];
    let lossData = [
      {name: 'name1', value: 23, category: 'food', date: '04.03.2017'},
      {name: 'name2', value: 10, category: 'food', date: '05.03.2017'}
    ];
    let categories = [
      {id: 1, name: 'food', type: 'loss'},
      {id: 2, name: 'house', type: 'loss'},
      {id: 3, name: 'eating out', type: 'loss'},
      {id: 4, name: 'toiletry', type: 'loss'},
      {id: 5, name: 'car', type: 'loss'},
      {id: 6, name: 'transport', type: 'loss'},
      {id: 7, name: 'sports', type: 'loss'},
      {id: 8, name: 'health', type: 'loss'},
      {id: 9, name: 'entertainment', type: 'loss'},
      {id: 10, name: 'taxi', type: 'loss'},
      {id: 11, name: 'clothes', type: 'loss'},
      {id: 12, name: 'communications', type: 'loss'},
      {id: 13, name: 'deposits', type: 'income'},
      {id: 14, name: 'salary', type: 'income'},
      {id: 15, name: 'savings', type: 'income'}
    ];
    return {balance, incomeData, lossData, categories};
  }
}
