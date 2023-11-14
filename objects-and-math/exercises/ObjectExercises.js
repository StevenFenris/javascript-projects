let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID : 1,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID : 2,
   move: function() {return Math.floor(Math.random()*11)}
};

let chimpBrad = {
   name: "Brad",
   species: "Chimpanzee", 
   mass: 11,
   age: 6,
   astronautID : 3,
   move: function() {return Math.floor(Math.random()*11)}
};

let beagleLeroy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID : 4,
   move: function() {return Math.floor(Math.random()*11)}
};

let moleBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID : 5,
   move: function() {return Math.floor(Math.random()*11)}
};




// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crewArr = [superChimpOne, superChimpTwo, salamander, wonderDog, moleBear];
// Print out the relevant information about each animal.
let crewReport = function(animal){
   console.log(`${animal.name} 
   Species:${animal.species} 
   They are ${animal.age} years old 
   ${animal.mass}kg 
   ID is ${animal.astronautID}`);
}
for(let i=0;i < crewArr.length;i++){
   crewReport(crewArr[i]);
};

// Start an animal race!
let raceTurns = function(animal){
   let steps=0;
   let turns=0;
   while(steps<20){
      steps+= animal.move();
      turns++
   }
return turns;
}

let fitnessTest = function(animalArr){
   let resultsArr =[];
   for(let i=0; i <animalArr.length; i++{ 
      let resultTurns = raceTurns(animalArr[i];
      resultsArr[i] = `${animalArr.name} took ${resultTurns}`;
   }
return resultsArr =[];
}

console.log(fitnessTest(crewArr)); 
