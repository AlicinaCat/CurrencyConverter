

var api = (function () {
    var test = 'blabla';

    function fetchData() {

        fetch('https://api.exchangeratesapi.io/latest')
        .then(res => res.json())
        .then(function (response) {
            console.log(response.rates);
            
            sessionStorage.setItem("rates", JSON.stringify(response.rates));
            
            
        });
    }

    return {
        data: fetchData
    }
})();



api.data();
var rates = sessionStorage.getItem("rates");
console.log(rates);