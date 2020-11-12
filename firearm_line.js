var data = [19.95, 19.54, 19.64, 26.46, 28.88, 28.15, 26.95, 27.35, 27.13, 28.2];
var r_data = [30.27, 27.76, 21.63, 27, 27.86, 25.84, 26.03, 24.86, 23.22, 24.36];
var u_data = [19.14, 18.85, 19.48, 26.43, 28.94, 28.28, 27.01, 27.5, 27.36, 28.44];

var svg = d3.select(".firearm_line")
    .append("svg")
    .attr('width', 1000)
    .attr('height', 200)
    .attr("transform", "translate(160,0)")

for (var i = 0; i < 9; i++) {
    svg.append("line")
        .attr('x1', i * 70 + 115)
        .attr('y1', (150 - u_data[9 - i] * 3))
        .attr('x2', (i + 1) * 70 + 115)
        .attr('y2', (150 - u_data[8 - i] * 3))
        .style("stroke", "#ff6464")
        .style("stroke-width", 2)

    svg.append("line")
        .attr('x1', i * 70 + 115)
        .attr('y1', (150 - r_data[9 - i] * 3))
        .attr('x2', (i + 1) * 70 + 115)
        .attr('y2', (150 - r_data[8 - i] * 3))
        .style("stroke", "#4baea0")
        .style("stroke-width", 2)

    svg.append('circle')
        .attr('cx', i * 70 + 185)
        .attr('cy', (150 - r_data[8 - i] * 3))
        .attr('r', 3)
        .style("fill", '#4baea0')

    svg.append('circle')
        .attr('cx', i * 70 + 185)
        .attr('cy', (150 - u_data[8 - i] * 3))
        .attr('r', 3)
        .style("fill", '#ff6464')
}

for (var i = 0; i < 10; i++) {
    svg.append('text')
        .attr('x', 110 + 70 * i)
        .attr('y', 180)
        .text((i + 9) + '\'')
        .style('font-size', '14px')
        .attr("font-family", "sans-serif")
        .attr("fill", '#black')

    svg.append("line")
        .attr("x1", 115 + 70 * i)
        .attr("y1", 150)
        .attr("x2", 115 + 70 * i)
        .attr("y2", 50)
        .style("stroke", "lightgray")
        .style("stroke-width", 0.6)
        .style("stroke-dasharray", 5)
}

var xAxis = svg.append("line")
    .attr("x1", 90)
    .attr("y1", 150)
    .attr("x2", 780)
    .attr("y2", 150)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

var yAxis = svg.append("line")
    .attr("x1", 90)
    .attr("y1", 150)
    .attr("x2", 90)
    .attr("y2", 30)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

for (var i = 0; i < 3; i++) {
    svg.append("line")
        .attr("x1", 90)
        .attr("y1", 120 - i * 30)
        .attr("x2", 95)
        .attr("y2", 120 - i * 30)
        .style("stroke", "black")
        .style("stroke-width", 0.6)
}

for (var i = 0; i < 3; i++) {
    svg.append('text')
        .attr('x', 57)
        .attr('y', 120 - i * 30)
        .text((i + 1) * 10 + "%")
        .style('font-size', '14px')
        .attr("font-family", "sans-serif")
        .attr("fill", 'gray')
}

svg.append('rect')
    .attr('x', 120)
    .attr('y', 105)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', '#4baea0')

svg.append('rect')
    .attr('x', 120)
    .attr('y', 125)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', '#ff6464')

svg.append('text')
    .attr('x', 135)
    .attr('y', 115)
    .text("Firearm-Related Crime")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'gray')

svg.append('text')
    .attr('x', 135)
    .attr('y', 135)
    .text("Unrelated Crime")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'gray')

svg.append('text')
    .attr('x', 760)
    .attr('y', 165)
    .text("Year")
    .style('font-size', '11px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")

svg.append('text')
    .attr('x', 60)
    .attr('y', 25)
    .text("Arrest Rate")
    .style('font-size', '11px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")