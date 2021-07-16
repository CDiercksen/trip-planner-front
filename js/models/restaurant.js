console.log("restaurant.js working?")

class Restaurant{

    static all = []

    constructor({id, name, image, restaurant_id}){
        this.id = id,
        this.name = name,
        this.image = image

        Restaurant.all.push(this)
    }
    makeACard =()=>{
        return `
        <h2 id="coolbean" data-id="${this.id}">${this.name}</h2>
        <img src=${this.image} class="restaurant-icon" />
        `
    }

    renderRestaurant =()=> {
        console.log(this.name)
        const bigboy = document.getElementById("BigBoy")
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        cardDiv.setAttribute("data-id", this.id)
        cardDiv.id = `restaurant-${this.name}`
        bigboy.appendChild(cardDiv)
        cardDiv.innerHTML = this.makeACard()

        // const collectionDiv = document.getElementById("BigBoy")
        // collectionDiv.appendChild(cardDiv)
    }
}