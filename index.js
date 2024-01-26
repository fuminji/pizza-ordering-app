import { menuArray } from './data.js'

const orderSummaryStatus = true
const orderList = []
const total = 0;


addEventListener('click', function(e){
    if (e.target.dataset.add){
        addToCart(e.target.dataset.add)
    }

    if (e.target.dataset.remove){
        removeToCart(e.target.dataset.remove)
    }
})

function toggleListOfOrder (){
    document.getElementById('list-order').classList.toggle('hidden')
    orderSummaryStatus = false
}

function addToCart (ItemToAddCart){
    const targetItem = menuArray.filter(function(menuItem){
        return menuItem.uuid === ItemToAddCart
    })[0]
    orderList.push(targetItem)
    render()
}

function removeToCart (itemToRemove) {
    let index = orderList.findIndex(menuItem => menuItem.id === itemToRemove)
    orderList.splice(index, 1)
    render()
}

function getOrderListHtml (){
    let orderListHtml = ``
        orderList.forEach(function(ItemInList){
            orderListHtml += `
            <div class="order-summary">
                <p>${ItemInList.name}</p>
                <button id="${ItemInList.uuid}" data-remove="${ItemInList.uuid}">remove</button>
                <p class="prices"> $${ItemInList.price}</p>
            </div>
            `
        })
        return orderListHtml
}


function getMenuHtml(){
    let menuHtml = ''
    menuArray.map(function(item){
        menuHtml += `
        <div class="menu-container">
            <div>
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="details">
            <p>${item.name}</p>
            <p class="ingredients">${item.ingredients}</p>
            <p>$${item.price}</p>
            </div>
            <button class="add-order" id="${item.uuid}" data-add="${item.uuid}">
                +
            </button>
        </div>`
    })
    return menuHtml
};

function render() {
    document.getElementById('menu').innerHTML = getMenuHtml()
    document.getElementById('orders').innerHTML = getOrderListHtml ()
};

render()