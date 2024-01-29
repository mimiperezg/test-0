let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello you are invited mimis birthday party, friend";

let myImage = document.getElementById('my-bnnuy');
let myButton = document.querySelector("button");
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
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello you are invited mimis birthday party, ' + myName;
  }
}

// Event listener for myInvite button click
myInvite.onclick = function() {
  setUserName();
}