var svg = d3.select(".text_title")
    .append("svg")
    .attr('width', 1200)
    .attr('height', 100);

var year = svg.append('text')
    .attr('x', 410)
    .attr('y', 20)
    .text('< Top 3 Lowest Arrest Rate Among Crime Types  >')
    .style('font-size', '19px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append('text')
    .attr('x', 250)
    .attr('y', 90)
    .text('# Annual Top 3 #')
    .style('font-size', '16px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

    svg.append('text')
    .attr('x', 950)
    .attr('y', 90)
    .text('# Total #')
    .style('font-size', '16px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")