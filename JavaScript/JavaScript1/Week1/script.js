// Age-ify (A future age calculator)

const yearOfBirth = 1984;
const yearFuture = 2057;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2020;
const dogYearFuture = 2025;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
if (!shouldShowResultInDogYears) {
console.log(`Your dog will be ${dogYear} human years in ${dogYearFuture}.`);
} else {
  dogYear *= 7;
  console.log(`Your dog will be ${dogYear} dog years in ${dogYearFuture}.`);
}

// Housey pricey (A house price estimator)

// We calculate the size of the house:
// House size = width * height * depth

function houseSize(width, height, depth) {
  return width * height * depth;
}

// We save each value in a variable

const houseSizePeter = houseSize(8, 10, 10); 
const houseSizeJulia = houseSize(5, 8, 11);

// We calculate the house price

function houseCost(houseSize, gardenSize) {
  return houseSize * 2.5 * 1000 + gardenSize * 300;
}

// We save the values in a variable

const estimates = [
  { name: "Peter", estimate: houseCost(houseSizePeter, 100) },
  { name: "Julia", estimate: houseCost(houseSizeJulia, 70) }
];

// We compare the costs

function compareCosts(estimatedCost, houseCost) {
  if (estimatedCost > houseCost) {
    console.log(`You have a great deal. The estimated price is: ${estimatedCost}`);
  } else {
    console.log(
      `You are paying more than the estimated price. The estimated price is: ${estimatedCost}`
    );
  }
}

// We save each value in a variable

const compareCostPeter = compareCosts(estimates[0].estimate, 2500000);
const compareCostJulia = compareCosts(estimates[1].estimate, 1000000);

// Ez Namey (Startup name generator) 

// Arrays with possible startup name fragments
const firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Innovative",
  "Tech",
  "Bright",
  "Smart",
  "Future",
  "Quick",
  "Creative"
];

const secondWords = [
  "Solutions",
  "Ventures",
  "Corporation",
  "Labs",
  "Systems", 
  "Enterprises",
  "Technologies",
  "Concepts",
  "Works",
  "Dynamics"
];

// Function to generate a random index between 0 and 9
function getRandomIndex() {
    return Math.floor(Math.random() * 10);
}

// Generate a startup name using random indexes
const randomFirstIndex = getRandomIndex();
const randomSecondIndex = getRandomIndex();
const startupName = firstWords[randomFirstIndex] + " " + secondWords[randomSecondIndex];

// Log the startup name and the number of characters it contains
console.log(`The startup: "${startupName}" contains ${startupName.length} characters`);
