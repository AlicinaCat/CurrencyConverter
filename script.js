function currency() {
    var endCur = document.querySelector('#end-currency');
    var startCur = document.querySelector('#start-currency');
    var startValue = document.querySelector('#start-value');
    console.log(endCur.value);
    console.log(startCur.value);
    console.log('textbox value: '+ startValue.value)

    var result = calculate(endCur.value, startCur.value, startValue.value);
    console.log('result is: ' + result);

    var endValue = document.querySelector('#end-value');
    endValue.value = result;
}



function calculate(a, b, c) {
    var result = a * b * c;

    return result;
}


api.data();

var ratesList = sessionStorage.getItem("rates");
var rates = JSON.parse(ratesList);
console.log(rates);

populateLists(rates);

function populateLists(rates) {
    let startCurList = document.querySelector('#start-currency');
    let endCurList = document.querySelector('#end-currency');

    for (let item of Object.entries(rates)) {
        console.log(item[1]);

        let newSelectItem = document.createElement('option');
        newSelectItem.innerHTML = item[0];
        newSelectItem.value = item[1];

        startCurList.appendChild(newSelectItem);
    }

    for (let item of Object.entries(rates)) {
        console.log(item[1]);

        let newSelectItem = document.createElement('option');
        newSelectItem.innerHTML = item[0];
        newSelectItem.value = item[1];

        endCurList.appendChild(newSelectItem);
    }

}
