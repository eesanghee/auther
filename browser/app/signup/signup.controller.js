app.controller('SignupCtrl', function($scope, SignupFactory, $state, $log){
  $scope.submitSignup = function(form){
    console.log('form before user', form);
    SignupFactory.createUser(form)
      .then(function(newUser){
        console.log('newuser', newUser);
        $state.go('home');
      })
      .catch($log.error);
  };
});
