import bread from './bread.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
    let domString2 = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Your Final Order</h5>
            <div class="row d-flex justify-content-between"> 
            `;
    for (let i = 0; i < items.length; i++) {
        domString2 += `
        <h6>${items[i].name}</h6>
        <h6>$${items[i].price}</h6>
        `;
    };
    domString2 += `
        </div></div></div>`

    utilities.printToDom('final-order', domString2);
};


const creatOrderEvent = () => {
    const selectedBread = bread.getSelectedBread();
    createFinalOrder(selectedBread);
}

const printOrderButton = () => {
    const domString = '<button type="button" id="order-button" class="btn btn-dark">Make Sammich</button>';
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', creatOrderEvent);
};

export default { printOrderButton }