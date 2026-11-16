let cart = [];


let buttons = document.querySelectorAll(".add-to-cart");


// перебираю все кнопки
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        // получаю название товара
        let name = button.getAttribute("data-name");

        // получаю цену товара
        let price = Number(button.getAttribute("data-price"));

        // добавляю товар в корзину
        cart.push({
            name: name,
            price: price
        });

        // обновить корзину
        showCart();

        alert("Товар добавлен в корзину!");

    });

});


// функция отображения корзины
function showCart() {

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    // очищаем старый список
    cartItems.innerHTML = "";

    // показываются товары
    cart.forEach(function(item) {

        let li = document.createElement("li");

        li.textContent = item.name + " - " + item.price + "р.";

        cartItems.appendChild(li);

        total = total + item.price;

    });

    // показывается общая сумма
    document.getElementById("cart-total").textContent =
        "Итого: " + total + "р.";

    // показывается кол-во товаров
    document.getElementById("cart-count").textContent = cart.length;

}
