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
// END DO NOT CHANGE


/** 
 * SELECT BETWEEN THIS COMMENT AND THE END COMMENT BEFORE USING
 * GITHUB COPILOT CHAT TO MODIFY YOUR DRAWING
**/
const pixels = document.getElementsByClassName('pixel');
const bgColor = [75, 0, 130]; // RGB for dark purple
const flameColor = [218, 112, 214]; // RGB for light purple

// Define the points for the flame
const flamePoints = [
  { x: 32, y: 48 },
  { x: 38, y: 40 },
  { x: 42, y: 32 },
  { x: 38, y: 24 },
  { x: 32, y: 16 },
  { x: 26, y: 24 },
  { x: 22, y: 32 },
  { x: 26, y: 40 },
  { x: 30, y: 48 },
  { x: 34, y: 48 },
];

for (let y = 0; y < 64; y++) {
  for (let x = 0; x < 64; x++) {
    const pixel = pixels[y * 64 + x];
    let color = bgColor; // default to background color

    // Check if the point is within the flame
    let inside = false;
    for (let i = 0, j = flamePoints.length - 1; i < flamePoints.length; j = i++) {
      if ((flamePoints[i].y > y) !== (flamePoints[j].y > y) &&
        (x < (flamePoints[j].x - flamePoints[i].x) * (y - flamePoints[i].y) / (flamePoints[j].y - flamePoints[i].y) + flamePoints[i].x)) {
        inside = !inside;
      }
    }

    if (inside) {
      color = flameColor;
    }

    pixel.style.backgroundColor = `rgb(${Math.round(color[0])}, ${Math.round(color[1])}, ${Math.round(color[2])})`;
  }
}
/**
 * END COMMENT
**/