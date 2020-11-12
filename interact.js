var data_line = [28.20, 27.13, 27.35, 26.95, 28.15, 28.88, 26.46, 19.64, 19.54, 19.95]
var data_text = [['ILLEGAL POSSESSION CASH CARD', 'FINANCIAL IDENTITY THEFT', 'COMPUTER FRAUD'],
['ATT : TRUCL BUS MOTOR HOME', 'OBSCENE TELEPHONE CALLS', 'FINANCIAL IDENTITY THEFT'],
['FINANCIAL IDENTITY THEFT', 'ILLEGAL USE CASH CARD', 'OBSCENE TELEPHONE CALLS'],
['UNLAWFUL INTERFERE / VISITATION', 'FINANCIAL IDENTITY THEFT', 'ATTEMPT - FINANCIAL IDENTITY THEFT'],
['OBSCENE TELEPHONE CALLS', 'COMPUTER FRAUD', 'FINANCIAL IDENTITY THEFT'],
['UNLAWFUL INTERFERE / VISITATION', 'ILLEGAL USE CASH CARD', 'FINANCIAL IDENTITY THEFT'],
['FINANCIAL IDENTITY THEFT', 'DECEPTIVE COLLECTION PRACTICES', 'ILLEGAL USE CASH CARD'],
['ATTEMPT - FINANCIAL IDENTITY THEFT', 'ILLEGAL USE CASH CARD', 'FINANCIAL IDENTITY THEFT'],
['EXTORTION', 'COMPUTER FRAUD', 'ATTEMPT - FINANCIAL IDENTITY THEFT'],
['EXTORTION', 'COMPUTER FRAUD', 'POCKET-PICKING']]
var data_total_crime = [19.95, 19.54, 19.64, 26.46, 28.88, 28.15, 26.95, 27.35, 27.13, 28.2];
var data_firearm_related = [30.27, 27.76, 21.63, 27, 27.86, 25.84, 26.03, 24.86, 23.22, 24.36];
var data_Unrelated = [19.14, 18.85, 19.48, 26.43, 28.94, 28.28, 27.01, 27.5, 27.36, 28.44];
var data_area = [[17, 14, 19], [17, 14, 12], [14, 12, 17], [17, 14, 2], [14, 12, 17], [14, 17, 16], [16, 17, 14], [16, 14, 19], [19, 14, 16], [16, 19, 14]]
var target = document.getElementById("slide");

var svg = d3.select(".interact")
    .append("svg")
    .attr('width', 1300)
    .attr('height', 1000)

svg.append('line') // x 축 
    .attr('x1', 40)
    .attr('y1', 220)
    .attr('x2', 240)
    .attr('y2', 220)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.6)

svg.append('line') // x 축 
    .attr('x1', 40)
    .attr('y1', 220 - 25.22 * 4)
    .attr('x2', 200)
    .attr('y2', 220 - 25.22 * 4)
    .attr('stroke', 'gray')
    .attr('stroke-width', 0.6)
    .style("stroke-dasharray", 5)

svg.append('line') // y 축
    .attr('x1', 40)
    .attr('y1', 20)
    .attr('x2', 40)
    .attr('y2', 220)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.6)

svg.append('text')
    .attr('x', 7)
    .attr('y', 15)
    .text('Arrest Rate')
    .attr('fill', 'gray')

svg.append('text')
    .attr('x', 0)
    .attr('y', 115)
    .text('25.22')
    .attr('fill', 'gray')

svg.append('rect')
    .attr('x', 180)
    .attr('y', 220 - 25.22 * 4)
    .attr('width', 20)
    .attr('height', 25.22 * 4)
    .attr('fill', '#522546')

svg.append('text')
    .attr('x', 160)
    .attr('y', 240)
    .text('Average')
    .attr('fill', 'gray')

svg.append('text')
    .attr('x', 250)
    .attr('y', 225)
    .text('Year')
    .attr('fill', 'gray')

svg.append('line') // x 축 
    .attr('x1', 350)
    .attr('y1', 70)
    .attr('x2', 750)
    .attr('y2', 70)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.6)

svg.append('line') // y 축
    .attr('x1', 450)
    .attr('y1', 20)
    .attr('x2', 450)
    .attr('y2', 170)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.6)

svg.append('line') // y 축
    .attr('x1', 550)
    .attr('y1', 20)
    .attr('x2', 550)
    .attr('y2', 170)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.6)

svg.append('text')
    .attr('x', 380)
    .attr('y', 50)
    .text('Year')
    .attr('fill', 'gray')

svg.append('text')
    .attr('x', 480)
    .attr('y', 50)
    .text('Area')
    .attr('fill', 'gray')

svg.append('text')
    .attr('x', 610)
    .attr('y', 50)
    .text('Crime Type')
    .attr('fill', 'gray')

svg.append('line') // x 축 
    .attr('x1', 940)
    .attr('y1', 220)
    .attr('x2', 1140)
    .attr('y2', 220)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.6)

svg.append('line') // y 축
    .attr('x1', 940)
    .attr('y1', 20)
    .attr('x2', 940)
    .attr('y2', 220)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.6)

svg.append('text')
    .attr('x', 907)
    .attr('y', 15)
    .text('Arrest Rate')
    .attr('fill', 'gray')
svg.append('text')
    .attr('x', 1150)
    .attr('y', 225)
    .text('Types')
    .attr('fill', 'gray')

svg.append('text')
    .attr('x', 930)
    .attr('y', 240)
    .text('Related')
    .attr('fill', 'gray')
    .attr('transform', 'rotate(-19) translate(-130,310)')

svg.append('text')
    .attr('x', 970)
    .attr('y', 230)
    .text('Total')
    .attr('fill', 'gray')
    .attr('transform', 'rotate(-19) translate(-100,340)')

svg.append('text')
    .attr('x', 1000)
    .attr('y', 250)
    .text('Unrelated')
    .attr('fill', 'gray')
    .attr('transform', 'rotate(-19) translate(-100,340)')
svg.append('line') // x 축 
    .attr('x1', 940)
    .attr('y1', 220 - 25.22 * 4)
    .attr('x2', 1100)
    .attr('y2', 220 - 25.22 * 4)
    .attr('stroke', 'gray')
    .attr('stroke-width', 0.6)
    .style("stroke-dasharray", 5)
svg.append('text')
    .attr('x', 1130)
    .attr('y', 115)
    .text('25.22')
    .attr('fill', 'gray')
function tt() {
    svg.append('rect')
        .attr('x', 80)
        .attr('y', 20)
        .attr('width', 20)
        .attr('height', 220)
        .attr('fill', 'white')
    svg.append('line') // x 축 
        .attr('x1', 40)
        .attr('y1', 220 - 25.22 * 4)
        .attr('x2', 200)
        .attr('y2', 220 - 25.22 * 4)
        .attr('stroke', 'white')
        .attr('stroke-width', 0.6)
        .style("stroke-dasharray", 5)


    svg.append('line') // x 축 
        .attr('x1', 40)
        .attr('y1', 220 - 25.22 * 4)
        .attr('x2', 200)
        .attr('y2', 220 - 25.22 * 4)
        .attr('stroke', 'gray')
        .attr('stroke-width', 0.6)
        .style("stroke-dasharray", 5)

    svg.append('rect')
        .attr('x', 80)
        .attr('y', 220 - data_line[target.value] * 4)
        .attr('width', 20)
        .attr('height', data_line[target.value] * 4)
        .attr('fill', '#88304e')

    svg.append('rect')
        .attr('x', 70)
        .attr('y', 225)
        .attr('width', 60)
        .attr('height', 20)
        .attr('fill', 'white')

    svg.append('text')
        .attr('x', 70)
        .attr('y', 240)
        .text(Number(target.value) + 2009)
        .attr('fill', 'gray')
    svg.append('rect')
        .attr('x', 370)
        .attr('y', 85)
        .attr('width', 60)
        .attr('height', 20)
        .attr('fill', 'white')

    svg.append('text')
        .attr('x', 380)
        .attr('y', 100)
        .text(Number(target.value) + 2009)
        .attr('fill', 'gray')

    svg.append('rect')
        .attr('x', 470)
        .attr('y', 85)
        .attr('width', 60)
        .attr('height', 80)
        .attr('fill', 'white')

    svg.append('text')
        .attr('x', 487)
        .attr('y', 100)
        .text(data_area[9 - (target.value)][0])
        .attr('fill', 'gray')

    svg.append('text')
        .attr('x', 487)
        .attr('y', 130)
        .text(data_area[9 - (target.value)][1])
        .attr('fill', 'gray')

    svg.append('text')
        .attr('x', 487)
        .attr('y', 160)
        .text(data_area[9 - (target.value)][2])
        .attr('fill', 'gray')

    svg.append('rect')
        .attr('x', 570)
        .attr('y', 85)
        .attr('width', 318)
        .attr('height', 80)
        .attr('fill', 'white')

    svg.append('text')
        .attr('x', 587)
        .attr('y', 100)
        .text(data_text[target.value][0])
        .attr('fill', 'gray')

    svg.append('text')
        .attr('x', 587)
        .attr('y', 130)
        .text(data_text[target.value][1])
        .attr('fill', 'gray')

    svg.append('text')
        .attr('x', 587)
        .attr('y', 160)
        .text(data_text[target.value][2])
        .attr('fill', 'gray')

    svg.append('rect')
        .attr('x', 970)
        .attr('y', 20)
        .attr('width', 140)
        .attr('height', 200)
        .attr('fill', 'white')

    svg.append('line') // x 축 
        .attr('x1', 940)
        .attr('y1', 220 - 25.22 * 4)
        .attr('x2', 1100)
        .attr('y2', 220 - 25.22 * 4)
        .attr('stroke', 'white')
        .attr('stroke-width', 0.6)
        .style("stroke-dasharray", 5)


    svg.append('line') // x 축 
        .attr('x1', 940)
        .attr('y1', 220 - 25.22 * 4)
        .attr('x2', 1100)
        .attr('y2', 220 - 25.22 * 4)
        .attr('stroke', 'gray')
        .attr('stroke-width', 0.6)
        .style("stroke-dasharray", 5)


    svg.append('rect')
        .attr('x', 1030)
        .attr('y', 220 - data_total_crime[9 - (target.value)] * 4)
        .attr('width', 20)
        .attr('height', data_total_crime[9 - (target.value)] * 4)
        .attr('fill', '#fa877f')

    svg.append('rect')
        .attr('x', 970)
        .attr('y', 220 - data_firearm_related[9 - (target.value)] * 4)
        .attr('width', 20)
        .attr('height', data_firearm_related[9 - (target.value)] * 4)
        .attr('fill', '#00918e')

    svg.append('rect')
        .attr('x', 1090)
        .attr('y', 220 - data_Unrelated[9 - (target.value)] * 4)
        .attr('width', 20)
        .attr('height', data_Unrelated[9 - (target.value)] * 4)
        .attr('fill', '#55ae95')
}

svg.append('text')
    .attr('x', 30)
    .attr('y', 300)
    .text('# Annual VS Average Arrest Rate #')
    .attr('fill', 'black')
    .style('font-size', '15px')

svg.append('text')
    .attr('x', 380)
    .attr('y', 260)
    .text('# Annual Top 3 Lowest Arrest Rate Area, Crime Type #')
    .attr('fill', 'black')
    .style('font-size', '15px')

svg.append('text')
    .attr('x', 910)
    .attr('y', 320)
    .text('# Firearm Related Crime Arrest Rate #')
    .attr('fill', 'black')
    .style('font-size', '15px')