app.factory('concentrations', ["railsResourceFactory", function(railsResourceFactory){
	return railsResourceFactory({
			url: 'http://192.168.1.49:3000/concentration',
			name: 'concentration'
		})
}]);