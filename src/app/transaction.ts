export class Transaction {
    constructor(public name: string,
                public value: number,
                public category: string,
                public categoryId: number,
                public date: string){
    }
}
