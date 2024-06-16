// Flight booking fullname function
function getFullname(firstname, surname, useFormalName = false, gender = "M") {
  if (!firstname || !surname) {
      return "Please provide both firstname and surname.";
  }
  let title = "";
  
  if (useFormalName) {
      if (gender === "M") {
          title = "Lord ";
      } else if (gender === "F") {
          title = "Lady ";
      }
  }
  return `${title}${firstname} ${surname}`;
}
const fullname1 = getFullname("Benjamin", "Hughes");
const fullname2 = getFullname("Emily", "Brown", true, "F");
console.log(fullname1);
console.log(fullname2);

//Event application
function getEventWeekday(daysFromToday) {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const today = new Date();
  const todayDayIndex = today.getDay();
  const eventDayIndex = (todayDayIndex + daysFromToday) % 7;
  const eventDay = weekdays[eventDayIndex];
  console.log(eventDay);
  return eventDay;
}
// Testing the function
console.log(getEventWeekday(9));
console.log(getEventWeekday(2));
