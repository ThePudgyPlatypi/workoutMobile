var app = angular.module('workout', ['ui.router', 'rails', 'ng-token-auth', 'flashr', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider) {
	$stateProvider.state('workoutStart', {
		url: "/workoutSetup", 
		templateUrl: "views/_workoutSetup.html",
		controller: "WorkoutEngineCtrl"
	}).state('login', {
		url: "/login",
		templateUrl: "views/_login.html",
		controller: "AuthCtrl",
		onEnter: []
	}).state('register', {
		url: "/register",
		templateUrl: "views/_register.html",
		controller: "AuthCtrl",
		onEnter: []
	}).state('equipSetup', {
		url: "/equip/setup",
		templateUrl: "views/_equipSetup.html",
		controller: "UserEquipmentCtrl",
	}).state('equipEdit', {
		url: "/equip/edit",
		templateUrl: "views/_equipEdit.html",
		controller: "UserEquipmentCtrl",
	})

	$urlRouterProvider.otherwise('login');

	$authProvider.configure({
		apiUrl: '192.168.1.49:3000'
	});
}]);

