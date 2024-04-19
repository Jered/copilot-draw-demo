// DO NOT CHANGE THIS CODE
const canvas = document.getElementById('canvas');
for (let i = 0; i < 64; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  for (let j = 0; j < 64; j++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    row.appendChild(pixel);
  }
  canvas.appendChild(row);
}
// END OF DO NOT CHANGE


// SELECT THE CODE BELOW THIS LINE AND REPLACE IT WITH COPILOT SUGGESTIONS
const pixels = document.getElementsByClassName('pixel');
const bgColor = '#333333'; // Darker grey background
const ghostColor = 'white'; // White ghost
const eyeColor = 'black'; // Black eyes

// Set all pixels to the background color
for (let i = 0; i < pixels.length; i++) {
  pixels[i].style.backgroundColor = bgColor;
}

// Define the ghost shape
let ghostPixels = [];
let eyePixels = [];

// Create the body of the ghost
for (let y = 10; y < 50; y++) { // Adjusted y-coordinates
  for (let x = 20; x < 44; x++) { // Adjusted x-coordinates
    // Skip the top corners to round the top of the ghost
    if ((y < 14 && (x < 24 || x > 39)) || (y === 14 && (x < 22 || x > 41))) {
      continue;
    }
    // Make the bottom of the ghost wavy
    if (y > 44 && (x + y) % 2 === 0) {
      continue;
    }
    ghostPixels.push({x: x, y: y});
  }
}

// Create the eyes of the ghost
eyePixels.push(
  {x: 25, y: 15}, {x: 26, y: 15}, {x: 27, y: 15}, {x: 28, y: 15}, {x: 29, y: 15}, // Top row of left eye
  {x: 25, y: 16}, {x: 26, y: 16}, {x: 27, y: 16}, {x: 28, y: 16}, {x: 29, y: 16}, // Middle row of left eye
  {x: 25, y: 17}, {x: 26, y: 17}, {x: 27, y: 17}, {x: 28, y: 17}, {x: 29, y: 17}, // Bottom row of left eye
  {x: 35, y: 15}, {x: 36, y: 15}, {x: 37, y: 15}, {x: 38, y: 15}, {x: 39, y: 15}, // Top row of right eye
  {x: 35, y: 16}, {x: 36, y: 16}, {x: 37, y: 16}, {x: 38, y: 16}, {x: 39, y: 16}, // Middle row of right eye
  {x: 35, y: 17}, {x: 36, y: 17}, {x: 37, y: 17}, {x: 38, y: 17}, {x: 39, y: 17}  // Bottom row of right eye
);

// Set the ghost pixels to the ghost color
for (let i = 0; i < ghostPixels.length; i++) {
  const x = ghostPixels[i].x;
  const y = ghostPixels[i].y;
  const pixel = pixels[y * 64 + x];
  pixel.style.backgroundColor = ghostColor;
}

// Set the eye pixels to the eye color
for (let i = 0; i < eyePixels.length; i++) {
  const x = eyePixels[i].x;
  const y = eyePixels[i].y;
  const pixel = pixels[y * 64 + x];
  pixel.style.backgroundColor = eyeColor;
}