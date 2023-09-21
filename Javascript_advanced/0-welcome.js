function welcome(firstName, lastName) {
var fullName = firstName +" "+ lastName;
    // helper nested function to use below
    function displayFullName() {
      alert("welcome"+" "+fullName); 
    }
  }
  displayFullName();