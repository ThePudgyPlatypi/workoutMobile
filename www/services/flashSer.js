app.factory('flash',['flashr', function(flashr) {
	var flash = {};

	flash.saved = function(name) {
		flashr.now.success(name + ' successfully saved.', "Saved");
	}

	flash.deleted = function(name) {
		flashr.now.success(name + ' successfully deleted');
	}

	flash.error = function(string, error) {
		flashr.now.error(string + ". Error = " + error);
	}

	flash.login = function() {
		flashr.now.success("You are successfully logged in");
	}

	flash.logout = function() {
		flashr.now.success("You are successfully logged out");
	}

	flash.register = function() {
		flashr.now.success("You have successfully registered. Please tell me what equipment you have access too.");
	}

	return flash;
}])