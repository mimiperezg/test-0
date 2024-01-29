let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello friend, you are invited to Mimi's birthday party";

let myImage = document.getElementById('my-bnnuy');
let myButton = document.querySelector("button");

myButton.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://i.ibb.co/KjhnkvJ/image.jpg") {
    myImage.setAttribute("src", "images/image.jpeg");
  } else {
    myImage.setAttribute("src", "https://i.ibb.co/KjhnkvJ/image.jpg");
  }
}; 

function displayBnnuy() {
  const image = document.getElementById('my-bnnuy');
  image.style.display = 'block';
}

// Event listener for button click to display image
document.getElementById('bnnuy-button').addEventListener('click', function() {
  displayBnnuy();
});

// Separate function for myInvite button
function setUserName() {
  let myName = prompt('Enter your name:');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello ' + myName + ', you are invited to mimi\'s birthday party';
  }
}

// Call setUserName function when the page loads
window.onload = function() {
  setUserName();
};