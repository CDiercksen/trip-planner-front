console.log("destination.js working?")

class Destination{


    static all = []


    constructor({id, name, image }){
    // constructor({name, image, }){
        //  With Destructuring 
        //  * * * *  ATTRIBUTES SHOULD BE PASSED IN THE SAME ORDER AS IN JSON DATA/TABLE/ECT--
                //   ***  Show Without Passing in a Whole Object  ***
                    //    Without Destructuring 
                   

            this.id = id,
        this.name = name,
        this.image = image

        Destination.all.push(this)
        //  Destination.all[]  <<  this  ~  @Destination

    }
    
    makeACard =()=>{console.log("make a card")
        return `
        <h2 id="coolbean" data-id="${this.id}">${this.name}</h2>
        `
        // <img src=${this.image} class="destination-icon" />
    }
//addEventListener(onClick render image, and list of restaurants)
    renderDestination =(destination)=> {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        cardDiv.setAttribute("data-id", destination.id)
        cardDiv.id = destination.id
        cardDiv.innerHTML = this.makeACard()
        
        const collectionDiv = document.getElementById("BigBoy")
        collectionDiv.appendChild(cardDiv)

        cardDiv.addEventListener('click', e => {
            this.getRestaurants()
        })
    }


getRestaurants =()=> {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card")
    fetch(`http://localhost:3000/destinations/${this.id}/restaurants`).then(resp=>resp.json())
    .then(fetchedArray => { console.log(""); 
            fetchedArray.forEach(restaurantObj => { console.log(restaurantObj)
                const newRestaurant = new Restaurant(restaurantObj)
                newRestaurant.renderRestaurant()
            })
        })
}
}