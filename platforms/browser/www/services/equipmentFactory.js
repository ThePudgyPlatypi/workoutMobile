app.factory('equipment', ["railsResourceFactory", function(railsResourceFactory){
	return railsResourceFactory ({
		url: 'http://192.168.1.49:3000/equipment',
		name: 'equipment'
	}); 
}])