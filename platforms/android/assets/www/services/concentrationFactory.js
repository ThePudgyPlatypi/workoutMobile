app.factory('concentrations', ["railsResourceFactory", function(railsResourceFactory){
	return railsResourceFactory({
			url: 'http://71.168.189.93/concentration',
			name: 'concentration'
		});
}]);