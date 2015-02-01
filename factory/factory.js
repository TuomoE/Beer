mainMod.factory('Factory',function($q,$resource){
    
    var factory = {};
    
    factory.getBeerArray = function(){
        
        var deferred = $q.defer();
          
        $resource('/beer/:id',{id:'types'}).get(function(data){
        
            deferred.resolve(data.types);
        
        });
        
        return deferred.promise;
    }  

    
  factory.postOpinion = function(data){

      $resource('/beer',{},{post:{method:'POST'}}).post(data);

  }

  factory.getAllOpinions = function(){

      var deferred = $q.defer();

      $resource('/beer/:id',{id:'all'}).get(function(data){

          deferred.resolve(data.allOpinions);

      });

      return deferred.promise;

  }

  factory.deleteOpinion = function(delete_id){

      var deferred = $q.defer();

      $resource('/beer/:id',{id:delete_id},{delete:{method:'DELETE'}}).delete(function(){

          deferred.resolve();

      });

      return deferred.promise;

  }

  factory.updateOpinion = function(data,index){

      var deferred = $q.defer();

      $resource('/beer/:id',{id:index},{put:{method:'PUT'}}).put(data,function(){

          deferred.resolve();

      });

      return deferred.promise;

  }

  return factory;
});