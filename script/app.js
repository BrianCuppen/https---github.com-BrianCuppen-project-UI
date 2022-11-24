

const showData = function (data) {
    //jsonify
    let json = data.json();
    console.log('data:',json)

    //get elements out of json
    for (const drink of json) {
        console.log(drink.strDrink)
    }

}

const getUrlData = function () {
    //make url
    let Url = "http://thecocktaildb.com/api/json/v1/1/search.php?f=a"
    let Url2 = "http://thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
   fetch(Url2) // Call the fetch function passing the url of the API as a parameter
    .then(function(response) {

        console.log(response)
        
        //send to show funciton
        showData(response);

        //return response.json();
        return response.json();
    })
    .catch(function(err) {
        // This is where you run code if the server returns any errors
        console.log(err)
    });
}

// domcontentloaded event
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    //test url
    getUrlData();
});