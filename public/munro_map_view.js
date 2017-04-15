var MunroMapView = function(munroElement){
  this.munroElement = munroElement
}

MunroMapView.prototype = {

  render: function(munroElement){
    var center = { lat: munroElement.latlng_lat, lng: munroElement.latlng_lng }
    var text = munroElement.name
    var container = document.querySelector('#main-map')
    var mainMap = new MunroMapWrapper(container, center, 11)
    mainMap.addMarker(center, text)
  }

}