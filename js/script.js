$(() => {
    $(".button_order").click(() => {
        $(".modal-wrap").show();
        $(".modal").show(800);
    });
    $(".modal_exit").click(() => {
        $(".modal-wrap").hide();
        $(".modal").hide(800);
    });

    // Slider
    var number = 2;
    var srcnum = 1
    src="img/Slider/slider-"+srcnum+".jpg";
    $(".arrow-right").click(() => {
        number++;
        if(number>5){
            number = 2;
            $(".img-item:nth-child(5)").removeClass("activeSlider");
            $(".img-item:nth-child("+number+")").addClass("activeSlider");
            $(".img-item:nth-child(5) img").removeClass("activeImg");
            $(".img-item:nth-child("+number+") img").addClass("activeImg");
            srcnum = number-1;
            changeImg(srcnum);
        };
        if(number!=2){
            $(".img-item:nth-child("+number+")").addClass("activeSlider");
            $(".img-item:nth-child("+(number-1)+")").removeClass("activeSlider");
            $(".img-item:nth-child("+number+") img").addClass("activeImg");
            $(".img-item:nth-child("+(number-1)+") img").removeClass("activeImg");
            srcnum = number-1;
            changeImg(srcnum);
        };
    });
    changeImg = (srcnum)  => {
        if(srcnum==2){
            $(".production-slider_one img").attr("src","img/Slider/slider-2.png");
        }else{
            $(".production-slider_one img").attr("src","img/Slider/slider-"+srcnum+".jpg");
        }
    };

    //Slider main
    var x=0;
    setInterval(() => {
        let src = ["img/Slider/slider_main.png","img/main_boxes.png"];
        x++;
        let title = ["Производство упаковки из гофрокартона","Бесплатно делаем образцы гофроупаковки"];
        let subtitle = ["с доставкой по всей России","это помогает заранее увидеть упаковку"];
        if(x>1) x=0;
        $(".main-img img").slideToggle(700, ()=>{
            $(".main-img img").attr("src",src[x]);
            $(".main-text_title").text(title[x]);
            $(".main-text_subtitle").text(subtitle[x]);
        }).slideToggle(700);
    }, 6000);

    changeSlider = () => {
        let src = ["img/Slider/slider_main.png","img/main_boxes.png"];
        x++;
        let title = ["Производство упаковки из гофрокартона","Бесплатно делаем образцы гофроупаковки"];
        let subtitle = ["с доставкой по всей России","это помогает заранее увидеть упаковку"];
        if(x>1) x=0;
        $(".main-img img").slideToggle(700, ()=>{
            $(".main-img img").attr("src",src[x]);
            $(".main-text_title").text(title[x]);
            $(".main-text_subtitle").text(subtitle[x]);
        }).slideToggle(700);
    };

    
    changeSlider();
    

    //slick sliders

    $(".review-slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-arr'),
        nextArrow: $('.next-arr'),
        
      });

      $(".review-mobile-slider").slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
      });

    // mobile-menu
    var vw = -100;
    $(".menu-mobile").click(()=>{
        vw*=-1;
        $(".menu-mobile span").toggleClass("menu-mobile_active");
        $(".mobile-menu_list").css("width",vw+"vw");
    });
    $()

});