console.log('JS OK');

const shoppingList = ['pane', 'acqua', 'sale', 'origano'];
const target = document.getElementById('target');
const target2 = document.getElementById('target2');

for (let i = 0; i < shoppingList.length; i++){
    target.innerText += ' '+shoppingList[i];
}

let counter = 0
while (counter < shoppingList.length){
    target2.innerText += ' '+shoppingList[counter];
    counter++;
}