var linelabels = ["January", "February", "March", "April", "May", "June"]
var linedata = {
    labels: linelabels,
    datasets: [{
        label: '初めてのグラフ用データセット',
        borderColor: 'rgb(150, 50, 60)',
        backgroundColor: 'rgb(255, 100, 130)',
        data: [0, 10, 15, 3, 60, 10],
    }]
};
// rgb は左から赤、緑、青　で0 ~ 255の値で指定できる
// CSSでdivタグのサイズを変えることでグラフの大きさ変えられる
var lineconfig = {
    type: 'line',
    linedata,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineconfig
);

// グラフを作るときはlabel、 data、 configの3つの変数を作る

// <block:setup:1>
const barlabels = ["January", "February", "March", "April", "May", "June"];
const bardata = {
  labels: barlabels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
// </block:setup>

// <block:config:0>
const barconfig = {
  type: 'bar',
  data: bardata,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
// </block:config>

// module.exports = {
//   actions: [],
//   config: barconfig,
// };

var barChart = new Chart(
    // document.getElementById('barChart'),
    $("#barChart"),
    barconfig,
);

// constで作った変数は後から変更できない。varはできる。constは後から代入する作業ができない。
// グラフ関連は後からデータ変えることは少ないので大体constでやる
