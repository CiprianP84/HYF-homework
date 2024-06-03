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
