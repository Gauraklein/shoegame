let shoes = [
    {
        "name": "Chuck Taylor High Black",
        "class": "converse",
        "img": "img/chuck-black-hi.png",
        "color": "black",
        "description": "A classic sneaker, originally designed for the basketball court",
        "price": "$80.00",
        "sale": false
    },
    {
        "name": "Chuck Taylor High White",
        "class": "converse",
        "img": "img/chuck-white-hi.png",
        "color": "white",
        "description": "A classic sneaker, originally designed for the basketball court",
        "price": "$80.00",
        "sale": false
    },
    {
        "name": "Air Jordan 1 Bred",
        "class": "jordan",
        "img": "img/jordan-1-bred.png",
        "color": "black red",
        "description": "The colorway that created the legacy, this shoe was originally banned by the NBA",
        "price": "$160.00",
        "sale": false
    },
    {
        "name": "Air Jordan 1 Chicago",
        "class": "jordan",
        "img": "img/jordan-1-chicago.png",
        "color": "white red",
        "description": "First released in 1985 this is one of the most iconic Jordans of all time",
        "price": "$160.00",
        "sale": true
    },
    {
        "name": "Air Jordan 1 Royal",
        "class": "jordan",
        "img": "img/jordan-1-royal.png",
        "color": "black blue",
        "description": "One of the most popular colorways of the first Air Jordan",
        "price": "$160.00",
        "sale": false
    },
    {
        "name": "Air Jordan 1 Shadow",
        "class": "jordan",
        "img": "img/jordan-1-shadow.png",
        "color": "black gray",
        "description": "A shadowy colorway of the original 1, goes with almost any outfit",
        "price": "$160.00",
        "sale": true
    },
    {
        "name": "Nike Cortez",
        "class": "nike",
        "img": "img/nike-cortez.png",
        "color": "white",
        "description": "Originally designed for track and field, this silhouette became extremely popular on the West Coast",
        "price": "$60.00",
        "sale": true
    },
    {
        "name": "Pf Flyer High",
        "class": "pf-flyer",
        "img": "img/pf-flyer-black-hi.png",
        "color": "black",
        "description": "One of the original sneakers available for purchase, a bonafide classic",
        "price": "$50.00",
        "sale": false,
        "newArrival": true
    },
    {
        "name": "Pf Flyer Low",
        "class": "pf-flyer",
        "img": "img/pf-flyer-white-low.png",
        "color": "white",
        "description": "A low top version of the classic silhouette",
        "price": "$40.00",
        "sale": true,
        "newArrival": true
    },
    {
        "name": "Reebok Club 85",
        "class": "reebok",
        "img": "img/reebok-club-85.png",
        "color": "white",
        "description": "A classic design and a perfect addition for any fan of classic sneakers",
        "price": "$60.00",
        "sale": false,
        "newArrival": true
    },
    {
        "name": "Adidas Superstar",
        "class": "adidas",
        "img": "img/adidas-superstar.png",
        "color": "white",
        "description": "The original superstar, popularized by Run DMC",
        "price": "$70.00",
        "sale": false,
        "newArrival": true
    }
]

let productContainer = $('#product-container') //product container/main content area
let homeButton = $('#home') //home button
let newArrivalButton = $('#new-arrivals') //new arrivals
let saleButton = $('#sale')//sale button

//brand tags on the sidebar, used for populating product container
let jordanTag = $('#jordan')
let nikeTag = $('#nike')
let converseTag = $('#converse')
let reebokTag = $('#reebok')
let adidasTag = $('#adidas')
let pfFlyerTag = $('#pf-flyer')


productContainer.html(allProductsRender()); // pulls up all products on page load

homeButton.click(homeRender)//loads home page

saleButton.click(saleRender) //loads items on sale

newArrivalButton.click(newArrivalRender) //loads new arrivals based on their location in the shoes array

// loads brand specific products
jordanTag.click(onlyJordan); 
nikeTag.click(onlyNike)
converseTag.click(onlyConverse)
reebokTag.click(onlyReebok)
adidasTag.click(onlyAdidas)
pfFlyerTag.click(onlyPfFlyer)

//functions for specific brands. They clear out the products 
//then run the brand render function using the specified class name

function onlyJordan () {
    
    productContainer.empty();
    productContainer.html(brandRender('jordan'))

}


function onlyNike () {
    
    productContainer.empty();
    productContainer.html(brandRender('nike'))
    
}


function onlyConverse () {
    
    productContainer.empty();
    productContainer.html(brandRender('converse'))
    
}


function onlyReebok () {
    
    productContainer.empty();
    productContainer.html(brandRender('reebok'))
    
}

function onlyAdidas () {
    
    productContainer.empty();
    productContainer.html(brandRender('adidas'))
    
}

function onlyPfFlyer () {
    
    productContainer.empty();
    productContainer.html(brandRender('pf-flyer'))
    
}

//Renders all products

function allProductsRender () { 

    return shoes.map(shoe => { //shoes is an array, html for each shoe tile

        return `
            <div class="flex1 shoe-tile flex-column ${shoe.class} ${shoe.color}">
                <img class="shoe-img" src="${shoe.img}" alt="${shoe.name}">
                <h4>${shoe.name}</h4>
                <p>${shoe.description}</p>
                <p><strong>${shoe.price}</strong></p>

            </div>
        `

    }).join("");

}

//Renders prodcuts from a specific brand

function brandRender (brand) { 

    return shoes.map(shoe => { 
        
        if (shoe.class === brand) {
            return `
                <div class="flex1 shoe-tile flex-column ${shoe.class} ${shoe.color}">
                    <img class="shoe-img" src="${shoe.img}" alt="${shoe.name}">
                    <h4>${shoe.name}</h4>
                    <p>${shoe.description}</p>
                    <p><strong>${shoe.price}</strong></p>

                </div>
            `
        }
    }).join("");

}

//Renders all products when clicking the home button

function homeRender () {
    productContainer.empty();
    productContainer.html(allProductsRender)
}

//Renders all products on sale

function saleRender () {
    productContainer.empty;
    productContainer.html(saleConditional)
}

function saleConditional () {

    return shoes.map(shoe => { 
        if (shoe.sale) {
            return `
                <div class="flex1 shoe-tile flex-column ${shoe.class} ${shoe.color}">
                    <img class="shoe-img" src="${shoe.img}" alt="${shoe.name}">
                    <h4>${shoe.name}</h4>
                    <p>${shoe.description}</p>
                    <p><strong>${shoe.price}</strong></p>

                </div>
            `
        }
    }).join("");

}

//renders new arrivals

function newArrivalRender () {
    productContainer.empty()
    productContainer.html(newArrivalConditional)
}

function newArrivalConditional (array) {

    return shoes.map(shoe => { 
        if (shoe.newArrival) {
            return `
                <div class="flex1 shoe-tile flex-column ${shoe.class} ${shoe.color}">
                    <img class="shoe-img" src="${shoe.img}" alt="${shoe.name}">
                    <h4>${shoe.name}</h4>
                    <p>${shoe.description}</p>
                    <p><strong>${shoe.price}</strong></p>

                </div>
            `
        }
    }).join("");     
        
    
    
}