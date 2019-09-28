import bread from './components/bread.js';
import meat from './components/meat.js';
import order from './components/order.js';
import cheese from './components/cheese.js';
import condiments from './components/condiments.js';

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    condiments.printCondimentOptions();
    order.printOrderButton();
};

init();