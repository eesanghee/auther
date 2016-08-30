// login.controller.js

'use strict';

app.controller('LoginCtrl', function ($scope, LoginFactory, $state, $log) {
	$scope.submitLogin = function(form){
		LoginFactory.fetchUser(form)
		.then(function(foundUser){
			console.log("---Login user/pwd found---");
			$state.go('home');
		})
		.catch($log.error);
	};

});

