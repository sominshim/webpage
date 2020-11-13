var data = [0.0658, 0.1321, 0.8010];

var svg = d3.select(".pie")
    .append("svg")
    .attr("width", 300)
    .attr("height", 350)

var arc = d3.arc().innerRadius(45).outerRadius(70);

var pie = svg.selectAll("path")
    .data(d3.pie()(data))
    .enter()
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(130,100)")
    .style("fill", function (d, i) {
        return ['#ca3e3e', "#e87171", "#f99e9e"][i];
    })
    .attr('d', arc)

svg.append('text')
    .attr('x', 100)
    .attr('y', 200)
    .text('[Not arrested]')
    .style('font-size', '12px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append("text")
  .attr('x', 80)
  .attr('y', 20)
  .text("Felony")
  .style('font-size', '15px')
  .attr("font-family", "sans-serif")
  .attr("fill", "dark gray")

svg.append("text")
  .attr('x', 10)
  .attr('y', 45)
  .text("Ambiguity")
  .style('font-size', '15px')
  .attr("font-family", "sans-serif")
  .attr("fill", "dark gray")

svg.append("text")
  .attr('x', 190)
  .attr('y', 130)
  .text("Misdemeanor")
  .style('font-size', '15px')
  .attr("font-family", "sans-serif")
  .attr("fill", "dark gray")
