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
