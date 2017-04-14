var app = function(){
  var munroList = new MunroList("https://munroapi.herokuapp.com/api/munros")

  munroList.getData(function(munros){
    
  })

}

window.onload = app