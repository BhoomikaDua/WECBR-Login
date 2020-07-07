$(document).ready(function() {
    var cube = document.querySelector('.cube');
    var currentClass = '';

    $("#toggleSection").click(function() {
        $("#hidden").show();
    });

    $("#register").click(function() {
        var showClass = 'show-left';
        if (currentClass) {
            cube.classList.remove(currentClass);
        }
        cube.classList.add(showClass);
        currentClass = showClass;
    });

    $("#forgotpass").click(function() {
        document.getElementById('hideCard').style.visibility = "hidden";
        var showClass = 'show-right';
        if (currentClass) {
            cube.classList.remove(currentClass);
        }
        cube.classList.add(showClass);
        currentClass = showClass;
    });

    $("#resetpass").click(function() {
        var showClass = 'show-back';
        if (currentClass) {
            cube.classList.remove(currentClass);
        }
        cube.classList.add(showClass);
        currentClass = showClass;

    });

});