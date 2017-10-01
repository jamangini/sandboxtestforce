/* alright, let's give this shit a shot */

var http = require ('http');
var jsforce = require ('jsforce');
var conn = new jsforce.Connection();
  // below this line is copy pasta'd from JSForce's tutorial
conn.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ...
});