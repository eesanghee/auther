// login.controller.js

'use strict';

app.controller('LoginCtrl', function ($scope, AuthFactory, $state, $log) {
	$scope.submitLogin = function(form){
		AuthFactory.fetchUser(form)
		.then(function(foundUser){
			console.log("---Login user/pwd found---");
			$state.go('home');
		})
		.catch($log.error);
	};

});

app.controller('LogoutCtrl', function ($scope, AuthFactory, $state, $log) {
  $scope.logout = function(){
    console.log('here1');
    AuthFactory.logout()
    .then(function(){
      console.log('logged out');
    });
  };

});

// connect.sid=s%3AvaMvC5y6apQcjA3OyCH-Bd649pfbZE-Y.pSF4BEO%2BXK%2BH%2F83o3YXD%2FXPvAFoYAM8ESFzqc7vnaJQ
