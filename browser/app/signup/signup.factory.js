app.factory('SignupFactory', function ($http, $log){
  var SignupFactory = {};
  SignupFactory.createUser = function(data){
    return $http.post('/api/users', data)
    .then(function(res){
      console.log(res.data);
      return res.data;
    })
    .catch($log.error);
  };
    return SignupFactory;
});
