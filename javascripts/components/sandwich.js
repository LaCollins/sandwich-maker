import utilities from '../helpers/utilities.js';
import sandwich from './sandwich.js';

const printOrderButton = () => {
    const domString = '<button type="button" id="order-button" class="btn btn-dark">Make Sammich</button>';
    utilities.printToDom('button-container', domString);
    document.getElementById('order-button').addEventListener('click', sandwich.creatOrderEvent);
};

export default { printOrderButton }