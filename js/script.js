document.addEventListener('DOMContentLoaded', function(){
let overlay = require('./parts/overlay'),
    up = require('./parts/up'),
    adv = require('./parts/advantages'),
    deadline = require('./parts/deadline');
overlay();
up();
adv();
deadline();
});