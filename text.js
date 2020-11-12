var data = [['ILLEGAL POSSESSION CASH CARD', 'FINANCIAL IDENTITY THEFT', 'COMPUTER FRAUD'],
['ATT : TRUCL BUS MOTOR HOME', 'OBSCENE TELEPHONE CALLS', 'FINANCIAL IDENTITY THEFT'],
['FINANCIAL IDENTITY THEFT', 'ILLEGAL USE CASH CARD', 'OBSCENE TELEPHONE CALLS'],
['UNLAWFUL INTERFERE / VISITATION', 'FINANCIAL IDENTITY THEFT', 'ATTEMPT - FINANCIAL IDENTITY THEFT'],
['OBSCENE TELEPHONE CALLS', 'COMPUTER FRAUD', 'FINANCIAL IDENTITY THEFT'],
['UNLAWFUL INTERFERE / VISITATION', 'ILLEGAL USE CASH CARD', 'FINANCIAL IDENTITY THEFT'],
['FINANCIAL IDENTITY THEFT', 'DECEPTIVE COLLECTION PRACTICES', 'ILLEGAL USE CASH CARD'],
['ATTEMPT - FINANCIAL IDENTITY THEFT', 'ILLEGAL USE CASH CARD', 'FINANCIAL IDENTITY THEFT'],
['EXTORTION', 'COMPUTER FRAUD', 'ATTEMPT - FINANCIAL IDENTITY THEFT'],
['EXTORTION', 'COMPUTER FRAUD', 'POCKET-PICKING']]
var sum = [8, 4, 4, 3, 3]
var color = ['#e23e57', '#b9304e', '#b9304e', '#522546', '#522546']
var svg = d3.select(".text")
    .append("svg")
    .attr('width', 1200)
    .attr('height', 650);

svg.append('text')
    .attr('x', 50)
    .attr('y', 60)
    .text('2009')
    .style('font-size', '16px')
    .attr("font-family", "sans-serif")
    .attr("fill", "dark gray")

svg.append('line')
    .attr('x1', 100)
    .attr('y1', 30)
    .attr('x2', 100)
    .attr('y2', 525)
    .style("stroke", "black")
    .style("stroke-width", 0.4)

svg.append('line')
    .attr('x1', 631)
    .attr('y1', 251)
    .attr('x2', 590)
    .attr('y2', 210)
    .style("stroke", "lightgray")
    .style("stroke-width", 4)

svg.append('line')
    .attr('x1', 631)
    .attr('y1', 249)
    .attr('x2', 590)
    .attr('y2', 290)
    .style("stroke", "lightgray")
    .style("stroke-width", 4)

svg.append('line')
    .attr('x1', 611)
    .attr('y1', 251)
    .attr('x2', 570)
    .attr('y2', 210)
    .style("stroke", "lightgray")
    .style("stroke-width", 4)

svg.append('line')
    .attr('x1', 611)
    .attr('y1', 249)
    .attr('x2', 570)
    .attr('y2', 290)
    .style("stroke", "lightgray")
    .style("stroke-width", 4)


for (var i = 1; i < 10; i++) {
    svg.append('text')
        .attr('x', 50)
        .attr('y', 50 * (i + 1) + 10)
        .text('20' + (i + 9))
        .style('font-size', '16px')
        .attr("font-family", "sans-serif")
        .attr("fill", "dark gray")

    svg.append('line')
        .attr('x1', 25)
        .attr('y1', 25 + i * 50)
        .attr('x2', 500)
        .attr('y2', 25 + i * 50)
        .style("stroke", "black")
        .style("stroke-width", 0.4)
}

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 3; j++) {
        svg.append('text')
            .attr('x', 110)
            .attr('y', 12 * (j + 1) + 34 + 50 * i)
            .text(data[i][j])
            .style('font-size', '11px')
            .attr("font-family", "sans-serif")
            .attr("fill", function () {
                if (data[i][j] == 'FINANCIAL IDENTITY THEFT') {
                    return '#e23e57';
                }
                else if (data[i][j] == 'ILLEGAL USE CASH CARD') {
                    return '#b9304e';
                }
                else if (data[i][j] == 'COMPUTER FRAUD') {
                    return '#b9304e';
                }
                else if (data[i][j] == 'ATTEMPT - FINANCIAL IDENTITY THEFT') {
                    return '#522546';
                }
                else if (data[i][j] == 'OBSCENE TELEPHONE CALLS') {
                    return '#522546';
                }
                else if (data[i][j] == 'UNLAWFUL INTERFERE / VISITATION') {
                    return '#311d3f';
                }
                else if (data[i][j] == 'EXTORTION') {
                    return '#311d3f';
                }
                else if (data[i][j] == 'ILLEGAL POSSESSION CASH CARD') {
                    return '#311d3f';
                }
                else if (data[i][j] == 'ATT : TRUCL BUS MOTOR HOME') {
                    return '#311d3f';
                }
                else if (data[i][j] == 'DECEPTIVE COLLECTION PRACTICES') {
                    return '#311d3f';
                }
                else if (data[i][j] == 'POCKET-PICKING') {
                    return '#311d3f';
                }
            })
    }
}

var xAxis = svg.append("line")
    .attr("x1", 700)
    .attr("y1", 500)
    .attr("x2", 1200)
    .attr("y2", 500)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

var yAxis = svg.append("line")
    .attr("x1", 700)
    .attr("y1", 500)
    .attr("x2", 700)
    .attr("y2", 50)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

svg.append('text')
    .attr('x', 700)
    .attr('y', 530)
    .text("FINANCIAL IDENTITY THEFT")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'black')
    .attr('transform', 'translate(-220,240) rotate(-15)')

svg.append('text')
    .attr('x', 700)
    .attr('y', 530)
    .text("ILLEGAL USE CASH CARD")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'black')
    .attr('transform', 'translate(-120,235) rotate(-15)')

svg.append('text')
    .attr('x', 700)
    .attr('y', 530)
    .text("COMPUTER FRAUD")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'black')
    .attr('transform', 'translate(10,225) rotate(-15)')

svg.append('text')
    .attr('x', 700)
    .attr('y', 530)
    .text("ATTEMP FINANCIAL IDENTITY THEFT")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'black')
    .attr('transform', 'translate(30,250) rotate(-15)')

svg.append('text')
    .attr('x', 700)
    .attr('y', 530)
    .text("OBSCENE TELEPHONE CALLS")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'black')
    .attr('transform', 'translate(180,240) rotate(-15)')

for (var i = 0; i < 5; i++) {
    svg.append('rect')
        .attr('x', 750 + 90 * i)
        .attr('y', 500 - (50 * sum[i]))
        .attr('width', 20)
        .attr('height', 50 * sum[i])
        .attr('fill', 'gray')
        .style("fill", function () {
            return color[i]
        });
}

svg.append('text')
    .attr('x', 675)
    .attr('y', 105)
    .text("8")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'gray')

svg.append('text')
    .attr('x', 675)
    .attr('y', 305)
    .text("4")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'gray')

svg.append('text')
    .attr('x', 675)
    .attr('y', 355)
    .text("3")
    .style('font-size', '14px')
    .attr("font-family", "sans-serif")
    .attr("fill", 'gray')

svg.append("line")
    .attr("x1", 700)
    .attr("y1", 350)
    .attr("x2", 710)
    .attr("y2", 350)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

svg.append("line")
    .attr("x1", 715)
    .attr("y1", 350)
    .attr("x2", 1200)
    .attr("y2", 350)
    .style("stroke", "lightgray")
    .style("stroke-width", 0.1)
    .style("stroke-dasharray", 5)

svg.append("line")
    .attr("x1", 700)
    .attr("y1", 300)
    .attr("x2", 710)
    .attr("y2", 300)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

svg.append("line")
    .attr("x1", 715)
    .attr("y1", 300)
    .attr("x2", 1200)
    .attr("y2", 300)
    .style("stroke", "lightgray")
    .style("stroke-width", 0.1)
    .style("stroke-dasharray", 5)

svg.append("line")
    .attr("x1", 700)
    .attr("y1", 100)
    .attr("x2", 710)
    .attr("y2", 100)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

svg.append("line")
    .attr("x1", 715)
    .attr("y1", 100)
    .attr("x2", 1200)
    .attr("y2", 100)
    .style("stroke", "lightgray")
    .style("stroke-width", 0.1)
    .style("stroke-dasharray", 5)

svg.append('text')
    .attr('x', 1140)
    .attr('y', 490)
    .text("CrimeTypes")
    .style('font-size', '11px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")

svg.append('text')
    .attr('x', 660)
    .attr('y', 60)
    .text("Count")
    .style('font-size', '11px')
    .attr("font-family", "sans-serif")
    .attr("fill", "gray")