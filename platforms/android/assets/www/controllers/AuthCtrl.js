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

// this is to test if there is an exising login cookie so that that person doesnt have to login again
  if(!$scope.signedIn) {
    $rootScope.$on('auth:validation-success', function(e, user) {
      $scope.user = user;
      $scope.signedIn = true;
    });
  }


  $rootScope.$on('auth:validation-error', function(e, user) {
    console.log(e);
    $state.go('home');
    flash.error('Please sign in or register', e.errors);
    $scope.user = {};
    $scope.signedIn = false;
  });
// this will flash if they are not signed in and they are trying to do some shady stuff
  $rootScope.$on('auth:invalid', function(e) {
    console.log(e);
    $state.go('home');
    flash.error('Please sign in or register', e.errors);
    $scope.user = {};
    $scope.signedIn = false;
  });

// all login events 
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

  $rootScope.$on('auth:logout-success', function(e, user) {
    flash.logout();
    $state.go('home');
    $scope.user = {};
    $scope.signedIn = false;
  });

// registration events

  $rootScope.$on('auth:registration-email-success', function(e, user) {
    flash.register();
    $state.go('equipSetup');
    $scope.user = user;
    $scope.signedIn = true;
  });
}]);