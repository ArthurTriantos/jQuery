$(document).ready (function () {
    $('#btnSubmit').on('click', function () {
       $('form').submit(function () {
           alert($("input:text").val());
       });
    });
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function() {
       if($(this).val() != '') {
          $(':input[type="submit"]').prop('disabled', false);
       }
    });
});