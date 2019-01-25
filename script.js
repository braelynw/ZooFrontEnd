var animalPopulation = 0;


$(document).ready(function() {


    var tigger = new Tiger("Tigger");
    var rarity = new Unicorn("Rarity");
    var pooh = new Bear("Pooh");
    var gemma = new Giraffe("Gemma");
    var stinger = new Bee("Stinger");

    allAnimals = [tigger, pooh, rarity, gemma, stinger];


    $("#create").click(function(){
        createAnimal();
    });

    $("#feed").click(function(){
        feedAnimals();
    });

    listAnimals();
    deleteAnimal(this);


});



function createAnimal(){
    var animalType = $("#animalBox").val();
    var bank = $("#creation").val();
    var animal;

    if (bank.length == 0){
        bank = "Unnamed";
    }

    switch(parseInt(animalType)){
        case 0:
            break;
        case 1:
            animal = new Tiger(bank);
            break;
        case 2:
            animal = new Bear(bank);
            break;
        case 3:
            animal = new Unicorn(bank);
            break;
        case 4:
            animal = new Giraffe(bank);
            break;
        case 5:
            animal = new Bee(bank);
            break;

    }


    allAnimals.push(animal);
    console.log(animal);

    if (animal.name == ""){
        $("#action").append( "Unnamed " + animal.constructor.name + "<br>");
    }

    listAnimals();

}



function feedAnimals(){
        var food = $("#foodBox option:selected").text();

        for (var i=0; i<allAnimals.length; i++){
            allAnimals[i].eat(food);
        }

        console.log(food);
}


function listAnimals(){
    for(var i=0; i<allAnimals.length; i++){
        console.log(allAnimals[i]);
    }
    $("#send").empty();

    for (var i=0; i<allAnimals.length; i++){
        $("#send").append("<br><div onclick='deleteAnimal(this.id)' id='" + allAnimals[i].name + "'>" + allAnimals[i].name + " the " + allAnimals[i].constructor.name +
            "<br>" + "Favorite Food: " + allAnimals[i].favoriteFood + "<br></div>");
    }

}



function deleteAnimal(name){
    for(var i=0; i<allAnimals.length; i++){
        if(allAnimals[i].name == name){
            $("#action").append(allAnimals[i].name + " was deleted" + "<br>");
            allAnimals.splice(i, 1);


        }
    }


    listAnimals();

}



class Animal {

    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    static getPopulation() {
        return animalPopulation;
    }

    sleep() {
        $("#action").append(this.name + " sleeps for 8 hours" + "<br>");

    }

    eat(food) {
        $("#action").append(this.name + " eats " + food + "<br>");
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }


}

class Tiger extends Animal{

    constructor(name) {
        super(name, "Meat");
        this.name = name;
        this.favoriteFood = "Meat";

    }

    sleep() {
        $("#action").append(this.name + " sleeps for 8 hours" + "<br>");

    }

    eat(food) {
        $("#action").append("<br>" + this.name + " eats " + food + "<br>");
        food == this.favoriteFood ? $("#action").append("YUM!!! " + this.name + " wants more " + food + "<br>") : this.sleep();
    }

}


class Bear extends Animal{

    constructor(name){
        super(name, "Fish");
        this.name = name;
        this.favoriteFood = "Fish";

    }

    eat(food){
        $("#action").append(this.name + " eats " + food + "<br>");
        if(food == this.favoriteFood) {
            $("#action").append("YUM!!! " + this.name + " wants more " + food +"<br>");
        } else {
            this.sleep();
        }


    }

    sleep(){
        $("#action").append(this.name + " hibernates for 4 months" + "<br>");
    }
}

class Unicorn extends Animal{

    constructor(name){
        super(name, "Marshmallows");
        this.name = name;
        this.favoriteFood = "Marshmallows";

    }

    eat(food) {
        $("#action").append(this.name + " eats " + food + "<br>");
        if (food == this.favoriteFood) {
            $("#action").append("YUM!!! " + this.name + " wants more " + food + "<br>");
            this.sleep();
        } else {
            this.sleep();
        }
    }

    sleep(){
        $("#action").append(this.name + " sleeps in a cloud" + "<br>");
    }
}

class Giraffe extends Animal{

    constructor(name){
        super(name,'Leaves');
        // this.name = name;
        // this.favoriteFood = "leaves";

    }

    eat(food){
        if (food == this.favoriteFood){
            $("#action").append(this.name + " eats " + food + "<br>");
            $("#action").append("YUM!!! " + this.name + " wants more " + food + "<br>");
            this.sleep() ;
        }else{
            $("#action").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
        }
    }

    sleep(){
        $("#action").append(this.name + " sleeps for 8 hours" + "<br>");
    }
}

class Bee extends Animal{

    constructor(name){
        super(name,'Pollen');
        // this.name = name;
        // this.favoriteFood = "pollen";

    }

    eat(food){
        if (food == this.favoriteFood){
            $("#action").append(this.name + " eats " + food + "<br>");
            $("#action").append("YUM!!! " + this.name + " wants more " + food + "<br>");
            this.sleep() ;
        }else{
            $("#action").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
        }


    }

    sleep(){
        $("#action").append(this.name + " never sleeps" + "<br>");
    }
}


class Zookeeper {

    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        $("#action").append(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals." + "<br>");
        for (var i=0; i< animals.length; i++){
            animals[i].eat(food);
        }
    }
}