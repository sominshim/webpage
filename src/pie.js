var data = [5261510, 1965790]; //체포 X, O
var rate = ["72.8%", "27.2%"];

var svg = d3.select(".pie")
    .append("svg")
    .attr("width", 250)
    .attr("height", 350)

var arc = d3.arc().innerRadius(70).outerRadius(100);

var pie = svg.selectAll("path")
    .data(d3.pie()(data))
    .enter()
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(100,100)")
    .style("fill", function (d, i) {
        return ['#FE2E2E', "#2E64FE"][i];
    })
    .attr('d', arc)
  // text.enter()
  // 		.append("text")
  // 		.attr("dy", ".35em")
  // 		.text(function(d) {
  // 			return rate;
  // 		});
svg.append("text")
  .attr('x', 3)
  .attr('y',18)
  // .attr("class", "pieNum")
  .text("27.2%")
  .style('font-size', '15px')
  .attr("font-family", "sans-serif")
  .attr("fill", "dark gray")

svg.append("text")
  .attr('x', 160)
  .attr('y', 190)
  // .attr("class", "pieNum")
  .text("72.8%")
  .style('font-size', '15px')
  .attr("font-family", "sans-serif")
  .attr("fill", "dark gray")

svg.append('text')
    .attr('x', 80-4)
    .attr('y', 90)
    .text('Arrested')
    .style('font-size', '15px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append('rect')
    .attr('x', 60-5)
    .attr('y', 78)
    .attr('width', 13)
    .attr('height', 13)
    .attr("fill", "#2E64FE")

svg.append('text')
    .attr('x', 80-6)
    .attr('y', 120)
    .text('Not arrested')
    .style('font-size', '15px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append('rect')
    .attr('x', 60-5)
    .attr('y', 108)
    .attr('width', 13)
    .attr('height', 13)
    .attr("fill", "#FE2E2E")

svg.append('text')
    .attr('x', 57)
    .attr('y', 228)
    .text('[Full period]')
    .style('font-size', '16px')
    .style('font-weight', 'bold')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")
//33.5 305.6 272.1
