app.factory('user', ["railsResourceFactory", function(railsResourceFactory){
	return railsResourceFactory({
		url: 'http://71.168.189.93/auth',
		name: 'user'
	})
}])