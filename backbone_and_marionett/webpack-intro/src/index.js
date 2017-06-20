

// let _=require('lodash');

import _ from 'lodash';

console.log('index.js');



let items = [
    { id: 134234, name: 'laptop' },
    { id: 223423, name: 'mobile' },
    { id: 223423, name: 'item1' },
];


// find index of laptop item

let idx = _.findIndex(items, item => item.name == 'mobile');
console.log(idx);