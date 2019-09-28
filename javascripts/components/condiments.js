import utilities from '../helpers/utilities.js';

const condiments = [
    {id: 'condiment1', name: 'Ketsup', price: 150 },
    {id: 'condiment2', name: 'Mustard', price: 90 },
    {id: 'condiment3', name: 'Honey Mustard', price: 100 }, 
    {id: 'condiment4', name: 'Mayo', price: 75 },
    {id: 'condiment5', name: 'Chipotle Aoli', price: 80 },
    {id: 'noCondiments', name: 'No Condiments', price: 0 }
];

const getSelectedCondiments = () => {
    const selectedCondiment = [];
    const condimentCheckBoxes = document.getElementsByClassName('condiments');
    
    for (let j = 0; j < condimentCheckBoxes.length; j++) {
        if (condimentCheckBoxes[j].checked && condimentCheckBoxes[j].id === 'noCondiments') {
            for (let l = 0; l < condimentCheckBoxes.length; l++) {
                condimentCheckBoxes[l].checked = false;
                document.getElementById('noCondiments').checked = true;
            }
        } 
    }
    
    for (let m = 0; m < condimentCheckBoxes.length; m++) {
            for (let k = 0; k < condiments.length; k++) {
                if (condimentCheckBoxes[m].checked && condimentCheckBoxes[m].id === condiments[k].id) {
                    selectedCondiment.push(condiments[k]);
                }
             }
        }
    
    return selectedCondiment;
}

const printCondimentOptions = () => {
    let domString = '<h3>Condiments</h3>';
    for (let i = 0; i < condiments.length; i++) {
        domString += `
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input condiments" id="${condiments[i].id}">
            <label class="custom-control-label" for="${condiments[i].id}">${condiments[i].name}</label>
        </div>
        `;
    };
    utilities.printToDom('condiment-container', domString);
};

export default { printCondimentOptions, getSelectedCondiments };