let numberOfFruits = document.querySelectorAll(".number__of__fruits");
let imagesForProducts = document.querySelectorAll(".samples__presentation__container__image");
let smoothieTypeLinks = document.querySelectorAll(".smoothie__type");
let galleryContainer = document.querySelector(".gallery__container");
let numberOfProductsInIcon = document.querySelector(".cart span");
let productContainer = document.querySelector(".products");
let numberOfProducts = document.querySelector("#numberOfProducts");
let totalPayment = document.querySelector(".basketTotal");


products.forEach((product, index) => {
    let image = product.type == "weightLossSmoothie" ? "920-9201703_spinach-kiwi-smoothie-glass-bottle (1).png" : "3789073-removebg-preview.png";
    let category = product.type == "weightLossSmoothie" ? "weight loss" : "proteins";
    let price = Math.round((product.ingredients.slice(0,4).map(item => item.price).reduce((a, b) => { return a + b }) + Number.EPSILON) * 100) / 100;
    product.setPrice = price;
    galleryContainer.innerHTML += `
    <div class="box-product">
    <img class="samples__presentation__container__image"
        src="images/${image}">
    <div class="samples__presentation__container__description" id="product--${index}">
        <h1><a href="selected-product.html?name=${product.tag}">${product.name}</a></h1>
        <p>The product consists of <span>${product.ingredients.slice(0,4).length} ingredients</span> and is part of the category <span>${category}</span></p>
        <h4>€${price}</h4>
            <div class="actions">
                <a href="#!" class="link add-cart">Add</a>
            </div>
    </div>
</div>
    `;
    updateHueRotateColor();
});

Array.from(numberOfFruits).forEach((number, index) => {
    for (let i = 0; i < products[index].fruits; i++) {
        number.innerHTML += '<i class="fas fa-apple-alt"></i>';
    }
});

if (imagesForProducts) {
    Array.from(imagesForProducts).forEach((image, index) => {
        image.style.filter = `hue-rotate(${products[index].hueColorDeg}deg)`;
    })
}

Array.from(smoothieTypeLinks).forEach(link => {
    link.addEventListener("click", () => {
        let smoothieType = link.getAttribute("data-smoothie-type");
        if (smoothieType == "all") {
            updateProducts(products);
        } else {
            let filteredProducts = products.filter(element => element.type == smoothieType);
            updateProducts(filteredProducts);
        }
        updateHueRotateColor();
        updateNumberOfIconsBasesOnNumberOfFruits();
    });
});

function updateProducts(products) {
    galleryContainer.innerHTML = "";
    products.forEach((product, index) => {
        let price = Math.round((product.ingredients.slice(0,4).map(item => item.price).reduce((a, b) => { return a + b }) + Number.EPSILON) * 100) / 100;
        let image = product.type == "weightLossSmoothie" ? "920-9201703_spinach-kiwi-smoothie-glass-bottle (1).png" : "3789073-removebg-preview.png";
        let category = product.type == "weightLossSmoothie" ? "weight loss" : "proteins";
        galleryContainer.innerHTML += `
        <div class="box-product">
        <img class="samples__presentation__container__image"
            src="images/${image}">
        <div class="samples__presentation__container__description" id="product--${index}">
            <h1><a href="selected-product.html?name=${product.tag}">${product.name}</a></h1>
            <p>The product consists of <span>${product.ingredients.slice(0,4).length} ingredients</span> and is part of the category <span>${category}</span></p>
            <h4>€${price}</h4>
                <div class="actions">
                    <a class="link" href="#!">Add</a>
                </div>
        </div>
    </div>
        `;
    });
}

function updateHueRotateColor() {
    let imagesForProducts = document.querySelectorAll(".samples__presentation__container__image");
    if (imagesForProducts) {
        Array.from(imagesForProducts).forEach((image, index) => {
            image.style.filter = `hue-rotate(${products[index].hueColorDeg * index}deg)`;
        })
    }
}

function updateNumberOfIconsBasesOnNumberOfFruits() {
    let numberOfFruits = document.querySelectorAll(".number__of__fruits");
    Array.from(numberOfFruits).forEach((number, index) => {
        for (let i = 0; i < products[index].fruits; i++) {
            number.innerHTML += '<i class="fas fa-apple-alt"></i>';
        }
    });
}

let addToCartButtons = document.querySelectorAll(".add-cart");

if(JSON.parse(localStorage.getItem("products"))) {
    products.forEach(item => {
        let itemFound = JSON.parse(localStorage.getItem("products")).find(element => element.name === item.name);
        if(itemFound) {
            item.stock -= itemFound.inCart;
        }
    });
}

addToCartButtons.forEach((totalCostFromLocalStorage, index) => {
    totalCostFromLocalStorage.addEventListener("click", () => {
        let selectedProduct = products[index];
        console.log(selectedProduct);
        addProductToShoppingCart(products[index]);
        countProductsInTheShoppingCart();
        totalCostOfProductsInTheShoppingCart();
    });
});