import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        img: `imgs/pizza.png`,
        uuid: uuidv4(),
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        img: `imgs/burger.png`,
        price: 12,
        emoji: "🍔",
        uuid: uuidv4()
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        img: `imgs/beer.png`,
        price: 12,
        emoji: "🍺",
        uuid: uuidv4()
    }
]

