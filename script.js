function Currency() {
    y = document.getElementById("converter").value;
    return y;
}

function Calculate() {
    y = Currency();

    x = document.getElementById("value1").value;

    if (x == "") {
        document.getElementById("value2").value = "";
    } else {
        switch (y) {
            case "Dollar":
                document.getElementById("value2").value = x * 51.89;
                break;

            case "Pound":
                document.getElementById("value2").value = x * 72.39;
                break;

            case "Euro":
                document.getElementById("value2").value = x * 63.84;
                break;

            case "Yen":
                document.getElementById("value2").value = x * 0.49;
                break;

            case "Yuan":
                document.getElementById("value2").value = x * 8.20;
                break;
        }
    }
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
