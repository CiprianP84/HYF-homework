// Smart phone usage app
const activities = [];
const usageLimit = 100; // Usage limit
// Extra functionality for setting goals and following the streak
const usageGoal = 60;
let streak = 0;

// Function to add an activity with automatic date
function addActivity(activity, duration, date = new Date().toLocaleDateString()) {
  activities.push({ date, activity, duration });
}

// Function to show activities and their total duration for today
function showStatus(date = new Date().toLocaleDateString()) {
  const todayActivities = activities.filter(activity => activity.date === date);

  // Checking if activities have been logged first
  if (todayActivities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = todayActivities.reduce((total, activity) => total + activity.duration, 0);
  console.log(`You have added ${todayActivities.length} activities today. They amount to ${totalDuration} min. of usage`);


  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } 
  
  if (totalDuration <= usageGoal) {
    streak++;
    console.log(`Great job! You're on a ${streak}-day streak of staying within your goal.`);
  } else {
    streak = 0;
    console.log("You broke your streak. Try to stay within your goal tomorrow!");
  }
}

// Function to find the activity with the longest duration
function mostTimeSpent() {
  if (activities.length === 0) {
    console.log("Add some activities before calling mostTimeSpent");
    return;
  }

  const { activity, duration } = activities.reduce((max, activity) => (activity.duration > max.duration ? activity : max), activities[0]);
  console.log(`You have spent the most time on: ${activity}, with a total of ${duration} minutes.`);
}

// Testing functionality
addActivity("Youtube", 30);
addActivity("Youtube", 30);
addActivity("Facebook", 20);
addActivity("News", 28);
addActivity("Gaming", 40);

showStatus();
mostTimeSpent();
