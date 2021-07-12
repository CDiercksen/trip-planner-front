console.log("restaurant.js working?")

class Restaurant{

    static all = []

    constructor({id, name, image, restaurant_id}){
        this.id = id,
        this.name = name,
        this.image = image

        Restaurant.all.push(this)
    }
    makeACard =()=>{console.log(this)
        return `
        <h2 id="coolbean" data-id="${this.id}">${this.name}</h2>
        <img src=${this.image} class="restaurant-icon" />
        `
    }

    renderRestaurant =(restaurant)=> {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        cardDiv.setAttribute("data-id", restaurant.id)
        cardDiv.id = restaurant.id
        cardDiv.innerHTML = this.makeACard()

        const collectionDiv = document.querySelector("#restaurant-collection")
        collectionDiv.append(cardDiv)
    }
}