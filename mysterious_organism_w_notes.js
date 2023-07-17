/*-----This version of js file is working canvas with lots of notes, primarily for my future self :)-----*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
  //this line of code generates a random number between 0 and 3, uses it as an index to access an element from the dnaBases array, and returns that element as the result of the returnRandBase function.
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  //This array will store the DNA bases of the generated DNA sequence.
  for (let i = 0; i < 15; i++) {
    //sets up a loop that iterates 15 times, starting from 0 and incrementing i by 1 in each iteration.
    //for loop is responsible for generating the 15 DNA bases of the DNA sequence.
    newStrand.push(returnRandBase());
    //within each iteration of the loop, the returnRandBase function(which generates a random DNA base) is called, then appends it to the newStrand array using the push method.
    //Each time the loop iterates, the newStrand.push(returnRandBase()) line is executed. It calls the returnRandBase function, which generates a random DNA base, and appends the generated base to the newStrand array using the push method.
    //This process is repeated 15 times, as specified by the loop condition i < 15, resulting in 15 random DNA bases being added to the newStrand array.
  }
  return newStrand;
  //After the loop finishes, returns the newStrand array, which now contains the randomly generated DNA sequence of 15 bases.
};

const dnaSequence = mockUpStrand();
console.log(dnaSequence);
//to test my code and generate a random DNA sequence, I call the mockUpStrand function and log the output by the variable I saved the output within.

//To create objects representing P.aequor using returnRandBase and mockUpStrand, here below a factory function was defined. 'pAequorFactory' function take two parameters: 'specimenNum' (a number) and 'dna' (an array of 15 DNA bases). It returns an object that contains the properties 'specimenNum' and 'dna' with values corresponding to the provided parameters.
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      //Inside the 'mutate' method, a 'randomIndex' variable is declared and assigned a random number. 'Math.random()' generates a random number between 0 and 1, which is then multiplied by the length of the 'this.dna' array using 'this.dna.length'. 'Math.floor()' is used to round down the result to the nearest whole number.
      let newBase = returnRandBase();
      //A newBase variable is declared and assigned the value returned by calling the returnRandBase function. This function generates a random DNA base ('A', 'T', 'C', or 'G').
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      //A while loop is used to ensure that the randomly selected base is different from the current base at randomIndex in the this.dna array. The loop continues as long as the base at randomIndex is the same as newBase. Inside the loop, a new random base is generated and assigned to newBase.

      this.dna[randomIndex] = newBase;
      //Once a different base is found, it is assigned to the randomIndex position of the this.dna array using the assignment operator (=).

      return this.dna;
      //Finally, the this.dna array is returned from the mutate method.
    },

    //add a new method '.compareDNA()' to the returned object of the factory function. This '.compareDNA()' method takes another 'pAequor' object as a parameter.
    compareDNA(otherOrganism) {
      let count = 0;
      //iterate over the DNA sequences of the two 'pAequor' objects, using a 'for' loop. Compare the bases at each index and increment the 'count' variable whenever there is a match.
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          count++;
        }
        //after counting the number of matching cases, calculate the common percentage by dividing the 'count' by the length of the DNA sequence ('this.dna.length') and multiplying it by 100.
      }
      const commonPercentage = (count / this.dna.length) * 100;
      console.log(
        `Specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${commonPercentage}% DNA in common.`
      );
      //Finally, we log a message, that includes the specimen numbers ('.specimenNum') to identify which pAequor objects are being compared and the computed percentage of DNA the two objects have in common.
    },
    //to the returned obect of the 'pAequorFactory()' function, add the '.willLikelySurvive()' method, that checks if the DNA sequence contains at least 60% of 'C' or 'G' bases.
    willLikelySurvive() {
      //inside of this method, use '.filter()' to create a new array containing only 'C' and 'G' bases from the DNA sequence('this.dna'), then get the length of this filtered array(we'll call this new array 'cGBases').
      const cGBases = this.dna.filter((base) => base === "C" || base === "G");
      //calculate the percentage of 'C' and 'G' bases in the DNA sequence by diving 'cGBases' by the length of the DNA sequence and multiplying it by 100('survivalPercentage).
      const survivalPercentage = (cGBases.length / this.dna.length) * 100;
      //Finally, return 'true' if the 'survivalPercentage' is greater than or equal to 60, indicating that the organism is likely to survive. Otherwise, return 'false', meaning not likely to survive.
      return survivalPercentage >= 60;
    },
    //this meets the statement of the assignment that P.aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'Gi bases.
  };
};

// Create an instance of pAequor
const organism = pAequorFactory(1, mockUpStrand());
// Log the initial DNA sequence
console.log("Initial DNA:", organism.dna);
// Mutate the DNA sequence
const mutatedDNA = organism.mutate();
// Update the dna property with the mutated DNA sequence
organism.dna = mutatedDNA;
// Log the updated DNA sequence
console.log("Updated DNA:", organism.dna);

//to test '.compareDNA()' method, you can create two instances of 'pAequor' and call the method on one instance while passing the other instances as an argument.

// Create two instances of pAequor
const organism1 = pAequorFactory(1, mockUpStrand());
const organism2 = pAequorFactory(2, mockUpStrand());

// Compare the DNA sequences of the two organisms
organism1.compareDNA(organism2);

//to test the '.likelyToSurvive()' method, create an instance of 'pAequor' and call the method.

//create 30 instances of 'pAequor' that can survive in their natual environment and store them in an array. Then, use a loop to generate the instances and push them into the array.
//create an empty array to store the instances of 'pAequor' organisms. We'll call this 'pAequorInstances', and this array should hold 30 instances of 'pAequor'
const pAequorInstances = [];
let idCounter = 1;
//initializes a variable 'idCounter' to keep track of the specimen number for each organism. It starts from 1.
while (pAequorInstances.length < 30) {
  //'while (pAequorInstances.length < 30)' sets up a 'while' loop that continues as long as the length of 'pAeqourInstances' array is less than 30. This ensures that we create a total of 30 organisms.
  const organism = pAequorFactory(idCounter, mockUpStrand());
  //creates a new organism, using the 'pAequorFactory' function. It assigns a specimen numbers to the organism, using the current value of 'idCounter', and generates its DNA sequence, using the 'mockUpStrand' function.
  if (organism.willLikelySurvive()) {
    pAequorInstances.push(organism);
  }
  idCounter++;
}
//'if(organism.willLikelySurvive())' checks if the organism is likely to survive by calling the 'willLikelySurvive' method on the organism. If it returns 'true', the organism is considered liekly to survive, and adds the organism to the 'pAequorInstances' array.
//'idCounter++;' increments the 'idCounter' by 1, ensuring that the next organism created will have a unique specimen number.
//The loop continues until 'pAequorInstances' array has 30 organisms that are likely to survive.

//log the array of pAequor instances (contains 30 counts that are likely to survive).
console.log(pAequorInstances);

//special note about 'idCounter' variable -
//Unique Specimen Number: The pAequorFactory function accepts two parameters: specimenNum and dna. The specimenNum parameter represents the specimen number of the organism. In order to ensure that each organism has a unique specimen number, the idCounter variable is introduced.
//Incrementing Specimen Number: The idCounter variable starts with a value of 1 and is incremented by 1 (idCounter++) each time a new organism is created. This ensures that each organism has a different and incrementing specimen number.
//Assignment of Specimen Number: When creating a new organism using pAequorFactory, the current value of idCounter is passed as the specimenNum argument. This assigns a unique specimen number to each organism.
