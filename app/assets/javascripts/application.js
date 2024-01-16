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

  $(document).ready(function(){
    $("#case-status-trigger").click(function(event){
        // Prevent default action of <a> (if it's a link)
        event.preventDefault();

        // Toggle the div with id="case-status"
        $("#case-status").toggle();

        // Check the visibility of the SVG with id "icon-up"
        if($("#icon-up").is(":visible")){
            // If visible, hide it and show the "icon-down"
            $("#icon-up").hide();
            $("#icon-down").show();
        } else {
            // If not visible, hide "icon-down" and show the "icon-up"
            $("#icon-down").hide();
            $("#icon-up").show();
        }
    });
});

$(document).ready(function(){

    // Display the div when the checkbox is selected
    $("#case-status-open").change(function(){
        if($(this).prop("checked")) { // If checkbox is checked
            $("#filter-tag").show();
        } else { // If checkbox is unchecked
            $("#filter-tag").hide();
        }
    });

    // Hide the div and deselect the checkbox when the button is clicked
    $("#filter-remove").click(function(){
        $("#filter-tag").hide();
        $("#case-status-open").prop("checked", false);
    });

});

$(document).ready(function(){
    $('#image-upload-cta').click(function(){
        // Make the div with id="fileDisplay" visible
        $('#fileDisplay').css('display', 'block');

        // Get the file name from the input and display it in the href
        var fileName = $('#file_upload').val().split('\\').pop(); // This splits the path and gets the file name
        $('#uploaded-file-name').text(fileName); // Update the href text
        $('#uploaded-file-name').attr('href', '#'); // Update the href link if necessary

        // Change the button text
        $(this).text('Upload another image');
    });
});

$(document).ready(function() {
    // Handle click on 'Hide all'/'Show all' link
    $('#trigger-all').click(function(e) {
        e.preventDefault();  // Prevent the default anchor behavior

        var isCurrentlyHideAll = $(this).text() === 'Hide all';
        
        // Toggle the div visibility and the link text
        $('#product1, #product2').toggle(!isCurrentlyHideAll);
        $('#trigger-product1, #trigger-product2').text(isCurrentlyHideAll ? 'Show' : 'Hide');
        $(this).text(isCurrentlyHideAll ? 'Show all' : 'Hide all');
    });

    // Handle click on individual 'Show'/'Hide' links for products
    $('#trigger-product1, #trigger-product2').click(function(e) {
        e.preventDefault(); // Prevent the default anchor behavior

        var productID = $(this).attr('id').replace('trigger-', '');
        var isCurrentlyShow = $(this).text() === 'Show';
        
        // Toggle the visibility of the respective div and the link text
        $('#' + productID).toggle(isCurrentlyShow);
        $(this).text(isCurrentlyShow ? 'Hide' : 'Show');

        // If both are visible or both are hidden, update the 'Hide all'/'Show all' link text
        if ($('#product1').is(':visible') && $('#product2').is(':visible')) {
            $('#trigger-all').text('Hide all');
        } else if ($('#product1').is(':hidden') && $('#product2').is(':hidden')) {
            $('#trigger-all').text('Show all');
        }
    });
});