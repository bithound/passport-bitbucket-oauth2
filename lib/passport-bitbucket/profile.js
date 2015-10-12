/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }
  
  var profile = {};
  profile.id = json.uuid;
  profile.displayName = json.display_name;
  profile.username = json.username;
  profile.profileUrl = json.links.html.href;

  //Add emails to profile
  if(json.emails) {
  	profile.emails = [];

  	json.emails.forEach(function(email) {
  		//Only add confirmed emails
  		if(email.is_confirmed) {
			var emailObj = {};
			emailObj.value = email.email;
			if(email.is_primary) {
				//If the email is marked as primary then do the same for the profile and add it to the start of the array
				emailObj.type = "Primary";
				profile.emails.unshift(emailObj);
			} else {
				//Email isn't the primary email so add it to the end of the array
				profile.emails.push(emailObj);
			}
  		}
  	});
  }

  return profile;
};
