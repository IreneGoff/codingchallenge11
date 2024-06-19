// Data set
const dataset = [100, 420, 230, 850, 560, 925];

// Dimensions
const width = 500;
const barHeight = 20;
const margin = 1;

// Height of the SVG container
const height = dataset.length * (barHeight + margin);

// Create SVG container
const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);