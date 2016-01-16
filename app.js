angular.module('app', [])
  .controller('TodoListController', function() {
    var app = this
    app.test = "test"
    app.checkBorder = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false] 
    app.click = function(num ){
      if(app.checkBorder[num-1]==false){
        
        console.log(app.checkBorder[num-1])
        $(".border"+num).addClass('active');
        app.checkBorder[num-1]=true
      }
      else if(app.checkBorder[num-1]==true){
          $(".border"+num).removeClass('active');
          console.log(app.checkBorder[num-1])
          app.checkBorder[num-1]=false
      }
      
      
    }
  })