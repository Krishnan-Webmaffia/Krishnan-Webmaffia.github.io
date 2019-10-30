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

    $("#submitting").click(function () {

        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var dob = $("#dob").val();
        var mob = $("#mob").val();
        var city = $("#city").val();
        var state = $("#state").val();

        var valid = {
            fname : 0,
            lname : 0,
            email : 0,
            dob : 0,
            mob : 0,
            city : 0,
            state : 0,          
        };

        var flag= 0;

        var re = /^[A-Za-z]+$/;


        if (fname === "") {
            $("#fname").css("border-bottom", "1px solid red");
            // alert("First Name cannot be empty. Try again");
            valid.fname = 1;
        } else {
            $("#fname").css("border-bottom", "1px solid black");
            valid.fname = 0;
        }
        
        if (lname === "") {
            $("#lname").css("border-bottom", "1px solid red");
            // alert("Last Name cannot be empty. Try again");
            valid.lname = 1;
        } else {
            $("#lname").css("border-bottom", "1px solid black");
            valid.lname = 0;
        }

        if (email === "") {
            $("#email").css("border-bottom", "1px solid red");
            // alert("Email cannot be empty. Try again");
            valid.email = 1;
        } else {
            $("#email").css("border-bottom", "1px solid black");
            valid.email = 0;
        }
        
        if (dob === "") {
            $("#dob").css("border-bottom", "1px solid red");
            // alert("Date of Birth cannot be empty. Try again");
            valid.dob = 1;
        } else {
            $("#dob").css("border-bottom", "1px solid black");
            valid.dob = 0;
        }
        
        if (mob === "") {
            $("#mob").css("border-bottom", "1px solid red");
            // alert("Mobile Number cannot be empty. Try again");
            valid.mob = 1;
        } else {
            $("#mob").css("border-bottom", "1px solid black");
            valid.mob = 0;
        }
        
        if (city === "") {
            $("#city").css("border-bottom", "1px solid red");
            // alert("City cannot be empty. Try again");
            valid.city = 1;
        } else {
            $("#city").css("border-bottom", "1px solid black");
            valid.city = 0;
        }
        
        if (state === "") {
            $("#state").css("border-bottom", "1px solid red");
            // alert("State cannot be empty. Try again");
            valid.state = 1;
        } else {
            $("#state").css("border-bottom", "1px solid black");
            valid.state = 0;
        }
        
        if (/\d/.test(fname)) {
            $("#fname").css("border-bottom", "1px solid red");
            // alert("Invalid First Name. Try again");
            valid.fname = 1;
        } else {
            $("#fname").css("border-bottom", "1px solid black");
            valid.fname = 0;
        }
        
        if (/\d/.test(lname)) {
            $("#lname").css("border-bottom", "1px solid red");
            // alert("Invalid Last Name. Try again");
            valid.lname = 0;
        } else {
            $("#lname").css("border-bottom", "1px solid black");
            valid.lname = 0;
        }
        
        if (/\d/.test(city)) {
            $("#city").css("border-bottom", "1px solid red");
            // alert("Invalid City. Try again");
            valid.city = 1;
        } else {
            $("#city").css("border-bottom", "1px solid black");
            valid.city = 0;
        }
        
        if (/\d/.test(state)) {
            $("#state").css("border-bottom", "1px solid red");
            // alert("Invalid State. Try again");
            valid.state = 1;
        } else {
            $("#state").css("border-bottom", "1px solid black");
            valid.state = 0;
        }
        
        if (!re.test(fname)) {
            $("#fname").css("border-bottom", "1px solid red");
            // alert("Invalid First Name. Try again");
            valid.fname = 1;
        } else {
            $("#fname").css("border-bottom", "1px solid black");
            valid.fname = 0;
        }
        
        if (!re.test(lname)) {
            $("#lname").css("border-bottom", "1px solid red");
            // alert("Invalid Last Name. Try again");
            valid.lname = 1;
        } else {
            $("#lname").css("border-bottom", "1px solid black");
            valid.lname = 0;
        }
        
        if (!re.test(city)) {
            $("#city").css("border-bottom", "1px solid red");
            // alert("Invalid City. Try again");
            valid.city = 1;
        } else {
            $("#city").css("border-bottom", "1px solid black");
            valid.city = 0;
        }
        
        if (!re.test(state)) {
            $("#state").css("border-bottom", "1px solid red");
            // alert("Invalid State. Try again");
            valid.state = 1;
        } else {
            $("#state").css("border-bottom", "1px solid black");
            valid.state = 0;
        }

        if (mob!= "") {

            if (mob % 1 != 0) {
                $("#mob").css("border-bottom", "1px solid red");
                // alert("Invalid Mobile Number. Try again");
                valid.mob = 1;
            } else {
                $("#mob").css("border-bottom", "1px solid black");
                valid.mob = 0;
            }

        }

        if (valid.fname === 0 && valid.lname === 0 && valid.email === 0 && valid.dob === 0 && valid.mob === 0 && valid.city === 0 && valid.state === 0) {

            flag = 0;
            
        } else {

            flag = 1;

        }


        
        if(flag===0) {

            if ($("#accept").prop("checked") == false) {
                alert("Accept terms & conditions to continue.");
            } else {

                alert("Details saved: " + fname + " " + lname + " " + email + " " + dob + " " + mob + " " + city + " " + state);

            }

        }
        
        

    });


});