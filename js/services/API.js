class API {
    static API_DESTINATION_TABLE_URL = "http://127.0.0.1:3000/destinations" //static is class level declaration
    static fetchAllOurDestinations(){
        fetch(this.API_DESTINATION_TABLE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray); 
            fetchedArray.forEach(destinationObj => { console.log(destinationObj)
                const newDestination = new Destination(destinationObj)
                newDestination.renderDestination(destinationObj)
            })
        })
    }

    static API_RESTAURANT_TABLE_URL = "http://127.0.0.1:3000/restaurants" //static is class level declaration
    static fetchAllOurRestaurants(){
        fetch(this.API_RESTAURANT_TABLE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray); 
            fetchedArray.forEach(restaurantObj => { console.log(restaurantObj)
                const newRestaurant = new Restaurant(restaurantObj)
                newRestaurant.renderRestaurant(restaurantObj)
            })
        })
    }
}