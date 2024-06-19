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

// Scale for x-axis
const xScale = d3.scaleLinear()
.domain([0, d3.max(dataset)])
.range([50, width]);

// Create a group for each bar
const bar = svg.selectAll('g')
  .data(dataset)
  .enter()
  .append('g')
  .attr('transform', (d, i) => `translate(0, ${i * (barHeight + margin)})`);

// Append rectangle for each bar
bar.append('rect')
  .attr('class', 'bar')
  .attr('width', 0)  // Initial width for transition
  .attr('height', barHeight)
  .transition()
  .duration(1000)
  .attr('width', d => xScale(d));

// Append text label for each bar
bar.append('text')
.attr('x', d => xScale(d) - 5)  // Position text at the end of the bar
.attr('y', barHeight / 2)
.attr('dy', '.35em')
.text(d => d)
.attr('fill', 'white');