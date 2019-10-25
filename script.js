/**
 * Created by krishnan on 24/10/2019.
 */

$(document).ready(function () {


    $(".hdfc_menumob_Open").click(function () {
        $(".hdfc_menu").css("display", "block");
        $(".hdfc_menumob_Close").css("display", "inline-block");
        $(".hdfc_menumob_Open").css("display", "none");
    });

    $(".hdfc_menumob_Close").click(function () {
        $(".hdfc_menu").css("display", "none");
        $(".hdfc_menumob_Open").css("display", "inline-block");
        $(".hdfc_menumob_Close").css("display", "none");
    });

    $(".hdfc_faqs>ul>li>div>span").click(function () {
        $(this).closest("li").find("p").toggle();
    });

    // $("#faqaccordion").accordion({
    //     collapsible: true
    // });

    // $("#submitting").click(function () {

    //     var fname = $("#fname").val();
    //     var lname = $("#lname").val();
    //     var email = $("#email").val();
    //     var dob = $("#dob").val();
    //     var mob = $("#mob").val();
    //     var city = $("#city").val();
    //     var state = $("#state").val();
    //     var accept = $("#accept").val();


    //     var re = /^[A-Za-z]+$/;


    //     if (fname == "") {
    //         alert("First Name cannot be empty. Try again");
    //     } else if (lname == "") {
    //         alert("Last Name cannot be empty. Try again");
    //     } else if (email == "") {
    //         alert("Email cannot be empty. Try again");
    //     } else if (dob == "") {
    //         alert("Date of Birth cannot be empty. Try again");
    //     } else if (mob == "") {
    //         alert("Mobile Number cannot be empty. Try again");
    //     } else if (city == "") {
    //         alert("City cannot be empty. Try again");
    //     } else if (state == "") {
    //         alert("State cannot be empty. Try again");
    //     } else if (/\d/.test(fname)) {
    //         alert("Invalid First Name. Try again");
    //     } else if (/\d/.test(lname)) {
    //         alert("Invalid Last Name. Try again");
    //     } else if (/\d/.test(city)) {
    //         alert("Invalid City. Try again");
    //     } else if (/\d/.test(state)) {
    //         alert("Invalid State. Try again");
    //     } else if (!re.test(fname)) {
    //         alert("Invalid First Name. Try again");
    //     } else if (!re.test(lname)) {
    //         alert("Invalid Last Name. Try again");
    //     } else if (!re.test(city)) {
    //         alert("Invalid City. Try again");
    //     } else if (!re.test(state)) {
    //         alert("Invalid State. Try again");
    //     } else if (mob % 1 != 0) {
    //         alert("Invalid Mobile Number. Try again");
    //     } else if ($("#accept").prop("checked") == false) {
    //         alert("Accept terms & conditions to continue.");
    //     } else {

    //         alert("Details saved: " + fname + " " + lname + " " + email + " " + dob + " " + mob + " " + city + " " + state);

    //     }

    // });


});