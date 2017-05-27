$(function () {

    //-----------------------------------------------------

    // let len = $('a').length;
    // console.log(len); 

    //-----------------------------------------------------

    //  let len = $('a',document.getElementsByClassName('well')[0]).length;
    //  console.log(len); 

    //-----------------------------------------------------
    // $('a.external').css('border','1px solid red');

    // $('a').filter('.external').css('border','1px solid red');
    // $('a').filter(function () { 
    //     return $(this).hasClass('external');
    // }).css('border', '1px solid red');
    //-----------------------------------------------------

    //$('p').find('em').css('border', '1px solid red');
    //$('em', $('p')).css('border', '1px solid red');
    //$('p em').css('border', '1px solid red');

    //-----------------------------------------------------

    // $('p').filter('.middle').length; // 1
    // $('p').filter('.middle').end().css('border', '1px solid red');
    // $('p').filter('.middle').find('span').end().end().css('border', '1px solid red');

    //-----------------------------------------------------

    // $('a:eq(1)').css('border', '1px solid red');
    // $('a:eq(1)').next().css('border', '1px solid red');
    // $('a:eq(1)').prev().css('border', '1px solid red');
    // $('a:eq(1)').parent().css('border', '1px solid red');
    // $('a:eq(1)').parent().children().css('border', '1px solid red');
    // $('a:eq(1)').nextAll().css('border', '1px solid red');
    // $('a:eq(1)').prevAll().css('border', '1px solid red');

    //-----------------------------------------------------

    // $('<p><a>Jquery</a></p>')
    //     .find('a')
    //     .attr({ href: 'http://jquery.com' })
    //     .end()
    //     .appendTo('.container');


    // let box = $('#box1');
    // let headText = $('<h1> Jquery </h1>');

    // headText.appendTo(box);
    // box.append(headText);

    // headText.prependTo(box);  
    // box.prepend(headText);

    // box.after(headText);
    // box.before(headText);

    // headText.insertAfter(box);
    // headText.insertBefore(box);


    //box.wrap(headText);
    //-----------------------------------------------------


    //jQuery('a').remove();

    //-----------------------------------------------------

    // jQuery('li.remove').replaceWith('<li>removed</li>');
    // jQuery('<li>removed</li>').replaceAll('li.remove');

    //-----------------------------------------------------

    // $('.alert-warning')
    //     .clone()
    //     .text("Good Morning")
    //     .appendTo('.container')

    //-----------------------------------------------------

    // jQuery('a')
    //     .attr({
    //         'href': 'http://www.jquery.com',
    //         'target': '_blank'
    //     })

    // let link = jQuery('a')
    //     .attr('href')

    // jQuery('a').removeAttr('href');

    //-----------------------------------------------------


    // $('.well').text("<h1>Hello..</h1>");
    // console.log($('.well').text());

    // $('.well').html("<h1>Hello..</h1>");
    // console.log($('.well').html());

    // $("#myName").val("Nag");
    // console.log($('#myName').val());

    //--------------------------------------------------- 


    // Quiz

    //$('a[href$=doc]').after($('<span>image</span>'));


    //--------------------------------------------------- 

    // console.log($("h1").html());


    //--------------------------------------------------- 

    // let ele = $(".container")
    //     .find("h1")
    //     .eq(0)
    //     .html("new text for the h1!")

    // ele = ele.addClass('well');
    // ele = ele.css('border', '1px solid red');
    // ele = ele.css("font-size", "35px");

    // console.log(ele);

    //---------------------------------------------------

    // $( "span.subchild" ).closest('div').css('border','1px solid red');

    //---------------------------------------------------

    // $('.alert')
    //     .addClass('alert-warning')
    //     //.addClass('alert-success')
    //     .toggleClass('alert-warning');    

    //---------------------------------------------------

    // let id = $("#my-box").data('id');
    // console.log(id);
    
});