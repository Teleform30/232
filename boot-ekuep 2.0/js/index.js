let isBlack = true; // Flag variable to track the current color state

function toggleColors() {
  // Check the current color state
  if (isBlack) {
    // If it's black, change to white
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
  } else {
    // If it's white, change to black
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#FFFFFF";
  }

  // Toggle the flag variable for the next click
  isBlack = !isBlack;
}
