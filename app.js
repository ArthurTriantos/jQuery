$(document).ready (function () {
    $('#btnSubmit').on('click', function () {
       $('form').submit(function () {
           alert($("input:text").val());
       });
    });
});