console.log('JS OK');

const shoppingList = ['pane', 'acqua', 'sale', 'origano'];
const target = document.getElementById('target');

let printedList = 'Lista della spesa: ';

for (let i = 0; i < shoppingList.length; i++){
    printedList += ' '+shoppingList[i];
}

printedList += ' / Con while: ';

let counter = 0
while (counter < shoppingList.length){
    printedList += ' '+shoppingList[counter];
    counter++;
}

target.innerText = printedList;