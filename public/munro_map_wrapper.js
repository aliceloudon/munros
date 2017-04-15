var MunroMapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {center: coords, zoom: zoom})
}

MunroMapWrapper.prototype = {

  addMarker: function(coords, text){
    var marker = new google.maps.Marker({ position: coords, map: this.googleMap })

    var infowindow = new google.maps.InfoWindow({
      content: text
    })

    infowindow.open(this.googleMap, marker)
  }
  
}