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

// Weather wear
function whatToWear(temperature) {
  if (temperature < -20) {
    console.log("Stay at home, it's too cold to be outside!")
  } else if (temperature < 0) {
    console.log("Wear a thick coat, gloves, and a hat.")
  } else if (temperature < 10) {
    console.log("Wear a coat and gloves.")
  } else if (temperature < 20) {
    console.log("Wear a jacket, it's still chilly")
  } else if (temperature < 30) {
    console.log("Wear a t-shirt, it's warm!");
  } else {
    console.log("Wear shorts, it's hot!");
  }
}
whatToWear(12);

// Student manager
const class07Students = [];

function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("Name and last name of the student required");
        return;
    }
    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
        return;
    }
    if (studentName === "Queen") {
        class07Students.push(studentName);
        console.log(`Student ${studentName} added to the class`);
        return;
    }
    if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
        return;
    }
    class07Students.push(studentName);
    console.log(`Student ${studentName} added to the class`);
}
function getNumberOfStudents() {
    return class07Students.length;
}

// Trying the function
addStudentToClass("Gert");
addStudentToClass("Ross");
addStudentToClass("Jake");
addStudentToClass("Lucy");
addStudentToClass("Barbara");
addStudentToClass("Eric");

// Check if you can add more than 6
addStudentToClass("John");

// Add a student that is already in the class
addStudentToClass("Tim");

// Add the Queen to a full class
addStudentToClass("Queen");

// Add another student after adding the Queen
addStudentToClass("Bailey");

console.log(`Number of students in the class: ${getNumberOfStudents()}`);
