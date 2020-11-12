var data = [20511,331311];

var svg = d3.select(".pie")
    .append("svg")
    .attr("width", 100)
    .attr("height", 300)

var arc = d3.arc().innerRadius(20).outerRadius(35);

var pie = svg.selectAll("path")
    .data(d3.pie()(data))
    .enter()
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(60,50)")
    .style("fill", function (d, i) {
        return ['#3d84a8', "#abedd8"][i];
    })
    .attr('d', arc)

svg.data(d3.pie()([1]))
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(60,150)")
    .style("fill", '#abedd8')
    .attr('d', arc)

svg.data(d3.pie()([20216,249003]))
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(60,150)")
    .style("fill", '#3d84a8')
    .attr('d', arc)

svg.append('text')
    .attr('x', 34)
    .attr('y', 100)
    .text('< 2011 >')
    .style('font-size', '12px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append('text')
    .attr('x', 34)
    .attr('y', 200)
    .text('< 2016 >')
    .style('font-size', '12px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")