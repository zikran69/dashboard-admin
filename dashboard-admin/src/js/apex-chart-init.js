// apex-chart-init.js
var options = {
  chart: {
    type: "bar",
    height: 350,
  },
  series: [
    {
      name: "Kamar",
      data: [12, 19, 3, 5, 2, 12, 19, 3, 5, 2, 3, 5],
    },
  ],
  xaxis: {
    categories: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  colors: ["#00B8D9"],
};

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();
