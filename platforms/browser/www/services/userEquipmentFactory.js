app.factory('userEquipment', ['railsResourceFactory', function(railsResourceFactory) {
	return railsResourceFactory ({
			url: 'http://192.168.1.49:3000/user_equipment',
			name: 'user_equipment'
		});
}])