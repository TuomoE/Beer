mainMod.controller('page1Contr',function($scope,$location,Factory){
    
    Factory.getBeerArray().then(function(data){
        
        $scope.types = data;
        
    });
        
    $scope.send = function(){
        var data = {
            type:$scope.beer_type,
            name:$scope.beerName,
            location:$scope.location,
            opinion:$scope.opinion
        }

        Factory.postOpinion(data);
    }
    
    $scope.seeAll = function() {
        
        $location.path("/all");   
    }
    
});


