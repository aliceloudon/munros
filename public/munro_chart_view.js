var MunroChartView = function(chartElement) {
  this.chartElement = chartElement
}

MunroChartView.prototype = {

  renderChart: function(munros){
    var container = this.chartElement
    var title = "Munros"

    var counter1 = 0
    var counter2 = 0
    var counter3 = 0
    var counter4 = 0

    munros.forEach(function(munro){
      if (munro.height < 1000) {
        counter1++
      }
      if (munro.height > 1000 && munro.height <= 1100) {
        counter2++
      }
      if (munro.height > 1100 && munro.height <= 1200) {
        counter3++
      }
      if (munro.height > 1200 && munro.height <= 1300) {
        counter4++
      }
    })

    var data = [
        {
        name: "Number of Munros",
        data: [counter1, counter2, counter3, counter4]
        }
      ]

    var categories = ["900-1000m", "1000-1100m", "1100-1200m", "1300-1400m"]

    var ColumnChart = function(container, title, data, categories) {

      this.chart = new Highcharts.Chart({
        chart: {
          type: 'column',
        renderTo: container
        },
        title: {
          text: title
        },
        series: data,
        xAxis: {
          categories: categories
        }
      })

    }
    new ColumnChart(container, title, data, categories)

  }
  
}