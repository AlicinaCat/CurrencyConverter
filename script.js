function currency() {
    var endCur = document.querySelector('#end-currency');
    // var startCur = document.querySelector('#start-currency');
    var startCur = 1;
    var startValue = document.querySelector('#start-value');
    console.log('end currency: ' + endCur.value);
    console.log('start currency: ' + startCur);
    console.log('textbox value: ' + startValue.value)

    var result = calculate(endCur.value, startCur, startValue.value);
    console.log('result is: ' + result);

    var endValue = document.querySelector('#end-value');
    endValue.value = result;
}



function calculate(a, b, c) {
    var result = a * b * c;

    return result;
}

// Start
start();

function start() {
    api.data('EUR');
    var ratesList = sessionStorage.getItem("rates");
    var base = sessionStorage.getItem("base");
    // console.log(base);
    var rates = JSON.parse(ratesList);
    // console.log(rates);
    populateLists(rates);
}

function update() {
    var startCurrency = document.querySelector('#start-currency');
    var base = startCurrency.options[startCurrency.selectedIndex]
    console.log(base.text);
    api.data(base.text);
    var ratesList = sessionStorage.getItem("rates");

    // console.log(base);
    var rates = JSON.parse(ratesList);
    console.log(rates);
    updateLists();
    populateLists(rates);
}

function updateLists() {
    let startCurList = document.querySelector('#start-currency');
    let endCurList = document.querySelector('#end-currency');
    startCurList.options.length = 0;
    endCurList.options.length = 0;
}

function populateLists(rates) {
    let startCurList = document.querySelector('#start-currency');
    let endCurList = document.querySelector('#end-currency');

    var base = sessionStorage.getItem('base');
    let baseItem = document.createElement('option');
    baseItem.innerHTML = JSON.parse(base);
    baseItem.value = 1;
    startCurList.appendChild(baseItem);

    for (let item of Object.entries(rates)) {
        // console.log(item[1]);

        let newSelectItem = document.createElement('option');
        newSelectItem.innerHTML = item[0];
        newSelectItem.value = item[1];

        startCurList.appendChild(newSelectItem);
    }

    for (let item of Object.entries(rates)) {
        // console.log(item[1]);

        let newSelectItem = document.createElement('option');
        newSelectItem.innerHTML = item[0];
        newSelectItem.value = item[1];

        endCurList.appendChild(newSelectItem);
    }

}
