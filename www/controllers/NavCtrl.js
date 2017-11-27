app.controller("NavCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {
	$scope.signedIn = false;
	// $scope.logout = Auth.logout;

	// Auth.currentUser().then(function(user) {
	// 	$scope.user = user;
	// });

	// $scope.$on('devise:new-registration', function(e, user) {
	// 	$scope.user = user;
	// });

	$rootScope.$on('auth:login-success', function(e, user) {
		$scope.user = user;
		alert('You are logged in ' + user.email);
		$scope.signedIn = true;
	});

	if(!$scope.signedIn) {
		$rootScope.$on('auth:validation-success', function(e, user) {
			$scope.user = user;
			$scope.signedIn = true;
		});
	}

	$scope.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
        	$scope.user = {};
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };

    $rootScope.$on('auth:logout-success', function(e, user) {
		alert('You are signed out');
		$scope.signedIn = false;
	});
}])