var MunroDetailsView = function(detailsElement){
  this.detailsElement = detailsElement
}

MunroDetailsView.prototype = {

  render: function(munro){
    var pTag = document.createElement('p')
    pTag.innerText = munro.name
    this.detailsElement.appendChild(pTag)
  },

  clear: function(){
    this.detailsElement.innerHTML = ''
  }

}