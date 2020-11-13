var data = [5, 10, 15, 20, 25];

var svg = d3.select(".bar")
    .append("svg")
    .attr('width', 450)
    .attr('height', 100);

var bar = svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', 10)
    .attr('y', function (d, i) {
        return i * 10;
    })
    .attr('width', function (d) {
        return d;
    })
    .attr('height', 8)
    .attr('fill', 'blue')
    .style("fill", function (d, i) {
        return ["red", "orange", "yellow", "blue", "purple"][i];
    });