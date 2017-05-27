$(function () {


    // $(".well button").on('click', function (event) { 
    //     console.log('New Event');
    //     console.dir(event);
    // });  

    //------------------------------------------------

    // $(".well button").on('click mouseover', function (event) { 
    //     console.log('New Event');
    //     console.dir(event);
    // });  

    //------------------------------------------------

    // $(".well button").on({
    //     click: function (e) { 
    //         console.log('click');
    //     },
    //     mouseover: function (e) {
    //         console.log('mouseover');
    //     }
    // });      

    //------------------------------------------------

    // $(".well button").one('click', function (event) {
    //     console.log('once..');
    // });

    //------------------------------------------------ 

    // let count = 0;
    // let btn=$(".well button")
    // btn.on('click', function (event) {
    //     count++;
    //     console.log(count);
    //     if (count === 5) btn.off('click');
    // });

    //------------------------------------------------ 

    // $(".well button").click(function (e) { 
    //     console.log('click...');
    // });

    //------------------------------------------------ 

    // let tnr = {
    //     name:"Kannan"
    // };    

    // let teachService = {
    //     doTeach: function (e) {
    //         console.log(this.name +' teaching .js');
    //     }
    // };    

    // let btn = document.querySelector('.btn-danger');

    // // btn.addEventListener('click', function (e) { 
    // //     teachService.doTeach.call(tnr);
    // // });

    // btn.addEventListener("click",teachService.doTeach.bind(tnr));    


    //------------------------------------------------ 

    // Event Delegation

    // $(".well").on('click','.btn.odd',function (e) { 
    //     console.log('btn clicked...');
    //     console.dir(e);
    // });

    // setTimeout(function () { 
    //     $('.well').append($('<button class="btn btn-primary">im late</button>'));
    // },5000);

    //------------------------------------------------ 

    // Event Propagation

    // $('.well').on('click', function (e) {
    //     console.dir(e);
    //     console.log('box click handler');
    // });
    // $('.well .btn.odd').on('click', function (e) {
    //     //e.stopPropagation();
    //     console.dir(e);
    //     console.log('.odd btn click handler');
    // });

    //------------------------------------------------ 


});