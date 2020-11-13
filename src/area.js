var data = ['THEFT',  'BATTERY',  'CRIMINAL DAMAGE',  'NARCOTICS',  'ASSAULT',  'OTHER OFFENSE',  'BURGLARY',
  'MOTOR VEHICLE THEFT',  'DECEPTIVE PRACTICE',  'ROBBERY',  'CRIMINAL TRESPASS',  'WEAPONS VIOLATION',  'PROSTITUTION',
    'PUBLIC PEACE VIOLATION',  'OFFENSE INVOLVING CHILDREN',  'CRIM SEXUAL ASSAULT',  'SEX OFFENSE',
    'INTERFERENCE WITH PUBLIC OFFICER',  'GAMBLING',  'LIQUOR LAW VIOLATION',  'ARSON',  'HOMICIDE',  'KIDNAPPING',
    'INTIMIDATION',  'STALKING',  'CRIMINAL SEXUAL ASSAULT',  'OBSCENITY',  'CONCEALED CARRY LICENSE VIOLATION',
    'PUBLIC INDECENCY',  'NON-CRIMINAL',  'OTHER NARCOTIC VIOLATION',  'HUMAN TRAFFICKING',  'NON - CRIMINAL',
    'RITUALISM',  'NON-CRIMINAL',  'DOMESTIC VIOLENCE']  ;
var c_data = [1524901, 1323590,  822920,  734567,  457296,  448325,  406765,
        332639,  298967,  271464,  204685,   84604,   69364,   50675,
         50016,   28097,   27575,   17424,   14591,   14447,   12069,
         10717,    6967,    4268,    3795,    2169,     692,     647,
           183,     173,     138,      68,      38,      23,       9,
             1]   ;
var data_sub = [0.5, 1.0, 1.5];
var offset=300;
var svg = d3.select(".area")
    .append("svg")
    .attr('width', 1000)
    .attr('height', 1500)
    .attr('transform', 'translate(0,0)')

var g = svg.append("g");

svg.append("line")
    .attr("x1", 500-offset)
    .attr("y1", 40)
    .attr("x2", 1030-offset)
    .attr("y2", 40)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

svg.append("line")
    .attr("x1", 580-offset)
    .attr("y1", 12)
    .attr("x2", 580-offset)
    .attr("y2", 1480)
    .style("stroke", "black")
    .style("stroke-width", 0.6)

for (var i = 35; i >= 0; i--) {
    svg.append('text')
        .attr('x', 570-offset)
        .attr('y', 65 + i * 40)
        .text(data[i])
        .style('font-size', '13px')
        .attr("text-anchor", "end")
        .attr("font-style", "italic")
        .attr("font-family", "sans-serif")
        .attr("fill", 'gray')
        .attr("transform")

    svg.append('text')
        .attr('x', 610-offset+c_data[i]/3000)
        .attr('y', 65 + i * 40 -5)
        .text((c_data[i]/1000000).toFixed(2))
        .style('font-size', '10px')
        .attr("text-anchor", "end")
        .attr("font-style", "italic")
        .attr("font-family", "sans-serif")
        .attr("fill", 'black')
        .attr("transform")

    svg.append("rect")
        .attr('x', 580-offset)
        .attr('y', 40 + i * 40)
        .attr('width', c_data[i]/3000)
        .attr('height', 30)
        .attr('fill', 'skyblue')

        // .attr("fill", function () {
        //     return ['#c6dcf0', '#b1dcf0', '#a8dcf0', '#9bdcf0', '#90dcf0', '#7cdcf0',
        //     '#72dcf0', '#68dcf0', '#63dcf0', '#5ddcf0', '#52dcf0', '#48dcf0', '#40dcf0', '#40c3f0',
        //   '#38bcf0', '#38aef0', '#349ef0'][i]
        // })
        // On mouseover add a different fill as well as labels
      .on("mouseover", function(d) {
        d3.select(this)
          .attr("fill", "blue");

          //Get this bar's x/y values, then augment for the tooltip
          var xPosition = parseFloat(d3.select(this).attr('x')) + parseFloat(d3.select(this).attr('width')) + 10;
          var yPosition = parseFloat(d3.select(this).attr("y")) + 10;

          //Create the tooltip label
          g.append("text")
             // .data(c_data)
             .attr("id", "tooltip")
             .attr("x", xPosition)
             .attr("y", yPosition)
             .attr("text-anchor", "middle")
             .attr("font-family", "sans-serif")
             .attr("font-size", "11px")
             .attr("font-weight", "bold")
             .attr("fill", "black")
             // .data(c_data)
        })

        .on("mouseout", function(d) {
        d3.select("#tooltip").remove();
        d3.select(this)
        .transition()
          .attr("fill", "skyblue");
      })

    svg.append('text')
        .attr('x', 170 * (i+1)+ 580-offset)
        .attr('y', 30)
        .text(data_sub[i])
        .attr("text-anchor", "end")
        .style('font-size', '16px')
        .attr("font-family", "sans-serif")
        .attr("fill", 'gray')
}


    svg.append("line")
        .attr("x1", 550-offset)
        .attr("y1", 15)
        .attr("x2", 580-offset)
        .attr("y2", 40)
        .style("stroke", "gray")
        .style("stroke-width", 0.6)

    svg.append('text')
        .attr('x', 485-offset)
        .attr('y', 33)
        .text("Crime Type")
        .style('font-size', '13px')
        .attr("font-family", "sans-serif")
        .attr("fill", "gray")

    svg.append('text')
        .attr('x', 550-offset)
        .attr('y', 10)
        .text("100M")
        .style('font-size', '13px')
        .attr("font-family", "sans-serif")
        .attr("fill", "gray")
        // .attr('transform', 'rotate(-90) translate(-590,550)')
