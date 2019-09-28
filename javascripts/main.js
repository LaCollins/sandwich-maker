import bread from './components/bread.js';
import meat from './components/meat.js';
import sandwich from './components/sandwich.js';
import cheese from './components/cheese.js';
import condiments from './components/condiments.js';
import veggies from './components/veggies.js';

const init = () => {
    bread.printBreadOptions();
    meat.printMeatOptions();
    cheese.printCheeseOptions();
    condiments.printCondimentOptions();
    veggies.printVeggieOptions();
    sandwich.printOrderButton();

};

init();