var main = function(){
    $('.dropdown-toggle').click(function(){
        
        $('.dropdown-menu').toggle();
    });
    
    $('.arrow-next').click(function(){
        var currentSlide;
        var nextSlide;
        
        var currentDot;
        var nextDot;
        
        currentSlide = $('.active-slide');
        currentDot = $('.active-dot');
        
        nextSlide = currentSlide.next();
        nextDot = currentDot.next();
        
        if(nextSlide.length == 0){
            nextSlide = $('.slide').first();    
            nextDot = $('.dot').first(); 
        }
        
        currentSlide.fadeOut(1100).removeClass('active-slide');
        nextSlide.fadeIn(1100).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        
    });
    
    $('.arrow-prev').click(function(){
        var currentSlide;
        var prevSlide;
        
        var currentDot;
        var prevDot;
        
        currentSlide = $('.active-slide');
        currentDot = $('.active-dot');
        
        prevSlide = currentSlide.prev();
        prevDot = currentDot.prev();
        
        if(prevSlide.length == 0){
            prevSlide = $('.slide').last();    
            prevDot = $('.dot').last(); 
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');   
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');      
    });
};

$(document).ready(main);
