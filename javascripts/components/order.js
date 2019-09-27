import utilities from '../helpers/utilities.js';

const creatOrderEvent = () => {
    const domString = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Your Final Order</h5>
            <div class="row d-flex justify-content-around"> 
            <p>Ingredient</p>
            <p>$price</p>
            </div>
        </div>
    </div>
    `;
    utilities.printToDom('final-order', domString);
}

const printOrderButton = () => {
    const domString = '<button type="button" id="order-button" class="btn btn-dark">Make Sammich</button>';
    utilities.printToDom('final-order', domString);
    document.getElementById('order-button').addEventListener('click', creatOrderEvent);
};

export default { printOrderButton }