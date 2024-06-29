// Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// First we need to find which index to remove
const findIndex = names.indexOf(nameToRemove);
// Then we remove that index from an array
names.splice(index, 1);

console.log(names);


// When will we be there?
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(speed, distance) {
  const timeInHours = distance / speed;
  
  // Get the whole hours and the remaining minutes
  const hours = Math.floor(timeInHours);
  const minutes = Math.round((timeInHours - hours) * 60);
  
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation.speed, travelInformation.destinationDistance);
console.log(travelTime);


// Series duration of my life
const seriesDurations = [
  {
    title: "The Big Bang Theory",
    days: 28,
    hours: 8,
    minutes: 45,
  },
  {
    title: "Brooklyn Nine-Nine",
    days: 14,
    hours: 16,
    minutes: 20,
  },
  {
    title: "Friends",
    days: 9,
    hours: 22,
    minutes: 10,
  },
];

function logOutSeriesText() {
    const averageLifeSpan = 80;
    const averageLifeSpanInMinutes = averageLifeSpan * 365 * 24 * 60
    let totalPercentageOfLifeSpentWatchingShows = 0;

    seriesDurations.forEach(series => {
    const totalMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes;
    const totalHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;
    const percentageOfLifeSpentWatching = (totalMinutes / averageLifeSpanInMinutes) * 100;
    totalPercentageOfLifeSpentWatchingShows += percentageOfLifeSpentWatching;

    console.log(
      `You spent ${totalHours} hours and ${remainingMinutes} minutes watching ${series.title}.
      ${series.title} took ${percentageOfLifeSpentWatching.toFixed(2)}% of my life`
    );
  });
  console.log(`In total that is ${totalPercentageOfLifeSpentWatchingShows.toFixed(2)}% of my life`);

}
logOutSeriesText();
