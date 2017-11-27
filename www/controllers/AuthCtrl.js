app.controller('AuthCtrl', ["$scope", "$state", "$auth", function($scope, $state, $auth) {
	$scope.login = function() {
		$auth.submitLogin($scope.user)
        .then(function(resp) {
         	
        })
        .catch(function(resp) {
          // handle error response
        });
	};

	$scope.register = function() {
		$auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
	};
}])