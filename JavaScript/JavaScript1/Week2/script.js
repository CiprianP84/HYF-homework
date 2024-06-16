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

