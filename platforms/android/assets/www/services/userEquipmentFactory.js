app.factory('userEquipment', ['railsResourceFactory', function(railsResourceFactory) {
	return railsResourceFactory ({
			url: 'http://71.168.189.93/user_equipment',
			name: 'user_equipment'
		});
}])