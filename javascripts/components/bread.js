import utilities from '../helpers/utilities.js';

const breads = [
    {id: 'bread1', name: 'Brioche', price: 150 },
    {id: 'bread2', name: 'Focaccia', price: 90 },
    {id: 'bread3', name: 'Rye', price: 100 }, 
    {id: 'bread4', name: 'Ciabatta', price: 75 },
    {id: 'bread5', name: 'Sour Dough', price: 80 }
];

const getSelectedBread = () => {
    const selectedBread = [];
    const breadCheckBoxes = document.getElementsByClassName('bread');
    
    for (let j = 0; j < breadCheckBoxes.length; j++) {
        for (let k = 0; k < breads.length; k++) {
            if (breadCheckBoxes[j].checked && breadCheckBoxes[j].id === breads[k].id) {
                selectedBread.push(breads[k]);
            }
        }
    }
    return selectedBread;
}

const printBreadOptions = () => {
    let domString = '<h3>Bread</h3>';
    for (let i = 0; i < breads.length; i++) {
        domString += `
        <div class="form-check">
            <input class="form-check-input bread" type="radio" name="exampleRadios" id="${breads[i].id}" value="${breads[i].id}" checked>
            <label class="form-check-label" for="${breads[i].id}">
                ${breads[i].name}
            </label>
        </div>
        `;
    };
    utilities.printToDom('bread-container', domString);
};

export default { printBreadOptions, getSelectedBread };