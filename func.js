menu = [
    {id: 'cheeseBurger', name: 'Cheese Burger', price: 4.99},
    {id: 'dbl_cheeseBurger', name: 'Double Cheese Burger', price: 5.99},
    {id: 'tpl_cheeseBurger', name: 'Triple Cheese Burger', price: 6.99},
    {id: 'fishBurger', name: 'Fish Burger', price: 4.99},
    {id: 'hotdog', name: 'Hot Dog', price: 1.99},
    {id: 'frenchfries', name: 'French Fries', price: 2.99}
    ];
function increment(id) {
    counter = document.querySelector('#' + id).innerHTML;
    counter++;
    document.querySelector('#' + id).innerHTML = counter;
}
function decrement(id) {
    counter = document.querySelector('#' + id).innerHTML;
    if (counter <= 0) {
        return;
    }
    counter--;
    document.querySelector('#' + id).innerHTML = counter;
}
function setItem(id) {
    let x = document.querySelector('#' + id).innerHTML;
    sessionStorage.setItem(id, x);
}
function getItem(id) {
    return sessionStorage.getItem(id);
}
function setAll() {
    for (let i = 0; i < menu.length; i++) {
        setItem(menu[i]['id']);
    }
}
function getOrdered() {
    let ordered = [];
    for (let i = 0; i < menu.length; i++) {
        let obj = {};
        obj = menu[i];
        let num = getItem(obj['id']);
        if (num !== '0') {
            obj['quantity'] = num;
            obj['subtotal'] = num * obj['price'];
            ordered.push(obj);
        }
    }
    return ordered;
}