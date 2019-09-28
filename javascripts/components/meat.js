import utilities from '../helpers/utilities.js';

const meats = [
    {id: 'meat1', name: 'Ham', price: 150 },
    {id: 'meat2', name: 'Bacon', price: 90 },
    {id: 'meat3', name: 'Turkey', price: 100 }, 
    {id: 'meat4', name: 'Smoked Chicken', price: 75 },
    {id: 'meat5', name: 'Pepperoni', price: 80 },
    {id: 'noMeat', name: 'No Meat', price: 0 }

];

const getSelectedMeat = () => {
    const selectedMeat = [];
    const meatCheckBoxes = document.getElementsByClassName('meat');
    
    for (let j = 0; j < meatCheckBoxes.length; j++) {
        if (meatCheckBoxes[j].checked && meatCheckBoxes[j].id === 'noMeat') {
            for (let l = 0; l < meatCheckBoxes.length; l++) {
                meatCheckBoxes[l].checked = false;
                document.getElementById('noMeat').checked = true;
            };
        };
    };
    
    for (let m = 0; m < meatCheckBoxes.length; m++) {
            for (let k = 0; k < meats.length; k++) {
                if (meatCheckBoxes[m].checked && meatCheckBoxes[m].id === meats[k].id) {
                    selectedMeat.push(meats[k]);
                };
             };
        };
    
    return selectedMeat;
};

const printMeatOptions = () => {
    let domString = '<h3>Meat</h3>';
    for (let i = 0; i < meats.length; i++) {
        domString += `
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input meat" id="${meats[i].id}">
            <label class="custom-control-label" for="${meats[i].id}">${meats[i].name}</label>
        </div>
        `;
    };
    utilities.printToDom('meat-container', domString);
};

export default { printMeatOptions, getSelectedMeat };