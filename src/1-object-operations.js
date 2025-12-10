const cart = {
    customerName: 'Alex',
    totalPrice: 0,
    itemCount: 0
}

cart.items = ['apples', 'bananas', 'cherries']

if (cart.items) {
    cart.itemCount += cart.items.length
    cart.totalPrice = 99.99
}

delete cart.customerName

console.log(cart)
