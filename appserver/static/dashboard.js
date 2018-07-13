// Function to deploy the modal.
function deployModal(title, message) {
  var htmlData = '<div class="modal fade" role="dialog" tabindex="-1" id="dbct_message"> \
  <div class="modal-dialog" role="document"> \
  <div class="modal-content"> \
  <div class="modal-header"> \
  <h3 class="modal-title">' + title + '</h3> \
  </div> \
  <div class="modal-body"> \
  ' + message + ' \
  </div> \
  <div class="modal-footer"> \
  <button type="button" class="btn btn-default" data-dismiss="modal" id="ta_check_close">Close</button> \
  </div> \
  </div> \
  </div>';

  $('body').append(htmlData);
  $('#dbct_message').modal('show');
}
require([
  'underscore',
  'jquery',
  'splunkjs/mvc',
  'splunkjs/mvc/simplexml/ready!'
], function (
  _,
  $,
  mvc,
  ignored
) {
    // Get Required TA version
    console.log("Checking Requirements");
    var dependencyVersion;
    var checkTA = sessionStorage.checked_ta;
    var service = mvc.createService();
    var i;

    // Only check if the TA is installed once per a session.
    if (!checkTA) {
      // Mark TA as checked this Session
      sessionStorage.checked_ta = 1;
      $.ajax({
        url: '/en-US/splunkd/__raw/servicesNS/admin/App_DB_Cybertech/configs/conf-app/install',
        data: {
          output_mode: 'json'
        },
        type: 'GET',
        dataType: 'json'
      }).done(function (response) {
        for (i = 0; i < response.entry.length; i += 1) {
          dependencyVersion = response.entry[i].content.ta_dependency_version;
        }
      });
      console.log("Pre Apps");

      service.apps()
        .fetch(function (err, apps) {
          var title;
          var message;
          var dbcybertechTA = apps.item('TA-DB_CyberTech');
          var looseVersion;
          if (err) {
            console.error(err);
            return;
          }

          // Check if the Add-on is installed.
          if (!dbcybertechTA) {
            title = 'Missing Add-on';
            message = '<p>Please install the <a href="https://splunkbase.splunk.com/app/4065/" target="_blank">DB CyberTech Splunk Add-on</a>.</p>';
            // TA is not installed.
            deployModal(title, message);
          } else {
            // TA is installed
            // Check the version to see if it matches dependency.
            looseVersion = dbcybertechTA._properties.version;
            console.log("Dependency Version:", dependencyVersion, "Loose Version", looseVersion);

            if (dependencyVersion === undefined || looseVersion === undefined) {
              // Unable to get dependencyVersion for some reason.
              // Adding to session storage to not check the TA anymore.
              console.log('Unable to get dependency/loose version.');
            } else if (looseVersion >= dependencyVersion) {
              // Everything passed. Adding to session storage to not check the TA anymore.
              console.log('Everything Passed');
            } else if (looseVersion < dependencyVersion) {
              // Add-on filed to match. Adding to session storage to not check the TA anymore.
              title = 'Add-on Dependency Warning';
              message = '<p>The current version of the DB CyberTech Add-on you have installed does not match the required version needed for this app. </p>\
            <p>Installed version: ' + looseVersion + '</p> \
            <p>The version required is: ' + dependencyVersion + '</p> \
            <p>Please download the required version from <a href="https://splunkbase.splunk.com/app/4065/" target="_blank">Splunk Base</a></p>';
              // Display modal
              deployModal(title, message);
            } else {
              // Catch all if something fails. Check once and don't display modal.
              console.log('Unable to check if add-on matches.');
            }
          }
        });
    }
  });
