
var errorMessage = document.querySelector('#errorMessage');

// Clear errorMessage div
function clearErrorMessage() {
    errorMessage.textContent = "";
}

// Form validate 
$(document).ready(function () {
    // reaction on keyup
    $('#reg_fname').keyup(function () {
        let $th = $(this);
        if ($th.val().length > 25 || $th.val().length < 2) {
            errorMessage.textContent = "Ime treba da sadrži između 2 i 25 karaktera!";
            return false;
        } else {
           clearErrorMessage();
        }
    });

    $('#reg_lname').keyup(function () {
        let $th = $(this);
        if ($th.val().length > 25 || $th.val().length < 2) {
            errorMessage.textContent = "Prezime treba da sadrži između 2 i 25 karaktera!";
            return false;
        } else {
            clearErrorMessage();
        }
    });

    $('#reg_email').keyup(function () {
        let $th = $(this);
        if ($th.val().lastIndexOf(".") < $th.val().indexOf("@") || $th.val().indexOf("@") === -1 || $th.val().lastIndexOf('.') === -1) {
            errorMessage.textContent = "Unesite validnu email adresu!";
            return false;
        } else {
            clearErrorMessage();
        }
    });

    $('#subject').keyup(function () {
        let $th = $(this);
        if ($th.val().length < 200 || $th.val().length > 400) {
            errorMessage.textContent = "Poruka treba da sadrži između 200 i 400 karaktera!";
            return false;
        } else {
            clearErrorMessage();
        }
    }); 
});
