/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express')
var http = require('http')
var request = require('request')

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv')

// create a new express server
var app = express()

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'))

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv()

// express routing
// respond with "hello world" when a GET request is made to the homepage
/*	var industries = "";
	http.get('http://ibm-techfinder.mybluemix.net/p2pApp/v1/industries', function(resp){
	  resp.on('data', function(chunk){
	    console.log(chunk)
	    industries = chunk
	  })
	})
	//var industries = [{"name":"Telecommunications","id":9001,"scoring":1},{"name":"Government","id":9002,"scoring":1},{"name":"Consumer Products & Retail","id":9003,"scoring":1},{"name":"Aerospace","id":9004,"scoring":1},{"name":"Automotive","id":9005,"scoring":1},{"name":"Banking & Financial Markets","id":9006,"scoring":1},{"name":"Chemical & Petroleum","id":9007,"scoring":1},{"name":"Education","id":9008,"scoring":1},{"name":"Electronics","id":9009,"scoring":1},{"name":"Energy & Utilities","id":9010,"scoring":1},{"name":"Healthcare","id":9011,"scoring":1},{"name":"Industrial Sector","id":9012,"scoring":1},{"name":"Insurance","id":9013,"scoring":1},{"name":"Life Sciences","id":9014,"scoring":1},{"name":"Media & Entertainment","id":9015,"scoring":1},{"name":"Travel & Transportation","id":9016,"scoring":1}]
  	res.send(industries)
})

app.get('/p2pApp/v1/businessTypes', function(req, res) {
	console.log('req', req)
	var businessTypes = [{"name":"Consultant","id":7001,"scoring":1},{"name":"Systems Integrator","id":7002,"scoring":1},{"name":"Software Developer","id":7003,"scoring":1},{"name":"Software Vendor","id":7004,"scoring":1},{"name":"Digital Marketing Agency","id":7005,"scoring":1},{"name":"Education Provider","id":7006,"scoring":1},{"name":"Hardware Reseller","id":7007,"scoring":1},{"name":"Hardware Vendor","id":7008,"scoring":1},{"name":"Software-as-a-Service (non-MSP)s","id":7009,"scoring":1},{"name":"Software Support Provider","id":7010,"scoring":1},{"name":"Maintenance Service Provider","id":7011,"scoring":1},{"name":"Managed Service Provider","id":7012,"scoring":1}]
  	res.send(businessTypes)
})*/

var apiUrl = "https://ibm-techfinder.mybluemix.net/p2pApp/v1"

app.use('/p2pApp/v1', function(req, res) {
  var url = apiUrl + req.url
  console.log('object', req)
  req.pipe(request(url, {json:req.body})).pipe(res)
})

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url)
})