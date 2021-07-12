class API {
    static API_DESTINATION_TABLE_URL = "http://127.0.0.1:3000/destinations"
    static fetchAllOurDestinations(){
        fetch(this.API_DESTINATION_TABLE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray); 
            fetchedArray.forEach(destination => { console.log(destination)
                const newDestination = new Destination(destination)
                newDestination.renderDestination(destination)
            })
        })
    }

    
}