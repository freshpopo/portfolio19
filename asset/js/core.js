// includes는 IE에서 동작하지 않아서 indexOf를 사용
var userAgent = window.navigator.userAgent;
var isChrome = userAgent.indexOf('Chrome');
var isChromeMobile = userAgent.indexOf('CriOS');
var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
var isWindows = userAgent.indexOf('Windows NT');
var isEdge = userAgent.indexOf('Edge');
var isIE = userAgent.indexOf('Trident');

// 크롬 브라우저 체크
if(isChrome > -1 || isChromeMobile > -1){
	if(isSamsungBrowser < 0 && isEdge < 0){
		
	} else {
        $('.color_mov').css('opacity', '0.2');
    }
}

$(document).ready(function(){
    var header = $('.header');
    var windowW = $(window).width();
    
    var footerH = 2000;
    var img_piece1 = $('.img_piece1'),
        img_piece2 = $('.img_piece2'),
        img_piece3 = $('.img_piece3'),
        img_piece4 = $('.img_piece4');
    

    // header menu open
    $('.ico_menu').on('click', function(){
        header.toggleClass('header_open');
        header.removeClass('sticky');
        $('.open_menu').toggleClass('open');
    });
    
    // phone pc
    $('.num_phone').click(function(event){
            
        if(windowW > 426){
            event.preventDefault();
            alert('연락처는 010-4316-5216 입니다.');
        }
    });

    // work 상세 정보 보기
    $('.click_more').on('click', function(){
        $(this).next().toggleClass('open');
        $(this).next().slideUp();
        if(!$(this).next().is(':visible')){
            $(this).next().slideDown();
        }
    });
    
    // scroll event
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        
        var windowH = $(window).height();
        var topnameH = $('.top_name').height();
        var containerB = $('.container').height();
        var mainworkH = $('.main_work').height() - $('.work_info .info_work .s_content').height();
        var containerH = topnameH + containerB + mainworkH - windowH;
        var footerScroll = (footerH - (top - containerH)) / footerH * 100;
        
        var pieceMove30px = (-30*footerScroll/100)+'px',
            pieceMove40px = (-40*footerScroll/100)+'px',
            pieceMove50px = (-50*footerScroll/100)+'px',
            pieceMove60px = (-60*footerScroll/100)+'px',
            pieceMove70px = (-70*footerScroll/100)+'px',
            pieceMove80px = (-80*footerScroll/100)+'px',
            pieceMove90px = (-90*footerScroll/100)+'px',
            pieceMove150px = (-150*footerScroll/100)+'px';
            
        // header sticky
        if(top > 80){
            header.addClass('sticky');
        }
        if(top < 81){
            header.removeClass('sticky');
        }
        
        if(top > containerH){
            img_piece1.css({
                'bottom' : pieceMove150px,
                'right' : pieceMove70px
            });
            img_piece2.css({
                'bottom' : pieceMove30px,
                'left' : pieceMove70px
            });
            img_piece3.css({
                'top' : pieceMove30px,
                'right' : pieceMove70px
            });
            img_piece4.css({
                'top' : pieceMove150px,
                'left' : pieceMove70px
            });
        }
    
        // footer box_piece height
        $('.footer .box_piece').height(img_piece1.height());
        
    });
});