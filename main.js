const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrganism) {
      let count = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          count++;
        }
      }
      const commonPercentage = (count / this.dna.length) * 100;
      console.log(
        `Specimen #${this.specimenNum} and specimen #${otherOrganism.specimenNum} have ${commonPercentage}% DNA in common.`
      );
    },

    willLikelySurvive() {
      const cGBases = this.dna.filter((base) => base === "C" || base === "G");

      const survivalPercentage = (cGBases.length / this.dna.length) * 100;
      return survivalPercentage >= 60;
    },
  };
};

const pAequorInstances = [];
let idCounter = 1;

while (pAequorInstances.length < 30) {
  const organism = pAequorFactory(idCounter, mockUpStrand());
  if (organism.willLikelySurvive()) {
    pAequorInstances.push(organism);
  }
  idCounter++;
}
//log the array of pAequor instances (30 counts)
console.log(pAequorInstances);
