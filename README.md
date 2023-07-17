# Mysterious Organism

## Technologies Used

- JavaScript

## Project Goal

> ### Context:
>
> A research team has found a new mysterious organism, Pila aequor (P. aequor). Create objects that simulate the DNA of P. aequor for the research team to study.
>
> ### Description:
>
> Create objects that simulate the DNA of a mysterious organism called Pila aequor (P. aequor). This organism is found at the bottom of the ocean near hydrothermal vents and has some _unique_ properties:
>
> 1.  It is comprised of only 15 DNA bases.
> 2.  It mutates frequently due to the conditions near hydrothermal vents.
> 3.  It cannot survive above sea level.
> 4.  Locating P. aequor in the deep sea is difficult and expensive.

---

## Project Requirements:

### Provided Steps:

To study P. aequor, we need to simulate its DNA for research purposes. In order to do that, we need to create JavaScript code that generates random DNA sequences matching the properties of P. aequor:

- a function that returns a random DNA base ('A', 'T', 'C', or 'G').
  =>
  **returnRandBase** function

- another function that generates a random DNA sequence of 15 bases by calling the first function 15 times.
  => **mockUpStrand** function

returnRandBase and mockUpStrand functions are provided by Codecademy as helper functions.

To test the two helper functions and generate a random DNA sequence, call the mockUpStrand function and log the output. It generates a DNA sequence that is an array containing the 15 randomly generated DNA bases and print it to the console.

---

### Challenged Steps:

1. Create a factory function called **'pAequorFactory()'** that takes two parameters: a unique number and an array of 15 DNA bases.
2. Inside the **'pAequorFactory()'** function, create an object with properties **'specimenNum'** and **'dna'** corresponding to the provided parameters.
3. Add a method called **'.mutate()'** to the returned object. This method should randomly select a base from the **'dna'** property and change it to a different base, ensuring it's not the same as the original.
4. Implement a method called **'.compareDNA()'** in the returned object. This method should compare the current object's **'dna'** with another **'pAequor'** object's **'dna'** and compute the percentage of identical bases in the same locations. Print a message with the percentage of DNA the two objects have in common, using the **'specimenNum'** to identify them.
5. Add another method called **'.willLikelySurvive()'** to the returned object. This method should return **'true'** if the **'dna'** array contains at least 60% 'C' or 'G' bases, and **'false'** otherwise.
6. Create 30 instances of **'pAequor'** using the **'pAequorFactory()'** function. Ensure that these instances can survive in their natural environment by checking if they will likely survive using the **'.willLikelySurvive()'** method. Store these instances in an array for further study by your team.

---

## Next Steps

(Planned Future Enhancements)

- Add a method called **'.complementStrand()'** to the factory function's object. This method should return the complementary DNA strand, following the rule that 'A's match with 'T's and 'C's match with 'G's.
- Utilize the **'.compareDNA()'** method to compare the DNA of different instances of pAequor.
- Identify the two most related instances of pAequor based on the results of the **'.compareDNA()'** method.

---

##### Created as a project in the Front-End Engineer Career Paths course at Codecademy By Eunji Lee, 2023
