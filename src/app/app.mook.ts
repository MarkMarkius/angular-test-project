import {Transaction} from './transaction';
import {Category} from './category';

export const INCOMEDATATA: Transaction[] = [
    {name: 'name1', value: 250, category:'food', categoryId: 1, date: '02.03.2017'},
    {name: 'name1', value: 250, category:'food', categoryId: 1, date: '02.03.2017'},
    {name: 'name1', value: 250, category:'food', categoryId: 2, date: '02.03.2017'}
];

export const LOSSDATA: Transaction[] = [
    {name: 'name1', value: 23, category:'food', categoryId: 1, date: '04.03.2017'},
    {name: 'name2', value: 10, category:'food', categoryId: 1, date: '05.03.2017'}
];

export const CATEGORIES: Category[] = [
    {id: 1, name: 'food'},
    {id: 2, name: 'house'},
    {id: 3, name: 'eating out'},
    {id: 4, name: 'toiletry'},
    {id: 5, name: 'car'},
    {id: 6, name: 'transport'},
    {id: 7, name: 'sports'},
    {id: 8, name: 'health'},
    {id: 9, name: 'entertainment'},
    {id: 10, name: 'taxi'},
    {id: 11, name: 'clothes'},
    {id: 12, name: 'communications'}
];
