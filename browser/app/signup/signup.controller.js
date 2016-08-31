app.controller('SignupCtrl', function($scope, AuthFactory, $state, $log){
  $scope.submitSignup = function(form){
    console.log('form before user', form);
    AuthFactory.createUser(form)
      .then(function(newUser){
        console.log('newuser', newUser);
        $state.go('home');
      })
      .catch($log.error);
  };
});
