// with DOM
// document.addEventListener('DOMContentLoaded', function () {

//     let greetBox = document.querySelector('.alert-info');
//     let greetBtn = document.querySelector('.btn-primary');

//     greetBtn.addEventListener('click', function (e) {
//         greetBox.innerText = "Good Morning";
//     });

// });

//-------------------------------------------------------

// using jQuery with DOM

/*
    // basic syntax to use jQuery

    jQuery('selector',[context]).action1().action2();
    

*/


$(document).ready(function () { 

    // let box = $(".alert-info");
    // $('.btn-primary').on('click', function (e) { 
    //     box.text("im hungry, cant greet u");
    // })

    // Selectors i.e How to select DOM elements

    $("#my-box ~ span").css('border','1px solid red');

     
    
    

});

