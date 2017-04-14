var app = function(){
  var munroList = new MunroList("https://munroapi.herokuapp.com/api/munros")
  var munroSelectView = new MunroSelectView(document.querySelector('#munros'))
  var munroDetailsView = new MunroDetailsView(document.querySelector('#munro-details'))

  munroList.getData(function(munros){
    munroSelectView.render(munros)
  })

}

window.onload = app