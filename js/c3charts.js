var ctx = document.getElementById("gaugeC3");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            label: ['0','100'],
            data: [12],
            backgroundColor: [
                '#EC407A',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
    }
});

// second chart
// var ctx = document.getElementById("piseC3");
// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ["Setosa", "versicolor", "virginica"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3],
//             backgroundColor: [
//                 '#EC407A',
//                 '#6B79C4',
//                 '#28BEBD'
//             ],
//             borderColor: [
//                 '#EC407A',
//                 '#6B79C4',
//                 '#28BEBD'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         rotation: 1 * Math.PI,
//         circumference: 1 * Math.PI
//     }
// });

new Chart(document.getElementById("pieC3"), {
    type: 'pie',
    data: {
        labels: ["Setosa", "versicolor", "virginica"],
      datasets: [{
            backgroundColor: [
                '#EC407A',
                '#6B79C4',
                '#28BEBD'
            ],
        data: [7,57,36]
      }]
    },
    options: {
      title: {
        display: true,
      }
    }
});