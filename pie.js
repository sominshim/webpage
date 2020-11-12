var data = [19404.5, 293175.3];

var svg = d3.select(".pie")
    .append("svg")
    .attr("width", 200)
    .attr("height", 300)

var arc = d3.arc().innerRadius(70).outerRadius(100);

var pie = svg.selectAll("path")
    .data(d3.pie()(data))
    .enter()
    .append("path")
    .attr("class", "pie")
    .attr("transform", "translate(100,100)")
    .style("fill", function (d, i) {
        return ['#3d84a8', "#abedd8"][i];
    })
    .attr('d', arc)

svg.append('text')
    .attr('x', 80)
    .attr('y', 90)
    .text('Related')
    .style('font-size', '15px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append('rect')
    .attr('x', 60)
    .attr('y', 78)
    .attr('width', 13)
    .attr('height', 13)
    .attr("fill", "#3d84a8")

svg.append('text')
    .attr('x', 80)
    .attr('y', 120)
    .text('Unrelated')
    .style('font-size', '15px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append('rect')
    .attr('x', 60)
    .attr('y', 108)
    .attr('width', 13)
    .attr('height', 13)
    .attr("fill", "#abedd8")

svg.append('text')
    .attr('x', 55)
    .attr('y', 220)
    .text('< Average >')
    .style('font-size', '15px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")
//33.5 305.6 272.1