

var api = (function () {

    function fetchData(base) {
        var url = 'https://api.exchangeratesapi.io/latest?base=' + base;
        fetch(url)
        .then(res => res.json())
        .then(function (response) {
            console.log(response.base);
            
            sessionStorage.setItem("rates", JSON.stringify(response.rates));
            sessionStorage.setItem("base", JSON.stringify(response.base));
        });
    }

    return {
        data: fetchData
    }
})();
