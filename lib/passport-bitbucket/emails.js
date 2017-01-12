/**
 * Parse emails.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
exports.parse = function(json) {
  if ('string' == typeof json) {
    json = JSON.parse(json);
  }

  var emails = json.values ? json.values.map(function (item) {
    return {
      primary: item.is_primary,
      verified: item.is_confirmed,
      value: item.email
    };
  }) : [];

  return emails;
};
