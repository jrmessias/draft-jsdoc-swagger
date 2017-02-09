/**
 * Express test
 *
 * @param {int} size Tamanho de alguma coisa
 * @return {app} express
 */

var express = require('express');
var router = express.Router();

/**
 * Return get /
 *
 * @description Return the location /
 * @module Main
 * 
 * @copyright Júnior Messias <jrmessias>
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
