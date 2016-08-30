// login.factory.js

'use strict';

app.factory('LoginFactory', function($http){
	var LoginFactory = {};

	LoginFactory.fetchUser = function(form){
		return $http.post('/login', form)
		.then(function(res){
			return res.data;
		});
	};

	return LoginFactory;
});
