/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

 $(document).ready(function () {
            // Bind a change event to the file input
            $('#imageUpload').change(function () {
                if ($(this).val()) {
                    // File is selected, hide singleUpload and show uploadAnother
                    $('#singleUpload').hide();
                    $('#imageUpload').hide();
                    $('#uploadAnother').show();
                    $('#fileDisplay').show();
                } else {
                    // No file selected, show singleUpload and hide uploadAnother
                    $('#singleUpload').show();
                    $('#imageUpload').show();
                    $('#uploadAnother').hide();
                    $('#fileDisplay').hide();
                }
            });
        });

  $(document).ready(function () {
            // Click event handler for the uploadAnotherbtn
            $('#uploadAnotherbtn').click(function (e) {
                e.preventDefault(); // Prevent the default link behavior

                // Toggle the visibility of the divs
                $('#singleUpload').show();
                $('#uploadAnother').hide();
                $('#imageUpload').toggle();

                // Show "No file chosen" text in the input
                if ($('#imageUpload').is(':visible')) {
                    $('#imageUpload').val(''); // Clear the file input
                    $('#imageUpload').attr('value', ''); // Clear the file input's value attribute
                    $('#imageUpload').next('.custom-file-label').text('No file chosen');
                }
            });
        });
