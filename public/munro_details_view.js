var MunroDetailsView = function(detailsElement){
  this.detailsElement = detailsElement
}

MunroDetailsView.prototype = {

  render: function(munro){
    var pTag = document.createElement('p')
    pTag.innerText = "Munro name: " + munro.name + "\n" + "Height: " + munro.height + "\n" + "Latitude/Longitude: " + munro.latlng_lat + "/" + munro.latlng_lng + "\n" + "Region: " + munro.region + "\n" + "Meaning of the name: " + munro.meaning
    this.detailsElement.appendChild(pTag)
  },

  clear: function(){
    this.detailsElement.innerHTML = ''
  }

}