var MunroPieChartView = function(chartElement) {
  this.chartElement = chartElement
}

MunroPieChartView.prototype = {
  renderChart: function(munros){
    var container = this.chartElement
    var title = "Munros by Region"

    var counter1 = 0
    var counter2 = 0
    var counter3 = 0
    var counter4 = 0
    var counter5 = 0
    var counter6 = 0
    var counter7 = 0
    var counter8 = 0
    var counter9 = 0
    var counter10 = 0
    var counter11 = 0
    var counter12 = 0
    var counter13 = 0
    var counter14 = 0
    var counter15 = 0

    munros.forEach(function(munro){
      if (munro.region == "Loch Linnhe to Loch Ericht") {counter1++}
      if (munro.region == "Deeside to Speyside - The Cairngorms") {counter2++}
      if (munro.region == "Loch Tay to Rannoch Moor") {counter3++}
      if (munro.region == "Glen Shiel to Loch Mullardoch") {counter4++}
      if (munro.region == "Loch Fyne to Loch Tay") {counter5++}
      if (munro.region == "Glen Shee to Glen Esk") {counter6++}
      if (munro.region == "Loch Mullardoch to Glen Carron") {counter7++}
      if (munro.region == "Speyside to Great Glen") {counter8++}
      if (munro.region == "Rannoch Moor to Loch Linnhe") {counter9++}
      if (munro.region == "Drumochter to Glen Shee") {counter10++}
      if (munro.region == "Loch Tay to Rannoch Moor") {counter11++}
      if (munro.region == "Loch Maree to Loch Broom") {counter12++}
      if (munro.region == "Loch Broom to the Cromarty Firth") {counter13++}
      if (munro.region == "The Islands") {counter14++}
      if (munro.region == "Loch Broom to the Pentland Firth") {counter15++}
    })

    var data = [{
      name: "Number",
      data: [
        { name: "Loch Linnhe to Loch Ericht", y: counter1, color: "#56E2CF" },
        { name: "Deeside to Speyside - The Cairngorms", y: counter2, color: "#56AEE2" },
        { name: "Loch Tay to Rannoch Moor", y: counter3, color: "#5668E2" },
        { name: "Glen Shiel to Loch Mullardoch", y: counter4, color: "#8A56E2"},
        { name: "Loch Fyne to Loch Tay", y: counter5, color: "#CF56E2"},
        { name: "Glen Shee to Glen Esk", y: counter6, color: "#E256AE"},
        { name: "Loch Mullardoch to Glen Carron", y: counter7, color: "#E25668"},
        { name: "Speyside to Great Glen", y: counter8, color: "#E28956"},
        { name: "Rannoch Moor to Loch Linnhe", y: counter9, color: "#E2CF56"},
        { name: "Drumochter to Glen Shee", y: counter10, color: "#AEE256"},
        { name: "Loch Tay to Rannoch Moor", y: counter11, color: "#68E256"},
        { name: "Loch Maree to Loch Broom", y: counter12, color: "#56E289"},
        { name: "Loch Broom to the Cromarty Firth", y: counter13, color: "pink"},
        { name: "The Islands", y: counter14, color: "green"},
        { name: "Loch Broom to the Pentland Firth", y: counter15, color: "purple"},
      ]
    }]

    var PieChart = function(container, title, data){

      this.chart = new Highcharts.Chart({
        chart: {
          type: 'pie',
          renderTo: container
        },
        title: {
          text: title
        },
        series: data
      })
    }

    new PieChart(container, title, data)
  }
}