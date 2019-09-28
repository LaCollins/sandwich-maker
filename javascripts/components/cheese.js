import utilities from '../helpers/utilities.js';

const cheeses = [
    {id: 'cheese1', name: 'Provalone', price: 150 },
    {id: 'cheese2', name: 'Cheddar', price: 90 },
    {id: 'cheese3', name: 'American', price: 100 }, 
    {id: 'cheese4', name: 'Smoked Gouda', price: 75 },
    {id: 'cheese5', name: 'Swiss', price: 80 },
    {id: 'noCheese', name: 'No Cheese', price: 0 }
];

const getSelectedCheese = () => {
    const selectedCheese = [];
    const cheeseCheckBoxes = document.getElementsByClassName('cheese');
    
    for (let j = 0; j < cheeseCheckBoxes.length; j++) {
        if (cheeseCheckBoxes[j].checked && cheeseCheckBoxes[j].id === 'noCheese') {
            for (let l = 0; l < cheeseCheckBoxes.length; l++) {
                cheeseCheckBoxes[l].checked = false;
                document.getElementById('noCheese').checked = true;
            }
        } 
    }
    
    for (let m = 0; m < cheeseCheckBoxes.length; m++) {
            for (let k = 0; k < cheeses.length; k++) {
                if (cheeseCheckBoxes[m].checked && cheeseCheckBoxes[m].id === cheeses[k].id) {
                    selectedCheese.push(cheeses[k]);
                }
             }
        }
    
    return selectedCheese;
}

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++) {
        domString += `
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input cheese" id="${cheeses[i].id}">
            <label class="custom-control-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
        </div>
        `;
    };
    utilities.printToDom('cheese-container', domString);
};

export default { printCheeseOptions, getSelectedCheese };