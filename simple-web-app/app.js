console.log('-app.js-');

// document.addEventListener('DOMContentLoaded', function () {

//     // using DOM

//     // step-1 : query DOM elements & bind event listener(s)

//     let box = document.querySelector('.jumbotron');
//     let showBtn = document.querySelector('.btn-primary');
//     let hideBtn = document.querySelector('.btn-danger');

//     showBtn.addEventListener('click', function (event) {
//         box.style.display = '';
//     });

//     hideBtn.addEventListener('click', function (event) {
//         box.style.display = 'none';
//     });


// })

//---------------------------------------------------------------


$(document).ready(function () { 

    let box = $('.jumbotron');
    $('.btn-danger').click(function () { 
        box.fadeIn(5000);
    });
     $('.btn-primary').click(function () { 
        box.fadeOut();
    });

});

