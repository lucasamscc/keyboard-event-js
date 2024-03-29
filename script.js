// Declare and assign variables.
let object1Size = {
  width: 20,
  height: 20
};
let position = {
  x: 10,
  y: 10
};
let moveRate = 10;
let object1 = document.getElementById("object1");

// Update y-axis position.
function updateYPosition(distance) {
  position.y = position.y - distance;
// Update y-axis position at the edge.
  if (position.y < 0) {
    position.y = 499;
  } else if (position.y > 499) {
    position.y = 0;
  }
}
// Update x-axis position.
function updateXPosition(distance) {
  position.x = position.x + distance;
  // Update x-axis position at the edge.
  if (position.x < 0) {
    position.x = 499;
  } else if (position.x > 499) {
    position.x = 0;
  }
}

function refreshPosition() {
  let x = position.x - (object1Size.width/2);
  let y = position.y - (object1Size.height/2);
  let transform = "translate(" + x + " " + y + ")";

  object1.setAttribute("transform", transform);
}

window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented) {
    return;
  }
  if (event.code === "ArrowDown"){
      // Handle "down"
      updateYPosition(-moveRate);
  } else if (event.code === "ArrowUp"){
      // Handle "up"
      updateYPosition(moveRate);
  } else if (event.code === "ArrowLeft"){
      // Handle "left"
      updateXPosition(-moveRate);
  } else if (event.code === "ArrowRight"){
      // Handle "right"
      updateXPosition(moveRate);
  }
  refreshPosition();
  event.preventDefault();
}, true);
