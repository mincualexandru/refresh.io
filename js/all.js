(function ($) {
    $(function () {
      $(".navigation__mobile--toggle").click(function () {
        $("nav ul").slideToggle();
      });
  
      $(".navigation__mobile--toggle").on("click", function () {
        this.classList.toggle("active");
      });
    });
  })(jQuery);
  
  $(".testimonial__container__pics img").click(function () {
    $(".testimonial__container__pics img").removeClass("active");
    $(this).addClass("active");
    $(".testimonial__section__contents--item").removeClass("active");
    $("#" + $(this).attr("alt")).addClass("active");
  });

if (JSON.parse(localStorage.getItem("numberOfProducts")) > 0) {
    numberOfProducts.innerHTML = JSON.parse(
      localStorage.getItem("numberOfProducts")
    );
}

function countProductsInTheShoppingCart() {
    let productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    let initialValue = 0;
    let totalNumberOfProducts = productsFromLocalStorage.reduce(function (
      totalNumber,
      product
    ) {
      return totalNumber + product.inCart;
    },
    initialValue);
    numberOfProducts.innerHTML = totalNumberOfProducts;
    localStorage.setItem("numberOfProducts", totalNumberOfProducts);
  }
  
  function addProductToShoppingCart(product) {
    let productsFromLocalStorage = localStorage.getItem("products");
    productsFromLocalStorage = JSON.parse(productsFromLocalStorage);
    if (productsFromLocalStorage) {
      const sameProduct = productsFromLocalStorage.find(
        (i) =>
          i.name == product.name &&
          JSON.stringify(i.ingredients) == JSON.stringify(product.ingredients)
      );
      if (sameProduct) {
        sameProduct.inCart += product.inCart;
      } else {
        product.inCart > 1 ? product.inCart = product.inCart : product.inCart = 1;
        productsFromLocalStorage.push(product);
      }
    } else {
      
      product.inCart > 1 ? product.inCart = product.inCart : product.inCart = 1;
      productsFromLocalStorage = [];
      productsFromLocalStorage.push(product);
    }
  
    localStorage.setItem("products", JSON.stringify(productsFromLocalStorage));
  }
  
  function totalCostOfProductsInTheShoppingCart() {
    let productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    let initialValue = 0;
    let totalCostOfProducts = productsFromLocalStorage.reduce(function (
      totalNumber,
      product
    ) {
      return totalNumber + product.price * product.inCart;
    },
    initialValue);
    localStorage.setItem("totalCost", totalCostOfProducts);
  }