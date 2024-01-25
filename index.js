import { menuArray } from './data.js'




addEventListener('click', function(e){
    switch(e.target.id){
        case '0':
            currentObj(e.target.id)
        break;
        case '1':
            console.log('Pizza')
        break;
        case '2':
            console.log('Pizza')
        break;
        default:
    }
})

function currentObj(item){
    const {name, price} = item
    let listHtml = ''
    
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
            <button class="add-order" id="${item.id}">
                +
            </button>
        </div>`
    })
    return menuHtml
};

function render() {
    document.getElementById('menu').innerHTML = getMenuHtml()
};

render()