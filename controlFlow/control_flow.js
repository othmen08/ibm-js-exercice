let userRole = "admin";
let accesslevel;

if (userRole === "admin") {
  accesslevel = "Full access granted";
} else if (userRole === "manager") {
  accesslevel = "Limited access granted";
} else {
  accesslevel = "No access granted";
}

console.log("Access level:", accesslevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
  if (userRole === "admin") {
    userMessage = "Welcome Admin!";
  } else {
    userMessage = "Welcome User!";
  }
} else {
  userMessage = "Please Log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
  case "admin":
    userCategory = "Adminidtator";
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

console.log("User Category:", userCategory);
