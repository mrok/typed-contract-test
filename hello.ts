/// <reference path="node_modules/typed-contract/typedcontract.d.ts" />
import {contract} from 'typedcontract';

class User {   
   constructor(private name: string, private age: number) {
        contract.In(age).IsGreaterThan(20);
    }
}
const user = new User('mrok', 123);

const user2 = new User('mrok2', 12);
