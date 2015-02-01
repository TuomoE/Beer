mainMod.controller('page2Contr',function($scope,$route,Factory){

    $scope.my = {show:false};

    var index_temp;

    Factory.getAllOpinions().then(function(data){
        
        $scope.opinions = data;
    });

    $scope.delete = function(index){

        Factory.deleteOpinion(index).then(function(){

            console.log('delete is now done');

            $route.reload();

        });

    }

    $scope.update = function(index){

        var data = $scope.opinions[index];
        index_temp = index;
        $scope.type = data.type;
        $scope.name = data.name;
        $scope.location = data.location;
        $scope.opinion = data.opinion;
        $scope.my = {show:true};
    }

    $scope.sendUpdate = function(){
        var data = {
            type:$scope.type,
            name:$scope.name,
            location:$scope.location,
            opinion:$scope.opinion
        }

        Factory.updateOpinion(data,index_temp).then(function(){
            $route.reload();
        });
    }
});

    