
function blinkButton(log) {
    const button = document.getElementById(log);
    if (button) {
      button.style.opacity = '0'; // Hide the button
  
      setTimeout(() => {
        button.style.opacity = '1'; // Show the button again
      }, 300); // Adjust the duration (in milliseconds) of the blink as needed
    }
  }
module.exports.blinkButton=blinkButton;  