let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello friend you are invited mimis birthday party";

let myImage = document.getElementById('my-bnnuy');
let myInvite = document.getElementById('my-invite');

myButton.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://i.ibb.co/KjhnkvJ/image.jpg") {
      myImage.setAttribute("src", "images/image2.jpeg");
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
  let myName = prompt('ur name plz');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello ' + myName + ' you are invited mimis birthday party';
  }
}

// Event listener for myInvite button click
myInvite.onclick = function() {
  setUserName();
}

// Call setUserName function when the page loads
window.onload = function() {
  setUserName();
};