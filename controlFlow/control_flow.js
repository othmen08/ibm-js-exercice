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

let isAuthenticated = false;
let authenticationStatus;

(isAuthenticated) ? authenticationStatus = "Authenticated" : authenticationStatus = "Not authenticated" ;

console.log("Authentication Staus:",authenticationStatus);

let personRole ="Employee";


switch (personRole) {
    case "Employee":
        console.log("you are authorized to have acceess to 'Dietary Services'.")
        break;
        case "Enrolled Membe":
            console.log("you are authorized to have access to Dietary Services and one-on-one interaction with a dietician.")
            break;
            case "Subscriber":
                console.log("you are authorized to have partial access to facilitate Dietary Services only.")
            break;    

    default:
        console.log("you need to enroll or at least subscribe first to avail this facility.")
        break;
}