var form = document.querySelector('.needs-validation');

form.addEventListener('submit', function (e) {
    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    }
    form.classList.add('was-validated')
});


$(function () {
    $("#username, #password").bind("change keyup",
        function () {
            if ($("#username").val() != "" && $("#password").val() != "")
                $(this).closest("form").find(":submit").removeAttr("disabled");
            else
                $(this).closest("form").find(":submit").attr("disabled", "disabled");
        });
});


$('#password, #confirm-password').on('keyup', function () {
    if ($('#password').val() == $('#confirm-password').val()) {
        $('#message').html('Matching').css('color', 'green');
    } else
        $('#message').html('Not Matching').css('color', 'red');
});