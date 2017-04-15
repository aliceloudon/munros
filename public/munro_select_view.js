var MunroSelectView = function(selectElement){
  this.selectElement = selectElement
}

MunroSelectView.prototype = {

  render: function(munros){
    munros.sort(function(a, b){
      var nameA  = a.name
      var nameB = b.name
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    munros.forEach(function(munro, index){
      var optionElement = document.createElement('option')
      optionElement.value = index
      optionElement.text = munro.name
      this.selectElement.appendChild(optionElement)
    }.bind(this))
  }

}