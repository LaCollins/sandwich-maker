import utilities from '../helpers/utilities.js';

const veggies = [
    {id: 'veggie1', name: 'Avocado', price: 150 },
    {id: 'veggie2', name: 'Lettuce', price: 90 },
    {id: 'veggie3', name: 'Spinach', price: 100 }, 
    {id: 'veggie4', name: 'Tomato', price: 75 },
    {id: 'veggiee5', name: 'Cucumber', price: 80 },
    {id: 'noVeggie', name: 'No Veggies', price: 0 }
];

const getSelectedVeggies = () => {
    const selectedVeggies = [];
    const veggieCheckBoxes = document.getElementsByClassName('veggies');
    
    for (let j = 0; j < veggieCheckBoxes.length; j++) {
        if (veggieCheckBoxes[j].checked && veggieCheckBoxes[j].id === 'noVeggie') {
            for (let l = 0; l < veggieCheckBoxes.length; l++) {
                veggieCheckBoxes[l].checked = false;
                document.getElementById('noVeggie').checked = true;
            }
        } 
    }
    
    for (let m = 0; m < veggieCheckBoxes.length; m++) {
            for (let k = 0; k < veggies.length; k++) {
                if (veggieCheckBoxes[m].checked && veggieCheckBoxes[m].id === veggies[k].id) {
                    selectedVeggies.push(veggies[k]);
                }
             }
        }
    
    return selectedVeggies;
}

const printVeggieOptions = () => {
    let domString = '<h3>Veggies</h3>';
    for (let i = 0; i < veggies.length; i++) {
        domString += `
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input veggies" id="${veggies[i].id}">
            <label class="custom-control-label" for="${veggies[i].id}">${veggies[i].name}</label>
        </div>
        `;
    };
    utilities.printToDom('veggie-container', domString);
};

export default { printVeggieOptions, getSelectedVeggies };