let nameOfProduct = document.querySelector("#name");
let priceOfProduct = document.querySelector("#price");
let descriptionOfProduct = document.querySelector("#description");
let categoryOfProduct = document.querySelector("#category");
let tagOfProduct = document.querySelector("#tag");
let ingredients = document.querySelector("#ingredients");
let addIngredientModal = document.querySelector("#add-ingredient-modal");
let errorDeleteIngredient = document.querySelector("#error-delete-ingredient");
let addToCartButton = document.querySelector("#add-to-cart-button");
let productQuantity = document.querySelector("#quantity");
let increaseQuantity = document.querySelector("#increase-quantity");
let decreaseQuantity = document.querySelector("#decrease-quantity");
let availableOptions = addIngredientModal.querySelector(".modal-body").getElementsByTagName('select')[0];
let openToViewRemainingIngredientsButton = document.querySelector("#openToViewRemainingIngredientsButton");
let closeErrorModalButton = errorDeleteIngredient.getElementsByTagName('button')[0];
let closeAddIngredientModalButton = addIngredientModal.getElementsByTagName('button')[0];
let productBoxImage = document.querySelector(".product__box__image").querySelector("img");
let modals = document.querySelector(".modals");



let numberOfProductsInIcon = document.querySelector(".cart span");
let productContainer = document.querySelector(".products");
let numberOfProducts = document.querySelector("#numberOfProducts");
let totalPayment = document.querySelector(".basketTotal");



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlParam = urlParams.get("name");

function findProduct() {
    return products.find((product) => product.tag === urlParam);
}

function useProductFound(product) {
    let price = Math.round((product.ingredients.slice(0, 4).map(item => item.price).reduce((a, b) => { return a + b }) + Number.EPSILON) * 100) / 100;
    console.log(price);
    nameOfProduct.innerHTML = product.name;
    priceOfProduct.innerHTML = price;
    product.price = price;
    descriptionOfProduct.innerHTML = product.description;
    categoryOfProduct.innerHTML =
        product.type == "weightLossSmoothie" ? "Weight Loss" : "Protein";
    tagOfProduct.innerHTML = product.tag;
    product.ingredients = proposedIngredients;
}

if(JSON.parse(localStorage.getItem("products"))) {
    let productFromLocalStorage = JSON.parse(localStorage.getItem("products")).find(item => item.tag === urlParam);
    products.forEach(item => {
        if(item.name == productFromLocalStorage.name) {
            item.stock -= productFromLocalStorage.inCart;
        }
    });
}

let selectedProduct = findProduct();

let allIngredients = selectedProduct.ingredients;
let proposedIngredients = selectedProduct.ingredients.slice(0, 4);
useProductFound(selectedProduct);

function updateIngredients(arrayOfIngredients) {
    ingredients.innerHTML = '';
    arrayOfIngredients.forEach((ingredient, index) => {
        ingredients.innerHTML += `<div class="ingredients__item">
          <div class="name">
              ${ingredient.name}
          </div>
          <div class="quantity">
          ${ingredient.quantity}
          </div>
          <i class="fas fa-times-circle delete-ingredient-button" onclick="deleteIngredient(${index})"></i>
      </div>`;
    });
    selectedProduct.setPrice = Math.round((proposedIngredients.map(item => item.price).reduce((a, b) => { return a + b }) + Number.EPSILON) * 100) / 100;
    priceOfProduct.innerHTML = selectedProduct.price;
    selectedProduct.ingredients = arrayOfIngredients;
    updateAddButton(proposedIngredients);
}

proposedIngredients.forEach((ingredient, index) => {
    ingredients.innerHTML += `<div class="ingredients__item">
      <div class="name">
          ${ingredient.name}
      </div>
      <div class="quantity">
      ${ingredient.quantity}
      </div>
      <i class="fas fa-times-circle delete-ingredient-button" onclick="deleteIngredient(${index})"></i>
  </div>`;
});

function deleteIngredient(index) {
    if (proposedIngredients.length > 2) {
        let ingredient2 = proposedIngredients[index];
        populateTheListOfRemaniningIngredients("delete", ingredient2);
    } else {
        openModal(errorDeleteIngredient);
    }

}

function addIngredient(newIngredient) {
    let ingredient2 = remainingIngredients[newIngredient];
    populateTheListOfRemaniningIngredients("add", ingredient2);
    selectedProduct.ingredients = proposedIngredients;
}

function closeModal(modal) {
    if (modal == null) return;
    const overlay = document.getElementById("overlay");
    modal.classList.remove("active");
    overlay.classList.remove("active");
    if (!overlay.classList.contains("active")) {
        let footerImages = document.querySelector(".subscribe__container__image").querySelectorAll("img");
        Array.from(footerImages).forEach(image => {
            let filterValue = getComputedStyle(image).filter.split(' ')[0];
            image.style.filter = `${filterValue} brightness(1)`;
        });
    }
}

closeErrorModalButton.addEventListener("click", () => {
    closeModal(errorDeleteIngredient);
});

closeAddIngredientModalButton.addEventListener("click", () => {
    closeModal(addIngredientModal);
});

openToViewRemainingIngredientsButton.addEventListener("click", () => {
    populateTheListOfRemaniningIngredients();
    clearList();
    openModal(addIngredientModal);
});

openToViewRemainingIngredientsButton.addEventListener("click", () => {
    openModal();
})

function clearList() {
    var listLength = availableOptions.length;
    for (var i = 0; i < listLength; i++) {
        for (var j = 0; j < listLength; j++) {
            if (availableOptions.options[i].value == availableOptions.options[j].value && i != j) {
                availableOptions.remove(j);
                listLength--;
            }
        }
    }
}

function populateTheListOfRemaniningIngredients(action, ingredient) {

    if (action == "add" && ingredient) {
        proposedIngredients.push(ingredient);
        remainingIngredients.splice(remainingIngredients.indexOf(ingredient), 1);
        updateIngredients(proposedIngredients);
    } else if (action == "delete" && ingredient) {
        proposedIngredients.splice(proposedIngredients.indexOf(ingredient), 1);
        remainingIngredients.push(ingredient);
        updateIngredients(proposedIngredients);
    } else {
        remainingIngredients = [];
        allIngredients.filter(function (obj) {
            return !this.has(obj.name);
        }, new Set(proposedIngredients.map(obj => obj.name))).forEach(item => {
            remainingIngredients.push(item);
        });
        remainingIngredients.forEach(item => {
            let option = document.createElement('option');
            option.innerHTML = item.name + "&nbsp; &nbsp;" + item.quantity;
            option.setAttribute('value', item.name);
            availableOptions.options[availableOptions.options.length] = new Option(item.name, item.name);
        });
        let arrayOfOptions = [];
        Array.from(availableOptions.options).forEach(option => {
            let addOption = allIngredients.find((item) => item.name === option.value);
            arrayOfOptions.push(addOption);
        });
        const found = arrayOfOptions.some(r => proposedIngredients.includes(r));
        if (found) {
            let difference = arrayOfOptions.filter(x => proposedIngredients.includes(x))[0];
            Array.from(availableOptions.options).forEach(option => {
                if (option.value == difference.name) {
                    availableOptions.options.remove(option);
                }
            });
        }
    }
}

let addIngredientButton = addIngredientModal.querySelector(".modal-body").getElementsByTagName('button')[0];
addIngredientButton.addEventListener("click", () => {
    let option = availableOptions.options[availableOptions.selectedIndex].value;
    let newIngredient = allIngredients.find((item) => item.name === option);
    let index = remainingIngredients.indexOf(newIngredient);
    addIngredient(index);
    availableOptions.remove(option);
    closeModal(addIngredientModal);
});

function updateAddButton(proposedIngredients) {
    if (proposedIngredients.length == 6) {
        openToViewRemainingIngredientsButton.setAttribute("disabled", "disabled");
    } else {
        openToViewRemainingIngredientsButton.removeAttribute("disabled");
    }
}

populateTheListOfRemaniningIngredients();

productBoxImage.style.filter = `hue-rotate(${selectedProduct.hueColorDeg}deg)`;

increaseQuantity.addEventListener("click", () => {
    if (selectedProduct.stock != 0) {
        productQuantity.value++;
        selectedProduct.stock--;
    }
});

decreaseQuantity.addEventListener("click", () => {
    if (productQuantity.value > 0) {
        productQuantity.value--;
        selectedProduct.stock++;
    }
});

addToCartButton.addEventListener("click", () => {
    if(selectedProduct.stock != 0) {
        selectedProduct.ingredients.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
        selectedProduct.inCart = parseInt(productQuantity.value);
        addProductToShoppingCart(selectedProduct);
        countProductsInTheShoppingCart();
        totalCostOfProductsInTheShoppingCart();
        resetValue();
        selectedProduct.stock--;
    } else {
        addToCartButton.setAttribute("disabled", "disabled");
    }
});

function resetValue() {
    productQuantity.innerHTML = 1;
    productQuantity.value = 1;
}

function openModal(modal) {
    if (modal == null) return;
    const overlay = document.getElementById("overlay");
    modal.classList.add("active");
    overlay.classList.add("active");
    if (overlay.classList.contains("active")) {
        let footerImages = document.querySelector(".subscribe__container__image").querySelectorAll('img');
        Array.from(footerImages).forEach(image => {
            let hueRotateValue = getComputedStyle(image).filter;
            image.style.filter = `${hueRotateValue} brightness(0.5)`;
        });
        let footerContent = document.querySelector(".subscribe__container__content");
        footerContent.style.position = "unset";
    }
}
