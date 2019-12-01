$(function() {
     AOS.init();
     //float

     //eventBox
     //popup and close
     $('.eventBox-overlay, .eventBox-close').on('click', function(){
        $('.eventBox-overlay, .eventBox-main, .eventBox-close').fadeOut(300);
     });

     $('.loading').load('event.html')
     //height and position
     function eventBox_HxP(){
        var eb = $('.eventBox-main'),
            ebh_max = 772,
            ebh_big = eb.width()*1, 
            ebh_mid = eb.width()*1, 
            ebh_small = eb.width()*1;
        console.log(eb.width(), ebh_big, ebh_mid,ebh_small)
        if($(window).width()>1366 ) {
            eb.css({
                height: ebh_max,
                top:'50%',
                marginTop:ebh_max*-0.5
            })
        } else if($(window).width()>768) {
            eb.css({
                height: ebh_big,
                top:'50%',
                marginTop:ebh_big*-0.5
            })
        } else if($(window).width()> 414){
            eb.css({
                height: ebh_mid,
                top:'50%',
                marginTop:ebh_mid*-0.5
            })
        } else{
            eb.css({
                height: ebh_small,
                top:'50%',
                marginTop:ebh_small*-0.5
            })
        }
        
     }
     eventBox_HxP();

     $('.event-content').height($('.eventBox-main').height())
     
    $(window).on('resize', function(){
        eventBox_HxP();
        $('.event-content').height($('.eventBox-main').height())
    })
})