let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
  accessLevel = "Full access granted";
} else if (userRole === "manger") {
  accessLevel = "Limited access granted";
} else {
  accessLevel = "No acces granted";
}

console.log("Access Level;",accessLevel);

let isLoggedIn = true;
let userMessage;

if ( isLoggedIn) {
  if (userRole === "admin") {
    userMessage = "Welcome, Admin!";
  } else {
    userMessage = "Welcome, User!";
  }
} else {
   userMessage = "Please log in to access the system.";
}

console.log("User Message:",userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
  case "admin":
    userCategory = "Administrator";
    break;
  case "manager":
    userCategory = "Manager";
    break;
  case "subscriber":
    userCategory = "Subscriber";
    break;
  default:
    userCategory = "Unknown";
}

console.log("User Category;", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let userAccess = "Employee"
let accesscode;

if ( userAccess === "Employee") {
  accesscode = "Dietary Services";
} else if ( userAccess = "Enrolled Member") {
  accesscode = "Dietary Services and one-on-one interaction";
} else if ( userAccess = "Subscriber") {
  accesscode = "Partial acces to Dietary Services";
} else if ( userAccess = "Non-Subscriber") {
  accesscode = "Enroll / subscribe";
}

console.log("Accescode;",accesscode);