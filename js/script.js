$(document).on('scroll', function(){

    const scrollValue = $(this).scrollTop();

    const $pic1 = $('.pic-1');
    const $picture1 = $pic1.offset().top;

    const $pic2 = $('.pic-2');
    const $picture2 = $pic2.offset().top;

    const $pic3 = $('.pic-3');
    const $picture3 = $pic3.offset().top;

    const $pic4 = $('.pic-4');
    const $picture4 = $pic4.offset().top;

    const $pic5 = $('.pic-5');
    const $picture5 = $pic5.offset().top;

    const $pic6 = $('.pic-6');
    const $picture6 = $pic6.offset().top;

    const $pic7 = $('.pic-7');
    const $picture7 = $pic7.offset().top;

    const $pic8 = $('.pic-8');
    const $picture8 = $pic8.offset().top;

    const $pic9 = $('.pic-9');
    const $picture9 = $pic9.offset().top;

    const $pic10 = $('.pic-10');
    const $picture10 = $pic10.offset().top;

    const $pic11 = $('.pic-11');
    const $picture11 = $pic11.offset().top;

    const $pic12 = $('.pic-12');
    const $picture12 = $pic12.offset().top;


    const hOne = $pic1.outerHeight(true);
    const hTwo = $pic2.outerHeight(true);
    const hThree = $pic3.outerHeight(true);
    const hFour = $pic4.outerHeight(true);
    const hFive = $pic5.outerHeight(true);
    const hSix = $pic6.outerHeight(true);
    const hSeven = $pic7.outerHeight(true);
    const hEight = $pic8.outerHeight(true);
    const hNine = $pic9.outerHeight(true);
    const hTen = $pic10.outerHeight(true);
    const hEleven = $pic11.outerHeight(true);
    const hTwelve = $pic12.outerHeight(true);

    if(scrollValue > $picture1 - 500){      //to 500 to 500px ktore jest odejmowane zeby obrazek
        $('.pic-1').addClass('on');         //ladowal sie dopiero wtedy kiedy bedzie pod koniec
    }
    if(scrollValue < $picture1 - 500){      //czysciciel
        $('.pic-1').removeClass('on');
    }
    if(scrollValue > $picture2 - 500){
        $('.pic-2').addClass('on');
    }
    if(scrollValue < $picture2 - 500){
        $('.pic-2').removeClass('on');
    }
    if(scrollValue > $picture3 - 500){
        $('.pic-3').addClass('on');
    }
    if(scrollValue < $picture3 - 500){
        $('.pic-3').removeClass('on');
    }
    if(scrollValue > $picture4 - 500){
        $('.pic-4').addClass('on');
    }
    if(scrollValue < $picture4 - 500){
        $('.pic-4').removeClass('on');
    }
    if(scrollValue > $picture5 - 500){
        $('.pic-5').addClass('on');
    }
    if(scrollValue < $picture5 - 500){
        $('.pic-5').removeClass('on');
    }
    if(scrollValue > $picture6 - 500){
        $('.pic-6').addClass('on');
    }
    if(scrollValue < $picture6 - 500){
        $('.pic-6').removeClass('on');
    }
    if(scrollValue > $picture7 - 500){
        $('.pic-7').addClass('on');
    }
    if(scrollValue < $picture7 - 500){
        $('.pic-7').removeClass('on');
    }
    if(scrollValue > $picture8 - 500){
        $('.pic-8').addClass('on');
    }
    if(scrollValue < $picture8 - 500){
        $('.pic-8').removeClass('on');
    }
    if(scrollValue > $picture9 - 500){
        $('.pic-9').addClass('on');
    }
    if(scrollValue < $picture9 - 500){
        $('.pic-9').removeClass('on');
    }
    if(scrollValue > $picture10 - 500){
        $('.pic-10').addClass('on');
    }
    if(scrollValue < $picture10 - 500){
        $('.pic-10').removeClass('on');
    }
    if(scrollValue > $picture11 - 500){
        $('.pic-11').addClass('on');
    }
    if(scrollValue < $picture11 - 500){
        $('.pic-11').removeClass('on');
    }
    if(scrollValue > $picture12 - 500){
        $('.pic-12').addClass('on');
    }
    if(scrollValue < $picture12 - 500){
        $('.pic-12').removeClass('on');
    }

})