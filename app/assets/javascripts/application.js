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

  $(document).ready(function() {
      // Hide the "upload-image" div initially
      $("#upload-image").hide();

      // When the "add-image" link is clicked
      $("#add-image").click(function(e) {
        e.preventDefault();
        // Hide the "add-image" link
        $(this).hide();
        // Display the "upload-image" div
        $("#upload-image").show();
      });

      // When the "remove-image" link is clicked
      $("#remove-image").click(function(e) {
        e.preventDefault();
        // Hide the "upload-image" div
        $("#upload-image").hide();
        // Display the "add-image" link
        $("#add-image").show();
      });
    });
