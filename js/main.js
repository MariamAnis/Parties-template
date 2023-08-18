$('.caption p').slideUp();
$('.cap-head').click(function (e) {
    $(e.target).next().slideToggle();


});


var countDownDate = new Date("Oct 25, 2023 16:37:52").getTime();
(setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    $('.day').html(days + ' days');
    $('.hour').html(hours + ' hours');
    $('.minute').html(minutes + ' minutes');
    $('.second').html(seconds + ' seconds');


}), 1000)
let count = $('.words').html();;
$('.input-word').keyup(function (e) {
    var chars = $('.input-word').val();
    if(e.key=="Backspace"){
        if(count==100){
          $('.words').html(100);
        }
        else if (count<100){
            $('.words').html(++count);
        }
           
        
       
    }
    else{
       
        $('.words').html(--count);
    }
    
    
     
});
