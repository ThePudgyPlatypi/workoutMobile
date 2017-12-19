var app = angular.module('workout', ['ui.router', 'rails', 'ng-token-auth', 'flashr', 'ngAnimate']);

app.config(['$stateProvider', 
	'$urlRouterProvider', 
	'$authProvider',
	'$compileProvider',
	function($stateProvider, $urlRouterProvider, $authProvider, $compileProvider) {
		$compileProvider.imgSrcSanitizationWhitelist(/^\s*(local|http|https|app|tel|ftp|file|blob|content|ms-appx|x-wmapp0|cdvfile):|data:image\//);

	$stateProvider.state('home', {
		url: "/",
		templateUrl: "views/_home.html",
		controller: "AuthCtrl"
	}).state('workoutStart', {
		url: "/workoutSetup", 
		templateUrl: "views/_workoutSetup.html",
		controller: "WorkoutEngineCtrl",
		resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
	}).state('login', {
		url: "/login",
		templateUrl: "views/_login.html",
		controller: "AuthCtrl",
	}).state('register', {
		url: "/register",
		templateUrl: "views/_register.html",
		controller: "AuthCtrl",
	}).state('equipSetup', {
		url: "/equip/setup",
		templateUrl: "views/_equipSetup.html",
		controller: "UserEquipmentCtrl",
		resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
	}).state('equipEdit', {
		url: "/equip/edit",
		templateUrl: "views/_equipEdit.html",
		controller: "UserEquipmentCtrl",
		resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
	});

	$urlRouterProvider.otherwise('/');

	$authProvider.configure({
		apiUrl: 'http://71.168.189.93'
	});
}]);

