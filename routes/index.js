var express = require('express');
var faker = require('faker');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 *Faker data
 */
router.get('/fakers', function  (req, res) {

  var data1 = "";
  req.on('data', function (chunk) {
    data1 += chunk;
  });

  var randomName = faker.name.firstName(); // Rowan Nikolaus
  var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  var randomLastName = faker.name.lastName(); // random contact card containing many properties

  var persons =[];

  for(var i=0; i< 10;i++){

    randomName = faker.name.firstName();
    randomEmail = faker.internet.email();
    randomLastName = faker.name.lastName();

    var person = {person:{
      name:randomName,
      lastName:randomLastName,
      email:randomEmail,
      data:data1
    }
    };

    persons.push(person);

  }

  res.json(persons);
});

module.exports = router;
