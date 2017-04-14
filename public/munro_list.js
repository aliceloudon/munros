var MunroList = function(url){
  this.url = url
  this.munros = []
}

MunroList.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest()
    request.open("GET", this.url)
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText
        this.munros = JSON.parse(jsonString)
        console.log(this.munros)
        callback(this.munros)
      }
    }.bind(this)
    request.send()
  }

}