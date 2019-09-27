import utilities from '../helpers/utilities.js';

const breads = [
    {id: 'bread1', name: 'Brioche', price: 150 },
    {id: 'bread2', name: 'Focaccia', price: 90 },
    {id: 'bread3', name: 'Rye', price: 100 }, 
    {id: 'bread4', name: 'Ciabatta', price: 75 },
    {id: 'bread5', name: 'Sour Dough', price: 80 }
];

const printBreadOptions = () => {
    let domString = '';
    for (let i = 0; i < breads.length; i++) {
        domString += `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="${breads[i].id}" value="${breads[i].id}" checked>
            <label class="form-check-label" for="${breads[i].id}">
                ${breads[i].name}
            </label>
        </div>
        `;
    };
    utilities.printToDom('bread-container', domString);
};

export default { printBreadOptions };