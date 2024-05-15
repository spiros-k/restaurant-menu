const food = [
    {
        name: "Egg-vocado",
        img: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "10.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "breakfast"
    },
     {
        name: "Strawberry oats",
        img: "https://images.pexels.com/photos/90894/pexels-photo-90894.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "5.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "breakfast"
    },
     {
        name: "Scrambled toast",
        img: "https://images.pexels.com/photos/236813/pexels-photo-236813.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "10.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "breakfast"
    },
     {
        name: "Fruit-cakes",
        img: "https://images.pexels.com/photos/2732663/pexels-photo-2732663.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "10.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "breakfast"
    },
     {
        name: "Greek salad",
        img: "https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "5.00€",
        text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "lunch"
    },
     {
        name: "Salmon way",
        img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "12.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "lunch"
    },
     {
        name: "Asparangus blue",
        img: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "12.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "lunch"
    },
     {
        name: "Penn-pasta",
        img: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "10.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "lunch"
    },
     {
        name: "Orange soup",
        img: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "10.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "lunch"
    },
     {
        name: "Cappuccino",
        img: "https://images.pexels.com/photos/2096840/pexels-photo-2096840.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "4.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "drinks"
    },
     {
        name: "Pot Coffee",
        img: "https://images.pexels.com/photos/2102818/pexels-photo-2102818.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "3.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "drinks"
    },
     {
        name: "Fit Juice",
        img: "https://images.pexels.com/photos/4551975/pexels-photo-4551975.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "5.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "drinks"
    },
     {
        name: "Orange Juice",
        img: "https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "5.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "drinks"
    },
     {
        name: "Signature Cocktail",
        img: "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "10.00€",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        id: "drinks"
    },
];


// WHEN PAGE LOADS FOR THE FIRST TIME
document.addEventListener("DOMContentLoaded", () => {
// USE A MAP METHOD THAT DYNAMICALLY CREATES THE REST OF THE ELEMENTS
    let foodDiv = food.map((item) => {
        return `<div class="food-div">
        <img class="image" src="${item.img}" alt="${item.name}">
        <div class="name-div">
            <h3 class="name">${item.name}</h3>
            <h3 class="price">${item.price}</h3>
        </div>
        <hr>
        <p class="ingredients">${item.text}</p>
        </div>`
    })
// JOIN THE CREATED ELEMENTS WIHT SPACE, NOT WITH THE DEFAULT COMMA, 
// SO I CAN USE THEM AS PALIN HTML
    foodDiv = foodDiv.join("");
// INSERT THE COMBINED ELEMENTS INTO THEIR SECTION
    document.getElementById("food-section").innerHTML = foodDiv;
})


document.getElementById("all-food").addEventListener("click", () => {
    let foodDiv = food.map((item) => {
        return `<div class="food-div">
        <img class="image" src="${item.img}" alt="${item.name}">
        <div class="name-div">
            <h3 class="name">${item.name}</h3>
            <h3 class="price">${item.price}</h3>
        </div>
        <hr>
        <p class="ingredients">${item.text}</p>
        </div>`
    })
    console.log(foodDiv);
    foodDiv = foodDiv.join("");
    console.log(foodDiv);
    document.getElementById("food-section").innerHTML = foodDiv;
})


document.getElementById("breakfast").addEventListener("click", () => {
    let foodDiv = food.map((item) => {
       if(item.id === "breakfast"){
        return `<div class="food-div">
        <img class="image" src="${item.img}" alt="${item.name}">
        <div class="name-div">
            <h3 class="name">${item.name}</h3>
            <h3 class="price">${item.price}</h3>
        </div>
        <hr>
        <p class="ingredients">${item.text}</p>
        </div>`
       }
    })
    console.log(foodDiv);
    foodDiv = foodDiv.join("");
    document.getElementById("food-section").innerHTML = foodDiv;
})


document.getElementById("lunch").addEventListener("click", () => {
    let foodDiv = food.map((item) => {
       if(item.id === "lunch"){
        return `<div class="food-div">
        <img class="image" src="${item.img}" alt="${item.name}">
        <div class="name-div">
            <h3 class="name">${item.name}</h3>
            <h3 class="price">${item.price}</h3>
        </div>
        <hr>
        <p class="ingredients">${item.text}</p>
        </div>`
       }
    })
    console.log(foodDiv);
    foodDiv = foodDiv.join("");
    document.getElementById("food-section").innerHTML = foodDiv;
})


document.getElementById("drinks").addEventListener("click", () => {
    let foodDiv = food.map((item) => {
       if(item.id === "drinks"){
        return `<div class="food-div">
        <img class="image" src="${item.img}" alt="${item.name}">
        <div class="name-div">
            <h3 class="name">${item.name}</h3>
            <h3 class="price">${item.price}</h3>
        </div>
        <hr>
        <p class="ingredients">${item.text}</p>
        </div>`
       }
    })
    console.log(foodDiv);
    foodDiv = foodDiv.join("");
    document.getElementById("food-section").innerHTML = foodDiv;
})