$(document).on('ready', function(){
  $('.arrow-left').on('click', function(e){
    event.preventDefault();

    var currentUnformattedDate = $('#ee-subtitle-container').text()

    var currentDate = currentUnformattedDate.substring(6,10) + "-" + currentUnformattedDate.substring(0,2) + "-" + currentUnformattedDate.substring(3,5);

    console.log(currentDate);

    request1 = $.ajax({
      method: 'GET',
      url: '/sessioninfo?current_date=' + currentDate
    });

    response1 = request1.done(function(response){
      console.log(response);

      $('#script-container').empty();
      $('#script-container').append(response);

      eval(document.getElementById("highcharts-script").innerHTML);
    });

    request2 = $.ajax({
      method: 'GET',
      url: '/sessionheader?current_date=' + currentDate
    });

    response2 = request2.done(function(response){
      var response_array = response.split("&")
      var title = response_array[0]
      var unformatted_date = response_array[1]
      var date = unformatted_date.substring(5,7) + "-" + unformatted_date.substring(8,10) + "-" + unformatted_date.substring(0,4)
      $('#ee-title-container').text(title);
      $('#ee-subtitle-container').text(date);
      $('.arrow-right').css('color', '#000');
    })
  });
})

// $(document).on('ready page:load', function(){
//   console.log("R U REDY 4 FREDDY")
//
//   $.ajax({
//     method: 'GET',
//     url: 'http://humanize-api-test.herokuapp.com/tests/5'
//     })
//   .done(function(response){
//       console.log('success');
//       console.log(response);
//       console.log(response.test.testing_1);
//
//       var title = response.test.testing_1;
//       var dummyValue = response.test.testing_2;
//
//       mainHighchartsGenerator(
//         {
//           chartId: 'main-chart-container',
//           titleText: title,
//           valueInt: dummyValue
//         }
//       );
//
//       areaHighChartsGenerator({
//         chartId: 'area-chart-container'
//       });
//
//       activityGaugeHighchartsGenerator({
//         chartId: 'activity-gauge-container'
//       })
//
//     })
//   .fail(function(response){
//       console.log('fail');
//       console.log(response);
//     })
// });
//
// // function to generate main chart
// function mainHighchartsGenerator(args) {
//     // step 1: AJAX request (on page load)
//     // step 2: create highchart in the callback
//     Highcharts.chart(args.chartId, {
//         chart: {
//             type: 'column'
//         },
//           title: {
//             text: ""
//           },
//         xAxis: {
//             categories: [
//                 'My surroundings promote a productive and collaborative environment.',
//                 'I feel supported and accepted by my coworkers.',
//                 'I value and respect diversity in gender, age, and culture.'
//             ],
//             labels: {
//               style: {
//                 fontSize: '16px',
//                 // fontWeight: 'bold'
//               }
//             },
//             crosshair: true
//         },
//         yAxis: {
//             min: 0,
//             title: {
//                 text: 'Gucci'
//             }
//         },
//         tooltip: {
//             headerFormat: '<span style="font-size:15px, width: 5em;">{series.question}</span><table>',
//             // pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//                 // '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
//             footerFormat: '</table>',
//             // shared: true,
//             useHTML: true
//         },
//         // tooltip: {
//         //   formatter: function() {
//         //     return 'I feel supported and accepted by my coworkers.'
//         //   }
//         // },
//         plotOptions: {
//             column: {
//                 pointPadding: 0.2,
//                 borderWidth: 0
//             }
//         },
//         series: [{
//             name: 'Before-survey',
//             data: [args.valueInt, args.valueInt, args.valueInt],
//             question: ["Q1", "Q2", "Q3"]
//
//         }, {
//             name: 'After-survey',
//             data: [5, 4, 5]
//
//         }
//
//         // , {
//         //     name: 'Something else',
//         //     data: [2, 3, 6]
//         //
//         // }
//       ]
//    }
//   );
// };
//
// // function to generate peripheral area chart
// function areaHighChartsGenerator(args) {
//     Highcharts.chart(args.chartId, {
//         chart: {
//             type: 'areaspline'
//         },
//         title: {
//             text: ''
//         },
//         legend: {
//             layout: 'vertical',
//             align: 'left',
//             verticalAlign: 'top',
//             x: 150,
//             y: 100,
//             floating: true,
//             borderWidth: 1,
//             backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
//         },
//         xAxis: {
//             categories: [
//                 'Monday',
//                 'Tuesday',
//                 'Wednesday',
//                 'Thursday',
//             ]
//         },
//         yAxis: {
//             title: {
//                 text: 'Fruit units'
//             }
//         },
//         tooltip: {
//             shared: true,
//             valueSuffix: ' units'
//         },
//         credits: {
//             enabled: false
//         },
//         plotOptions: {
//             areaspline: {
//                 fillOpacity: 0.5
//             }
//         },
//         series: [{
//             name: 'John',
//             data: [3, 4, 10, 12]
//         }, {
//             name: 'Jane',
//             data: [1, 3, 5, 4]
//         }]
//     });
// };
//
// // function to generate peripheral activity gauge chart
// function activityGaugeHighchartsGenerator(args) {
//
//     Highcharts.chart(args.chartId, {
//
//         chart: {
//             type: 'solidgauge',
//             marginTop: 50
//         },
//
//         title: {
//             text: ''
//         },
//
//         tooltip: {
//             borderWidth: 0,
//             backgroundColor: 'none',
//             shadow: false,
//             style: {
//                 fontSize: '16px',
//                 color: '#000'
//             },
//             pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
//             positioner: function (labelWidth) {
//                 return {
//                     x: 350 - labelWidth / 2,
//                     y: 180
//                 };
//             }
//         },
//
//         pane: {
//             startAngle: 0,
//             endAngle: 360,
//             background: [{ // Track for Move
//                 outerRadius: '112%',
//                 innerRadius: '88%',
//                 backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
//                 borderWidth: 0
//             }, { // Track for Exercise
//                 outerRadius: '87%',
//                 innerRadius: '63%',
//                 backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
//                 borderWidth: 0
//             }, { // Track for Stand
//                 outerRadius: '62%',
//                 innerRadius: '38%',
//                 backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
//                 borderWidth: 0
//             }]
//         },
//
//         yAxis: {
//             min: 0,
//             max: 100,
//             lineWidth: 0,
//             tickPositions: []
//         },
//
//         plotOptions: {
//             solidgauge: {
//                 borderWidth: '34px',
//                 dataLabels: {
//                     enabled: false
//                 },
//                 linecap: 'round',
//                 stickyTracking: false
//             }
//         },
//
//         series: [{
//             name: 'Q #1',
//             borderColor: Highcharts.getOptions().colors[0],
//             data: [{
//                 color: Highcharts.getOptions().colors[0],
//                 radius: '100%',
//                 innerRadius: '100%',
//                 y: 80
//             }]
//         }, {
//             name: 'Q #2',
//             borderColor: Highcharts.getOptions().colors[1],
//             data: [{
//                 color: Highcharts.getOptions().colors[1],
//                 radius: '75%',
//                 innerRadius: '75%',
//                 y: 65
//             }]
//         }, {
//             name: 'Q #3',
//             borderColor: Highcharts.getOptions().colors[2],
//             data: [{
//                 color: Highcharts.getOptions().colors[2],
//                 radius: '50%',
//                 innerRadius: '50%',
//                 y: 50
//             }]
//         }]
//     },
//
//     /**
//      * In the chart load callback, add icons on top of the circular shapes
//      */
//     function callback() {
//     });
//
//
// };
