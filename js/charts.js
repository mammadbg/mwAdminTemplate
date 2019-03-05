// chart js

var ctx = document.getElementById('myChartJs').getContext('2d');

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      label: "apples",
      backgroundColor: 'rgb(164, 207, 229,.7)',
      borderColor: 'rgb(164, 207, 229)',
      data: [0, 10, 5, 2, 20, 30, 45],

    },
    {
      label: "oranges",
      backgroundColor: 'rgb(188, 194, 231, .7)',
      borderColor: 'rgb(164, 207, 229)',
      data: [5, 2, 68, 30, 45, 67, 35],
    }]
  },

  // Configuration options go here
  options: {}
});


// new Chart(document.getElementById('barChartJs'),{
//   type="bar",
//   data:{
//     labels:["M", "T", "W", "T", "F", "S", "S"],
//     datasets: [
//         {
//       label: "apples",
//       backgroundColor: 'rgb(164, 207, 229,.7)',
//       borderColor: 'rgb(164, 207, 229)',
//       data: [11, 67, 75, 56, 63, 31, 55],
//     },
//     {
//         label: "apples",
//         backgroundColor: 'rgb(164, 207, 229,.7)',
//         borderColor: 'rgb(164, 207, 229)',
//         data: [11, 67, 75, 56, 63, 31, 55],
//     }
// ]

// },
// options: {
//   legend: { display: false },
//   title: {
//     display: true,
//     text: 'Predicted world population (millions) in 2050'
//   }
// }
// });



new Chart(document.getElementById("barChartJs"), {
    type: 'bar',
    data: {
    labels:["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "apples",
          backgroundColor: ["rgb(188, 194, 231)"],
          data: [2478,5267,1734,1784,2433,1222,2333]
        },
        {
            label: "oranges",
            backgroundColor: ["rgb(164, 207, 229,.9)","rgb(164, 207, 229,.9)","rgb(164, 207, 229,.9)","rgb(164, 207, 229,.9)","rgb(164, 207, 229,.9)","rgb(164, 207, 229,.9)","rgb(164, 207, 229,.9)"],
            data: [2478,5267,734,784,433,555,1777]
          }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'apples',
      }
    }
});

new Chart(document.getElementById("radarChartJs"), {
    type: 'radar',
    data: {
    labels:["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "apples",
          fill: true,
          backgroundColor: "rgba(188, 194, 231,.2)",
          borderColor: "rgba(188, 194, 231)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(188, 194, 231)",
          data: [15,65,78,96,34,36,75]
        }, {
          label: "oranges",
          fill: true,
          backgroundColor: "rgba(164, 207, 229,.3)",
          borderColor: "rgba(164, 207, 229,.9)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(164, 207, 229,.9)",
          pointBorderColor: "#fff",
          data: [25,56,34,36,75,]
        }
      ]
    },
    options: {
      title: {
        display: true,
        // text: 'Distribution in % of world population'
      }
    }
});

new Chart(document.getElementById("polarChartJs"), {
    type: 'polarArea',
    data: {
    labels:["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "apples",
          fill: true,
          backgroundColor: ["rgba(188, 194, 231,.2)","red","blue","orange","yellow","purple"],
          borderColor: "rgba(188, 194, 231)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(188, 194, 231)",
          data: [15,65,78,96,34,36,75]
        }
      ]
    },
    options: {
      title: {
        display: true,
        // text: 'Distribution in % of world population'
      }
    }
});


new Chart(document.getElementById("pieChartJs"), {
    type: 'pie',
    data: {
    labels:["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "apples",
          fill: true,
          backgroundColor: ["rgba(188, 194, 231,.2)","red","blue","orange","yellow","purple"],
          borderColor: "rgba(188, 194, 231)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(188, 194, 231)",
          data: [15,65,78,96,34,36,75]
        }
      ]
    },
    options: {
      title: {
        display: true,
        // text: 'Distribution in % of world population'
      }
    }
});


new Chart(document.getElementById("doughnutChartjs"), {
    type: 'doughnut',
    data: {
    labels:["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "apples",
          fill: true,
          backgroundColor: ["rgba(188, 194, 231,.2)","red","blue","orange","yellow","purple"],
          borderColor: "rgba(188, 194, 231)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(188, 194, 231)",
          data: [15,65,78,96,34,36,75]
        }
      ]
    },
    options: {
      title: {
        display: true,
        // text: 'Distribution in % of world population'
      }
    }
});