var data = [14, 17, 16, 19, 12, 2]
var c_data = [10, 7, 5, 4, 3, 1]

var svg = d3.select(".area")
    .append("svg")
    .attr('width', 1000)
    .attr('height', 500)
    .attr('transform', 'translate(0,0)')

for (var i = 0; i < 7; i++) {
    svg.append("line")
        .attr("x1", 0)
        .attr("y1", 40 * i + 40)
        .attr("x2", 470)
        .attr("y2", 40 * i + 40)
        .style("stroke", "black")
        .style("stroke-width", 0.6)
}

for (var i = 0; i < 11; i++) {
    svg.append("line")
        .attr("x1", i * 40 + 40)
        .attr("y1", 10)
        .attr("x2", i * 40 + 40)
        .attr("y2", 310)
        .style("stroke", "black")
        .style("stroke-width", 0.6)
}

for (var i = 0; i < 10; i++) {
    svg.append("rect")
        .attr('x', 45 + i * 40)
        .attr('y', 45)
        .attr('width', 30)
        .attr('height', 30)
        .attr('fill', '#e23e57')

    svg.append('text')
        .attr('x', 40 * i + 50)
        .attr('y', 30)
        .text((i + 9) + '\'')
        .style('font-size', '16px')
        .attr("font-family", "sans-serif")
        .attr("fill", 'gray')
}

for (var i = 0; i < 7; i++) {
    svg.append("rect")
        .attr('x', 45 + i * 40)
        .attr('y', 85)
        .attr('width', 30)
        .attr('height', 30)
        .attr('fill', '#88304e')
}

for (var i = 0; i < 5; i++) {
    svg.append("rect")
        .attr('x', 45 + (i + 5) * 40)
        .attr('y', 125)
        .attr('width', 30)
        .attr('height', 30)
        .attr('fill', '#522546')
}


for (var i = 0; i < 4; i++) {
    if (i == 0) {
        svg.append("rect")
            .attr('x', 45 + i * 40)
            .attr('y', 165)
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', '#311d3f')
    }
    else {
        svg.append("rect")
            .attr('x', 45 + (i + 6) * 40)
            .attr('y', 165)
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', '#311d3f')
    }
}

for (var i = 0; i < 3; i++) {
    if (i != 2) {
        svg.append("rect")
            .attr('x', 45 + (i + 1) * 40)
            .attr('y', 205)
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', '#311d3f')
    }
    else {
        svg.append("rect")
            .attr('x', 45 + (i + 2) * 40)
            .attr('y', 205)
            .attr('width', 30)
            .attr('height', 30)
            .attr('fill', '#311d3f')
    }
}

svg.append("rect")
    .attr('x', 165)
    .attr('y', 245)
    .attr('width', 30)
    .attr('height', 30)
    .attr('fill', '#311d3f')

for (var i = 0; i < 6; i++) {
    svg.append('text')
        .attr('x', 10)
        .attr('y', 65 + i * 40)
        .text(data[i])
        .style('font-size', '16px')
        .attr("font-family", "sans-serif")
        .attr("fill", 'gray')
}

svg.append("line")
    .attr("x1", 550)
    .attr("y1", 40)
    .attr("x2", 900)
    .attr("y2", 40)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

svg.append("line")
    .attr("x1", 580)
    .attr("y1", 10)
    .attr("x2", 580)
    .attr("y2", 310)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

for (var i = 0; i < 6; i++) {
    svg.append('text')
        .attr('x', 555)
        .attr('y', 65 + i * 40)
        .text(data[i])
        .style('font-size', '16px')
        .attr("font-family", "sans-serif")
        .attr("fill", 'gray')

    svg.append("rect")
        .attr('x', 580)
        .attr('y', 40 + i * 40)
        .attr('width', c_data[i] * 30)
        .attr('height', 30)
        .attr('fill', '#311d3f')
        .attr("fill", function () {
            return ['#e23e57', '#88304e', '#522546', '#311d3f', '#311d3f', '#311d3f'][i]
        })

    svg.append('text')
        .attr('x', 30 * c_data[i] + 575)
        .attr('y', 30)
        .text(c_data[i])
        .style('font-size', '16px')
        .attr("font-family", "sans-serif")
        .attr("fill", 'gray')
}

svg.append('line')
    .attr('x1', 531)
    .attr('y1', 181)
    .attr('x2', 490)
    .attr('y2', 140)
    .style("stroke", "lightgray")
    .style("stroke-width", 4)

svg.append('line')
    .attr('x1', 531)
    .attr('y1', 179)
    .attr('x2', 490)
    .attr('y2', 220)
    .style("stroke", "lightgray")
    .style("stroke-width", 4)

svg.append("line")
    .attr("x1", 7)
    .attr("y1", 13)
    .attr("x2", 40)
    .attr("y2", 40)
    .style("stroke", "gray")
    .style("stroke-width", 0.6)

svg.append('text')
    .attr('x', 10)
    .attr('y', 10)
    .text("Year")
    .style('font-size', '11px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")
    .attr('transform', 'rotate(-90) translate(-35,25)')

svg.append('text')
    .attr('x', 0)
    .attr('y', 35)
    .text("Area")
    .style('font-size', '11px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")

svg.append("line")
    .attr("x1", 550)
    .attr("y1", 15)
    .attr("x2", 580)
    .attr("y2", 40)
    .style("stroke", "gray")
    .style("stroke-width", 0.6)

svg.append('text')
    .attr('x', 540)
    .attr('y', 35)
    .text("Area")
    .style('font-size', '11px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")

svg.append('text')
    .attr('x', 560)
    .attr('y', 25)
    .text("Count")
    .style('font-size', '11px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")
    .attr('transform', 'rotate(-90) translate(-590,550)')