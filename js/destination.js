console.log("destination.js working?")

class Destination{


    static all = []


    //  This is What We Use When We Do:   { * } = new Destination({*})
    constructor({id, name, image, }){
    // constructor({name, image, }){
        //  With Destructuring 
        //  * * * *  ATTRIBUTES SHOULD BE PASSED IN THE SAME ORDER AS IN JSON DATA/TABLE/ECT--
                //   ***  Show Without Passing in a Whole Object  ***
                    //    Without Destructuring 
                   

            this.id = id
        this.name = name,
        this.image = image

        Destination.all.push(this)
        //  Destination.all[]  <<  this  ~  @Destination

    }

// Destination.all = []
// //Contructor - HoverOver
// function Destination(name, image){
    
//         this.name = name
//         this.image = image

//     Destination.all.push(this)
// }

// const NewYork = new Destination("New York", "https://ca.slack-edge.com/T02MD9XTF-U01CA1HPEA1-g30a7a74eced-512")
}