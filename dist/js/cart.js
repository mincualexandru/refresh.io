let galleryContainer = document.querySelector(".gallery__container");
let modals = document.querySelector(".modals");

let productsExists = document.querySelector(
    "#thereAreProductsInTheShoppingCart"
);
let productsNotExists = document.querySelector(
    "#thereAreNotProductsInTheShoppingCart"
);

let numberOfProductsInIcon = document.querySelector(".cart span");
let productContainer = document.querySelector(".products");
let numberOfProducts = document.querySelector("#numberOfProducts");
let totalPayment = document.querySelector(".basketTotal");

function displayCart() {
    let productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    let totalCostFromLocalStorage = parseInt(localStorage.getItem("totalCost"));
    let shippingCost = totalCostFromLocalStorage > 100 ? 0 : 5;
    if (productsFromLocalStorage) {
        galleryContainer.innerHTML = "";
        productsFromLocalStorage.forEach((item, index) => {
            galleryContainer.innerHTML += `<div class="box-product">
              <div class="box-product__image">
                  <img class="samples__presentation__container__image"
                  src="images/920-9201703_spinach-kiwi-smoothie-glass-bottle (1).png" style="filter: hue-rotate(${item.hueColorDeg}deg)">
              </div>
              <div class="box-product__content">
                  <h1>${item.name}</h1>
                  <h4>${item.price}€</h4>
                  <div class="quantity__product">
                      <button id="decrease-quantity" class="decrease"><</button>
                      <span>${item.inCart}</span>
                      <button id="increase-quantity" class="increase">></button>
                  </div>
                  <h4>${item.inCart * item.price}€</h4>
              </div>
              <i class="fa fa-times-circle delete-ingredient-button"></i>
              <i class="fas fa-info-circle view-details-button"></i>
          </div>`;
            modals.innerHTML += `<div class="modal" id="info-modal-${index}">
      <div class="modal-header">
        <div class="title">${item.name} Smoothie</div>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
      </div>
      </div>
      <div class="overlay" id="overlay${index}"></div>`;
        });
        galleryContainer.innerHTML += `<div class="box-product space-more">
          <div class="summary__details">
              <h1>Cart Totals</h1>
              <h3>Product Cost <span>&nbsp; &nbsp; &nbsp;${totalCostFromLocalStorage}.00€</span></h3>
              <h3>Shipping Cost <span>${shippingCost}€</span></h3>
              <h3>Total <span>${totalCostFromLocalStorage + 5}.00€</span></h3>
              <button id="buy-products">Buy Products</button>
          </div>
          <div class="box-product__image">
              <img class="samples__presentation__container__image"
              src="images/c700x420-removebg-preview.png">
          </div>
      </div>`;

        let infoButtons = document.querySelectorAll(".view-details-button");
        Array.from(infoButtons).forEach((button, index) => {
            button.addEventListener("click", () => {
                const modal = document.querySelector("#info-modal-" + index);
                openModal(modal, index);
                let closeButtons = document.querySelectorAll(".close-button");
                Array.from(closeButtons).forEach((button) => {
                    button.addEventListener("click", () => {
                        if (modal == null) return;
                        const overlay = document.getElementById("overlay" + index);
                        modal.classList.remove("active");
                        overlay.classList.remove("active");
                    });
                });
            });
        });
        deleteButtons();
        manageQuantity();
        checkProducts();
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll(".delete-ingredient-button");
    let productNumbers = parseInt(localStorage.getItem("numberOfProducts"));
    let totalCostFromLocalStorage = localStorage.getItem("totalCost");
    let productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    Array.from(deleteButtons).forEach((button, index) => {
        button.addEventListener("click", () => {
            let productDelete = productsFromLocalStorage[index];
            productsFromLocalStorage.splice(index, 1);
            localStorage.setItem("numberOfProducts", productNumbers - productDelete.inCart);
            localStorage.setItem(
                "totalCost",
                totalCostFromLocalStorage - productDelete.inCart * productDelete.price
            );
            localStorage.setItem(
                "products",
                JSON.stringify(
                    productsFromLocalStorage
                )
            );
            countProductsInTheShoppingCart();
            displayCart();
        });
    });
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll(".decrease");
    let increaseButtons = document.querySelectorAll(".increase");
    let productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));

    productsFromLocalStorage.forEach((product, index) => {
        decreaseButtons[index].addEventListener("click", () => {
            product.stock++;
            if (product.inCart > 1) {
                product.inCart--;
                localStorage.setItem(
                    "products",
                    JSON.stringify(productsFromLocalStorage)
                );
                totalCostOfProductsInTheShoppingCart();
                countProductsInTheShoppingCart();
                displayCart();
            }
        });

        increaseButtons[index].addEventListener("click", () => {
            modals.innerHTML = "";
            if (product.stock > 0) {
                product.stock--;
                product.inCart++;
                localStorage.setItem(
                    "products",
                    JSON.stringify(productsFromLocalStorage)
                );
                totalCostOfProductsInTheShoppingCart();
                countProductsInTheShoppingCart();
                displayCart();
            } else {
                modals.innerHTML += `
                      <div class="modal" id="modal${index}">
                      <div class="modal-header">
                        <div class="title">Example Modal</div>
                        <button data-close-button class="close-button">&times;</button>
                      </div>
                      <div class="modal-body">
                        Stock insuficient pentru produsul ${product.name}! 
                        Cantitatea disponibila este de ${product.stock}
                        Ai incercat sa cumperi ${product.inCart} de bucati
                      </div>
                      </div>
                      <div class="overlay" id="overlay${index}"></div>
                      `;
                const modal = document.querySelector("#modal" + index);
                openModal(modal, index);
                let closeButtons = document.querySelectorAll(".close-button");
                Array.from(closeButtons).forEach((button) => {
                    button.addEventListener("click", () => {
                        if (modal == null) return;
                        const overlay = document.getElementById("overlay" + index);
                        modal.classList.remove("active");
                        overlay.classList.remove("active");
                    });
                });
            }
        });
    });
}

displayCart();
checkProducts();

function checkProducts() {
    let productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    console.log(productsFromLocalStorage);
    if (productsFromLocalStorage == null) {
        productsExists.style.display = "none";
        productsNotExists.style.display = "block";
    } else if (productsFromLocalStorage.length == 0) {
        productsExists.style.display = "none";
        productsNotExists.style.display = "block";
    } else {
        productsExists.style.display = "block";
        productsNotExists.style.display = "none";
    }
}

function openModal(modal, indexOfProduct) {
    if (modal == null) return;
    const overlay = document.getElementById("overlay" + indexOfProduct);
    modal.classList.add("active");
    overlay.classList.add("active");
}

let buyProducts = document.querySelector("#buy-products");
if (buyProducts != null) {
    buyProducts.addEventListener("click", () => {
        window.location.replace("index.html");
        localStorage.clear();
    });
}