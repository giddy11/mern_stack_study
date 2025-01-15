let users = [];
function signup(fullname, email, password) {
  if (fullname.length > 0 && email.length > 0 && password.length > 0) {
    let user = users.find((item) => item.email === email);
    if (user == null) {
      if (fullname.length > 0 && email.length > 0 && password.length > 0) {
        users.push({
          fullname: fullname,
          email: email,
          password: password,
        });
        alert("Successful Sign Up");
      } else {
        alert("Invalid Content");
      }
    } else {
      alert("User Already Exists");
    }
  } else {
    alert("Invalid input");
  }
  //Routing - Moving Page to Page
}
function login(email, password) {
  let user = users.find(
    (item) => item.email === email && item.password === password
  );
  if (user == null) {
    alert("Invalid User Authentication");
  } else {
    alert(`Welcome to mYApp ${user.fullname}`)
    //Routed to a new page
  }
}

export { signup, login };
