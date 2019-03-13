

var api = (function () {
    var test = 'blabla';

    function fetchData() {

        fetch('https://api.exchangeratesapi.io/latest')
        .then(res => res.json())
        .then(function (response) {
            console.log(response);
            
            sessionStorage.setItem("rates", JSON.stringify(response.rates));
        });
    }

    return {
        data: fetchData
    }
})();



