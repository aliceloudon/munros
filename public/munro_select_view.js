var MunroSelectView = function(selectElement){
  this.selectElement = selectElement
}

MunroSelectView.prototype = {

  render: function(munros){
    // console.log(munros)
    munros.forEach(function(munro, index){
      var optionElement = document.createElement('option')
      optionElement.value = index
      optionElement.text = munro.name
      this.selectElement.appendChild(optionElement)
    }.bind(this))
  }

}