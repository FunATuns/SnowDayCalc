Weather.setApiKey("345acdc4c0d8c678b264e4396d5b6519");
setTimeout(function () {
    Weather.getCurrent("Kansas City", function(current) {
        console.log(
          ["currently:",current.temperature(),"and",current.conditions()].join(" ")
        );
      });
      
},1000);
