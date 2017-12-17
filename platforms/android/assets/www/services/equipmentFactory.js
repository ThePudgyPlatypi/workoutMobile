app.factory('equipment', ["railsResourceFactory", function(railsResourceFactory){
	return railsResourceFactory ({
		url: 'http://71.168.189.93/equipment',
		name: 'equipment'
	}); 
}])