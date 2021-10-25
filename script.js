var fieldValue;

function saveName(){
  //get value from input field and save as a
  fieldValue = document.getElementById("textfield").value;
  //create LS key with value of a
  localStorage.setItem("userName",fieldValue);
  //take user to two.html
  location.href = "two.html"
}
