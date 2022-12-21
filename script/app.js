

const showData = function (drinks) {
  
    console.log(typeof drinks);

    //iterate through drinks
    for (let i = 0; i < drinks.drinks.length; i++) {
        console.log(drinks.drinks[i].strCategory);
    }

    //iterate through drinks and put in array
    let drinkArray = [];
    for (let i = 0; i < drinks.drinks.length; i++) {
        drinkArray.push(drinks.drinks[i].strCategory);
    }
    //sort the list
    drinkArray.sort();
    console.log(drinkArray);

    //put strCategory in js-categories
    let categories = document.querySelector(".js-categories");
    for (let i = 0; i < drinkArray.length; i++) {

        //check categories for cocktail
        if (drinkArray[i] == "Cocktail") {
            //add active class
            categories.innerHTML += `<li class="c-main-nav__item is-selected">
            <a class="c-main-nav__link" active href="#">${drinkArray[i]}</a></li>`;
        }else{
            //add reguarly
            categories.innerHTML += `<li class="c-main-nav__item">
            <a class="c-main-nav__link" href="#">${drinkArray[i]}</a></li>`;
        }
    }

    
}

const getUrlData = function () {
    //make url
    let Url = "http://thecocktaildb.com/api/json/v1/1/search.php?f=a"
    let Url2 = "http://thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
   fetch(Url2) // Call the fetch function passing the url of the API as a parameter
    .then((response) => response.json())
    .then((drinks) => {
        console.log(drinks);

        //send to show funciton
        //showData(drinks);
    })
    .catch(function(err) {
        // This is where you run code if the server returns any errors
        console.log(err)
    });
}

const getCategoryData = function () {
    //make url
    let Url = "http://thecocktaildb.com/api/json/v1/1/list.php?c=list"
    fetch(Url) // Call the fetch function passing the url of the API as a parameter
    .then((response) => response.json())
    .then((categories) => {
        console.log(categories);

        //send to show function
        showData(categories);
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
    getCategoryData();
});