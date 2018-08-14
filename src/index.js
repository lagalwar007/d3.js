import * as d3 from "d3";

d3.select("p").text("hello workd");
d3.select("#app")
  .append("p")
  .style("color", "red")
  .text("I am new add");

var canvas = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

canvas
  .append("circle")
  .attr("cx", "250")
  .attr("cy", "250")
  .attr("r", "50")
  .style("fill", "red");

canvas
  .append("rect")
  .attr("width", 100)
  .attr("height", 50)
  .style("fill", "red");

canvas
  .append("line")
  .attr("x1", 100)
  .attr("x2", 201)
  .attr("y1", 50)
  .attr("y2", 240)
  .style("stroke", "green")
  .style("stroke-width", 5);
