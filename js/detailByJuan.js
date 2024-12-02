
function clickToContact() {
    location.href = "./contact.html";
}

$(document).ready(function () {
    $("#doSubmit").click(function () {
        var keyword = $("#inputPassword2").val();
        if (keyword == "") {
            alert("Please enter keyword!");
        } else {
            location.href = "https://www.ireland.com/en-gb/search/?term=" + keyword;
        }
    });

});