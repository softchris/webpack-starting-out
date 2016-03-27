
import { Test, Test2 } from './test';
import { Service } from './product-service';

let service = new Service();
console.log( service.getData() );

let t = new Test();
t.sayHi();

let t2= new Test2();
t2.test2();

console.log('app loaded.. hot');    

