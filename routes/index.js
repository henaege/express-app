var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { students: ['Marissa', 'Merilee', 'Chris', 'Stephen', 'Drew', 'Ian', 'Shane', 'Chad', 'Guido', 'Porscha', 'Carla', 'Yingrong', 'Hayes', 'Michael', 'Nick', 'Daniel'] });
});

router.get('/reverse', (req, res, data)=> {
  res.render('reverse', {students: ['Marissa', 'Merilee', 'Chris', 'Stephen', 'Drew', 'Ian', 'Shane', 'Chad', 'Guido', 'Porscha', 'Carla', 'Yingrong', 'Hayes', 'Michael', 'Nick', 'Daniel']});
});



module.exports = router;
