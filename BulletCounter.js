// Starts the counter at 0
let spacebarCount = 0;

// Add event listener to detect every individual time that the space bar is pressed
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is the spacebar (keyCode 32 or key " ")
  if (event.keyCode === 32 || event.key === " ") {
    
    spacebarCount++; // Adds to the counter by 1 with each spacebar press and then returns the number
    
    document.getElementById('spacebarCount').textContent = spacebarCount; // Updates the displayed number
  }
});