//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//a String representing the studio, and a String representing the rating as its arguments, 
//and sets the respective class properties to these values.

class movie {
    constructor (title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const obj = new movie ("Leo","7 Screen studio", "7.5");
console.log(obj.title, obj.studio, obj.rating);

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie1 {
    constructor (title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = `PG${rating}`;   
    }
}
const object = new Movie1 ("Leo", "7 Screen Studio");
console.log(object.title,object.studio,object.rating);

//c) Write a method getPG, which takes an array of base type Movie as its argument,
// and returns a new array of only those movies in the input array with a rating of "PG". 
//You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie2 {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let mov1 = new Movie2("Thunivu", "Zee studios", "PG");
let mov2 = new Movie2("Varisu", "Sri Venkateswara Creations", "V");
let mov3 = new Movie2("Kantara", "KRG Studios", "PG");
let mov4 = new Movie2("Vikram", "Raj kamal films", "PG-13");
let mov5 = new Movie2("veeram", "Vijaya production", "PG");

let movieArray = [mov1, mov2, mov3, mov4, mov5];
let pgMovies = Movie2.getPG(movieArray);
console.log(pgMovies);

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

class Movie3 {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getMovieDetails() {
        console.log("The Movie name is", this.title);
    }
    getStudioDetails() {
        console.log("The Studio name is", this.studio);
    }
    getRatingDetails() {
        console.log("Rating is", this.rating);
    }
    getOverallDetails() {
        console.log(`
        Title : ${this.title}
        Studio : ${this.studio}
        Rating : ${this.rating}
        `);
    }
}
const Moviedetails = new Movie3 ("Casino Royale","Eon Productions", "PG13");
console.log(Moviedetails);

//Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let object1 = new Circle(1.0,"red") 
console.log(object1.Color);
console.log(object1.Radius);
console.log(object1.toString);
console.log(object1.area.toFixed(2));
console.log(object1.circumference.toFixed(2));
object1.Radius=3.5
console.log(object1.Radius);
object1.Color="green"
console.log(object1.Color);

// Write a “person” class to hold all the details.

class Person {
    constructor (name, age, gender, qualification, contactno, email){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.qualification = qualification;
        this.contactno = contactno;
        this.email = email;

    }
}
const object2 = new Person ("Emmanuel","37","Male","BBA",83458045,"emmanuel2023@gmail.com");
console.log(object2.name, object2.age, object2.gender, object2.qualification, object2.contactno, object2.email);

//write a class to calculate the Uber price.
const uberprice = {
    set kiloMeter (km,){    
       this.price = `${km} km = Rs.${km * 50}` ;
    },
    get kiloMeter(){
       return this.price;
    }
}

uberprice.kiloMeter = (2);
console.log(uberprice);