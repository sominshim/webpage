var data = [28.20, 27.13, 27.35, 26.95, 28.15, 28.88, 26.46, 19.64, 19.54, 19.95]

var svg = d3.select(".line")
    .append("svg")
    .attr("width", 930)
    .attr("height", 400)
    .attr('transform', 'translate(150,0)')

var xAxis = svg.append("line")
    .attr("x1", 50)
    .attr("y1", 300)
    .attr("x2", 1000)
    .attr("y2", 300)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

var yAxis = svg.append("line")
    .attr("x1", 50)
    .attr("y1", 300)
    .attr("x2", 50)
    .attr("y2", 30)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

for (var i = 0; i < 6; i++) {
    svg.append("line") // y 눈금
        .attr("x1", 50)
        .attr("y1", 300 - i * 45)
        .attr("x2", 55)
        .attr("y2", 300 - i * 45)
        .style("stroke", "black")
        .style("stroke-width", 0.6)
        .attr('transform', 'translate(0,-25)')
}

for (var i = 0; i < 3; i++) {

    svg.append("line") // y 눈금
        .attr("x1", 55)
        .attr("y1", 255 - i * 90)
        .attr("x2", 60)
        .attr("y2", 255 - i * 90)
        .style("stroke", "black")
        .style("stroke-width", 0.6)
        .attr('transform', 'translate(0,-25)')
}

svg.append('text')
    .attr('x', 900)
    .attr('y', 320)
    .text("Year")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")

svg.append('text')
    .attr('x', 10)
    .attr('y', 20)
    .text("Arrest Rate")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")

data.forEach((d, i) => {

    svg.append("line") // x 눈금
        .attr("x1", (i + 1) * 90)
        .attr("y1", 300)
        .attr("x2", (i + 1) * 90)
        .attr("y2", 290)
        .style("stroke", "black")
        .style("stroke-width", 0.6)
        .attr('transform', 'translate(50,0)')

    svg.append('text') // x 레전드 
        .attr('x', i * 90 + 45)
        .attr('y', 325)
        .text((i + 9) + "'")
        .style('font-size', '14px')
        .attr("font-family", "sans-serif")
        .attr("fill", "gray")

    svg.append('text') // y 레전드 
        .attr('x', 22)
        .attr('y', 235 - i * 90)
        .text((i + 1) * 10 + '%')
        .style('font-size', '12px')
        .attr("font-family", "sans-serif")
        .attr("fill", "gray")
})

svg.append("line") // 평균
    .attr("x1", 50) //25.22
    .attr("y1", 95 - 2.802)
    .attr("x2", 860)
    .attr("y2", 95 - 2.802)
    .style("stroke", "#fc7978")
    .style("stroke-width", 2)

data.forEach((d, i) => {

    if (i == 9) {
        return;
    }

    var line = svg.append("line")
        .attr("x1", i * 90)
        .attr("y1", (300 - data[i] * 9))
        .attr("x2", (i + 1) * 90)
        .attr("y2", (300 - data[i + 1] * 9))
        .attr("transform", "translate(50,25)")
        .style("stroke", "#96d1c7")
        .style("stroke-width", 3)

    var circle = svg.append('circle')
        .attr('cx', (i + 1) * 90)
        .attr('cy', (300 - data[i + 1] * 9))
        .attr('r', 3)
        .attr("transform", "translate(50,25)")
        .style('fill', '#5eb7b7')
})

svg.append('rect')
    .attr('x', 90)
    .attr('y', 260)
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', '#fc7978')

svg.append('rect')
    .attr('x', 90)
    .attr('y', 240)
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', '#5eb7b7')
    .on('mouseover', cc)

function cc() {
    var mouseXY = d3.mouse(this);
    svg.append('rect')
        .attr('x', 70)
        .attr('y', 120)
        .attr('width', 10)
        .attr('height', 10)
        .on("mouseover", function () { d3.select(this).attr("fill", "red"); })
        .on("mouseout", function () { d3.select(this).attr("fill", "#5eb7b7"); });
}

svg.append('text')
    .attr('x', 110)
    .attr('y', 250)
    .text('Annual Data')
    .style('font-size', '12px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append('text')
    .attr('x', 110)
    .attr('y', 270)
    .text('Average')
    .style('font-size', '12px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")
