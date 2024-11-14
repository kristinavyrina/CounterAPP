const counterEl = document.querySelector('[data-find="counterValue"]');
const addOnePoolButton = document.getElementById('addOnePoolButton')
const addTwoPoolsButton = document.getElementById('addTwoPoolsButton');
const resetButton = document.getElementById('resetButton');
// counterEl =1;

console.log(counterEl.dataset);

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;

addOnePoolButton.addEventListener("click", function() {
    counter = counter + parseInt(addOnePoolButton.dataset.pools);
    console.log(counter, addOnePoolButton.dataset.pools);
    counterEl.innerText = counter;
});

addTwoPoolsButton.addEventListener("click", function() {
    counter = counter + parseInt(addTwoPoolsButton.dataset.pools);
    console.log(counter, addTwoPoolsButton.dataset.pools);
    counterEl.innerText = counter;
});

resetButton.addEventListener("click", function() {
    counter = COUNTER_INITIAL_VALUE;    
    counterEl.innerText = counter;
});