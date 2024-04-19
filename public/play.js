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
// Define the bug shape
const pixels = document.getElementsByClassName('pixel');
const bgColor = 'darkblue'; // Very dark blue background
const airplaneColor = 'lightblue'; // Light blue airplane

// Set all pixels to the background color
for (let i = 0; i < pixels.length; i++) {
  pixels[i].style.backgroundColor = bgColor;
}

// Define the airplane shape as a right-facing triangle
let airplanePixels = [];
for (let i = 20; i <= 40; i++) {
  for (let j = 20; j <= i; j++) {
    airplanePixels.push({x: j, y: i});
  }
}

// Set the airplane pixels to the airplane color
for (let i = 0; i < airplanePixels.length; i++) {
  const x = airplanePixels[i].x;
  const y = airplanePixels[i].y;
  const pixel = pixels[y * 64 + x];
  pixel.style.backgroundColor = airplaneColor;
}