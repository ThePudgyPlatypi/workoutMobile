app.factory('flash',['flashr', function(flashr) {
	var flash = {};

	flash.saved = function(name) {
		flashr.now.success(name + ' successfully saved.', "Saved");
	}

	flash.saving = function(name) {
		flashr.now.success("Saving Equipment...");
	}


	flash.deleted = function(name) {
		flashr.now.success(name + ' successfully deleted');
	}

	flash.error = function(string, error) {
		toastr.remove();
		flashr.now.error(string + ". Error = " + error);
	}

	flash.login = function() {
		toastr.remove();
		flashr.now.success("You are successfully logged in");
	}

	flash.logout = function() {
		toastr.remove();
		flashr.now.success("You are successfully logged out");
	}

	flash.register = function() {
		toastr.remove();
		flashr.now.success("You have successfully registered. Please tell me what equipment you have access too.");
	}

	return flash;
}])