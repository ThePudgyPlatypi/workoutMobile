app.factory('exercise', ['railsResourceFactory', function(railsResourceFactory){
	return railsResourceFactory({
		url: 'http://71.168.189.93/exercise',
		name: 'exercise'
	})
}])