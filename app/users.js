var express = require('express');

var router = express.Router();

var beerArray = [];

router.get('/',function(req,res){
    
    res.send(empty);
});

router.get('/all',function(req,res){
    
    res.send(empty);
});

router.get('/beer',function(req,res){
    
    var beers = {
        types:['Ale',
               'Lager',
               'Stouts & Porters',
               'Malt']
    }
    
    res.send(beers);
});



router.post('/',function(req,res){
    
  //  beerArray.push(req.body);
//    res.send('Added to server array');
});

router.put('/',function(req,res){
});

router.delete('/',function(req,res){
    
  //  dummy.splice(req.query.id,1);
//    res.send('We are ok!');
});


module.exports = router;