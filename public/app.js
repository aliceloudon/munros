var app = function(){
  var munroList = new MunroList("https://munroapi.herokuapp.com/api/munros")
  var munroSelectView = new MunroSelectView(document.querySelector('#munros'))
  var munroDetailsView = new MunroDetailsView(document.querySelector('#munro-details'))
  var munroMapView = new MunroMapView(document.querySelector('#main-map'))
  var munroChartView = new MunroChartView(document.querySelector('#column-chart'))
  var munroPieChartView = new MunroPieChartView(document.querySelector('#pie-chart'))

  munroList.getData(function(munros){
    munroSelectView.render(munros)
    munroSelectView.selectElement.addEventListener('change', function(){
      munroDetailsView.clear()
      munroDetailsView.render(munros[this.value])
      munroMapView.render(munros[this.value])
    })
    munroChartView.renderChart(munros)
    munroPieChartView.renderChart(munros)
  })

}

window.onload = app