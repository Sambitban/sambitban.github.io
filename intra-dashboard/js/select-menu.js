jQuery(document).ready(function() {
    jQuery( ".select-menu" ).change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });
});