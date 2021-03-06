TEST_GLOBALS = {};

var service = require('../index.js');
var serviceInstance = new service();

var config = {
	url:'mongodb://127.0.0.1:27017/happn'
};

serviceInstance.initialize(config, function(e){

	if (e) throw e;

	TEST_GLOBALS.mongoService = serviceInstance;

	var testConfig = {
		contextPath:__dirname + '/context',
		timeout:5000,
		noBenchmarket:true
	};

	var happn_tests = require('happn-tests').instantiate(testConfig);

	happn_tests.run(function(e){
		if (e) {
			console.log('tests ran with failures', e);
			process.exit(1);
		}
		else{
			console.log('tests passed ok');
			process.exit(0);
		}
	});

});




