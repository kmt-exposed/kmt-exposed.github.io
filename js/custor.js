// JavaScript Document
$(document).ready(function() {
    $(".toggle").click(function() {
        $(this).toggleClass("active");
        $("#navbar-nav").slideToggle();
    });
});