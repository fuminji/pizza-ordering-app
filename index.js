import { menuArray } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const menuPreview = document.getElementById('menu')
const listOrder = document.getElementById('list-order')

let orderList = []
let total = 0;

menuPreview.addEventListener('click', (e) => order(e))
listOrder.addEventListener('click', (e) => remove(e))



function order(e) {
    if (e.target.id.includes('addBtn-')){
        const item = menuArray.find((menuItem) => `addBtn-id${menuItem.id}` === e.target.id)
        orderList.push({ ...item, uuid: uuidv4(), quantity: 1})
        getOrderListHtml()
    }
}

function remove(e) {
    if (e.target.id.includes('removeBtn-id')) {
        const itemToRemove = orderList.find((menuItem) => `removeBtn-id${menuItem.uuid}` === e.target.id)
        orderList = orderList.filter((items) => items.uuid !== itemToRemove.uuid)
        getOrderListHtml()
    }
}


function getOrderListHtml (){
    let orderListHtml = '<h2>Your Order</h2>'

        orderList.forEach((menuChoice) => {
            orderListHtml += `
            <div class="order-summary" id="lineItem-id${menuChoice.id}">
                <p>${menuChoice.name} x${menuChoice.quantity}</p>
                <button class="removeBtn" id="removeBtn-id${menuChoice.uuid}">remove</button>
                <p class="prices"> $${menuChoice.price}</p>
            </div>
            `
            total += menuChoice.price
        })

        orderListHtml += `
        <div class="order-summary border">
            <p>Total Price:</p>
            <p class="prices">$${total}</p>
        </div>
        <div>
            <button class="completeOrder">
                Complete order
            </button>
        </div>
        `
        listOrder.innerHTML =  orderListHtml
        total = 0
}

function getMenuHtml(){
    let menuHtml = ''
    menuArray.map(function(items){
        menuHtml += `
        <div class="menu-container">
            <div>
                <img src="${items.img}" alt="${items.name}">
            </div>
            <div class="details">
            <p>${items.name}</p>
            <p class="ingredients">${items.ingredients.join(', ')}</p>
            <p>$${items.price}</p>
            </div>
            <button class="add-order" id="addBtn-id${items.id}">
                +
            </button>
        </div>`
    })
    return menuHtml
};

function render() {
    menuPreview.innerHTML = getMenuHtml()
};

render()