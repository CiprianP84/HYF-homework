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

// We save each value in a variable

const estimatePeter = houseCost(houseSizePeter, 100);
const estimateJulia = houseCost(houseSizeJulia, 70);


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

const compareCostPeter = compareCosts(estimatePeter, 2500000);
const compareCostJulia = compareCosts(estimateJulia, 1000000);