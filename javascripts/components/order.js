import bread from './bread.js';
import cheese from './cheese.js';
import meat from './meat.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Your Final Order</h5>
            `;
    for (let i = 0; i < items.length; i++) {
        let price = items[i].price / 100;
            price = price.toLocaleString('en-US', {style: "currency", currency: 'USD'});
        domString2 += `
        <div class="row d-flex justify-content-between">
        <h6 class="col-6">${items[i].name}</h6>
        <h6 class="col-6">${price}</h6>
        <p>
        </div>
        `;
    };
    domString2 += `
        </div></div>`

    utilities.printToDom('final-order', domString2);
};


const creatOrderEvent = () => {
    const selectedBread = bread.getSelectedBread();
    const selectedMeat = meat.getSelectedMeat();
    const selectedCheese = cheese.getSelectedCheese();
    let totalIngredients = selectedBread.concat(selectedMeat, selectedCheese);
    createFinalOrder(totalIngredients);
}

const printOrderButton = () => {
    const domString = '<button type="button" id="order-button" class="btn btn-dark">Make Sammich</button>';
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', creatOrderEvent);
};

export default { printOrderButton }