app.controller('AuthCtrl', [
  "$scope", 
  "$rootScope", 
  "$auth", 
  "$state", 
  "flash",
  function($scope, $rootScope, $auth, $state, flash) {
  $scope.user = {};
  $scope.error = {};
	$scope.login = function() {
		$auth.submitLogin($scope.user)
        .then(function(resp) {
          // handle success response
          
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

  $scope.handleSignOutBtnClick = function() {
      $auth.signOut()
        .then(function(resp) {
          // handle success response
          $scope.user = {};
        })
        .catch(function(resp) {
          // handle error response
          $scope.error = resp;
        });
    };

  $scope.signedIn = false;

  // Auth.currentUser().then(function(user) {
  //  $scope.user = user;
  // });

  // $scope.$on('devise:new-registration', function(e, user) {
  //  $scope.user = user;
  // });

  // flash.register();
 //   $state.go('equipSetup');

   $rootScope.$on('auth:invalid', function(e) {
      console.log(e);
      flash.error('Please sign in or register', e.errors);
   });

  $rootScope.$on('auth:login-success', function(e, user) {
    flash.login();
    $state.go('home');
    $scope.user = user;
    console.log($scope.user);
    $scope.signedIn = true;
  });

  $rootScope.$on('auth:login-error', function(e, reason) {
      flash.error('auth failed because', reason.errors[0]);
  });

  // if(!$scope.signedIn) {
  //   $rootScope.$on('auth:validation-success', function(e, user) {
  //     $scope.user = user;
  //     $scope.signedIn = true;
  //   });
  // }

  $rootScope.$on('auth:logout-success', function(e, user) {
    flash.logout();
    $state.go('home');
    $scope.user = {};
    $scope.signedIn = false;
  });
}])