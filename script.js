var a;

function getName(){
  //get value from input field and save as a
  a = document.getElementById("username").value;
  //create LS key with value of a
  localStorage.setItem("uName",a);
  //take user to two.html
  location.href = "two.html"
}

function getUser(){
  var b = localStorage.getItem("uName");
  document.getElementById("placeholder").innerHTML = "Hello " +b;
}
