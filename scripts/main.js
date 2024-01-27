const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello i am mimi perez";

let myImage = document.getElementById('my-image');


myButton.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://i.ibb.co/KjhnkvJ/image.jpg") {
      myImage.setAttribute("src", "images/image2.jpeg");
  } else {
      myImage.setAttribute("src", "https://i.ibb.co/KjhnkvJ/image.jpg");
  }
};


function displayBnnuy() {
    const image = document.getElementById('my-image');
    image.style.display = 'block';
  }
  
  // Event listener for button click to display image
  document.getElementById('bnnuy-button').addEventListener('click', function() {
    displayBnnuy();
  });


let myButton = document.querySelector("button");


