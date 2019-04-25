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
  profile.accountId = json.account_id
  profile.displayName = json.display_name;
  profile.nickname = json.nickname;

  return profile;
};
