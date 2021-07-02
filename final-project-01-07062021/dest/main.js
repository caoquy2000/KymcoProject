$(document).ready(function () {
    AOS.init();
    let page = document.querySelector('main');
    let header = document.querySelector('header');
    // let slider = document.querySelector('.slider');
    let heightHeader = header.clientHeight;
    // let heightSlider = slider.clientHeight;
    function changBgHeader(x) {
        let scrollY = window.pageYOffset;

        if (scrollY > (x - heightHeader)) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
    if (page.classList.contains('mainwrapper')) {
        let imgMissionSlide = document.querySelector('.mission__slide-img');
        setWidthImgMission()
        window.addEventListener('resize', function () {
            setWidthImgMission();
            // setHeightMissionContent()
        });
        function setWidthImgMission() {
            let widthWindow = window.innerWidth;
            let wImg = widthWindow / 2 + 50;
            imgMissionSlide.style.width = `${wImg}px`;
        }


        let $carousel = $(".slider__img");
        $carousel.flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            // autoPlay: 1500,
            pageDots: false,
            on: {
                ready: function () {

                },
                change: function (index) {
                    let number = $('.slider__bottom-paging .number .current__page');
                    let indexPage = index + 1;
                    number.text(indexPage.toString().padStart(2, 0))
                }
            }
        });
        // mission slider
        let $carouselMission = $('.mission__slide .mission__slide-img');

        $carouselMission.flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            // autoPlay: 2500,
            on: {
                ready: function () {

                },
                change: function (index) {
                    $('.mission__content .textbox').fadeOut(200).removeClass('active');
                    setTimeout(function () {
                        $(`.t-${index}`).fadeIn(0).addClass('active');
                    }), 300;

                }
            }
        });
        $('.btn-ctl.prev').on('click', function () {
            // $carouselMission.flickity('previous');
            setTimeout(() => { $carouselMission.flickity('previous') }, 300);
        })
        $('.btn-ctl.next').on('click', function () {
            // $carouselMission.flickity('next');
            setTimeout(() => { $carouselMission.flickity('next') }, 300);
        })
        // hot product slider
        $('.product .product__img').slick({
            autoplay: false,
            speed: 400,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            cssEase: 'cubic-bezier(.91,.11,.35,1)',
            responsive: [


                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '120px',
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // centerPadding: '80px',
                        centerMode: true,
                        arrows: false
                    }
                }
            ]
        });
        // parallax earth
        parallaxEarth = function () {
            var bodywidth = $("body").width();

            $(document).mousemove(function (e) {
                var mouseX = e.pageX;
                var now = 15 * (mouseX - bodywidth / 2) / bodywidth;
                $(".network .earth img").css({
                    'transform:': 'rotate(' + now + 'deg) translateX(-50%)',
                    '-webkit-transform': 'rotate(' + now + 'deg) translateX(-50%)',
                    '-o-transform': 'rotate(' + now + 'deg) translateX(-50%)',
                    'transform-origin': '0% 50%',
                    '-webkit-transform-origin': '0% 50%',
                    '-o-transform-origin': '0% 50%'
                })
            })
        }
        parallaxEarth();

        // add backgroundheader home page
        let slider = document.querySelector('.slider');
        let heightSlider = slider.clientHeight;
        document.addEventListener('scroll', function () {
            changBgHeader(heightSlider);
        })
    } else if (page.classList.contains('productswrapper')) {
        let countElementSlide = document.querySelectorAll('.--countSlide .product__item').length;

        let $carouselProduct = $('.--pwi01 .--content .product__slide .product__list');
        $carouselProduct.flickity({
            freeScroll: true,
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            on: {
                ready: function () {
                    $('.pd-ctr.prev').css({
                        'display': 'none',

                    })
                },
                change: function (index) {
                    if (index > 0 && index <= countElementSlide - 1) {
                        $('.pd-ctr.prev').css({
                            'display': 'block',
                        });
                    } else {
                        $('.pd-ctr.prev').css({
                            'display': 'none',
                        });
                    }

                    if (index == 0 || index <= countElementSlide - 2) {
                        $('.pd-ctr.next').css({
                            'display': 'block',
                        });
                    } else {
                        $('.pd-ctr.next').css({
                            'display': 'none',
                        });
                    }
                },
            },
        });
        $('.pd-ctr.prev').on('click', function (e) {
            e.preventDefault();
            $carouselProduct.flickity('previous');
        })
        $('.pd-ctr.next').on('click', function (e) {
            e.preventDefault();
            $carouselProduct.flickity('next');
        })
        // add backgroundheader home page
        let banner = document.querySelector('.banner');
        let heightBanner = banner.clientHeight;
        document.addEventListener('scroll', function () {
            changBgHeader(heightBanner);
        })
    } else if (page.classList.contains('newswrapper')) {
        let banner = document.querySelector('.newswrapper .banner');
        let heightBanner = banner.clientHeight;
        document.addEventListener('scroll', function () {
            changBgHeader(heightBanner);
        })
    } else if (page.classList.contains('productdetailwrapper')) {
        let banner = document.querySelector('.productdetailwrapper .banner');
        let heightBanner = banner.clientHeight;
        window.addEventListener('scroll', function () {
            changBgHeader(heightBanner);
        });

        let button = $('.info__btn a');
        button.each(function (index) {
            $(this).click(function (e) {
                e.preventDefault();
                let indexImg = index + 1;
                //remove class of img
                $('.item-content img').removeClass('active');
                $(`.item-content .sp-0${indexImg}`).addClass('active');

                //remove class of button
                $('.info__btn a').removeClass('active');
                $(`.info__btn .btn-0${indexImg}`).addClass('active');
            })
        });


        // accordian 
        let btnTitle = $('.detail__info-tags .tag__item .tag__item-title');
        btnTitle.on('click', function () {

            $('.detail__info-tags .tag__item .tag__item-content').not($(this).next()).slideUp();
            btnTitle.not($(this)).removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').next().slideToggle();
            } else {
                $(this).addClass('active').next().slideToggle();
            }

        })
        //feature hot 
        let $carouselMission = $('.mission__slide .mission__slide-img');

        $carouselMission.flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            // autoPlay: 2500,
            on: {
                ready: function () {
                    let totalSlice = document.querySelectorAll('.mission__slide .mission__slide-img .ms__slide-item').length;
                    let numberTotal = $('.mission .mission__content .number .number__total');
                    numberTotal.text(totalSlice.toString().padStart(2, 0));
                },
                change: function (index) {
                    $('.mission__content .textbox').fadeOut(200).removeClass('active');
                    setTimeout(function () {
                        $(`.t-${index}`).fadeIn(0).addClass('active');
                    }), 300;
                    let currentPage = index + 1;
                    let numberTotal = $('.mission .mission__content .number .number__current');
                    numberTotal.text(currentPage.toString().padStart(2, 0));
                }
            }
        });
        $('.btn-ctl.prev').on('click', function () {
            // $carouselMission.flickity('previous');
            setTimeout(() => { $carouselMission.flickity('previous') }, 300);
        })
        $('.btn-ctl.next').on('click', function () {
            // $carouselMission.flickity('next');
            setTimeout(() => { $carouselMission.flickity('next') }, 300);
        })
    } else if (page.classList.contains('newsdetailwrapper')) {

        let banner = document.querySelector('.newsdetailwrapper .banner');
        let heightBanner = banner.clientHeight;
        window.addEventListener('scroll', function () {
            changBgHeader(heightBanner);
        })
    }



    // Menu mobile
    const clicked = 'clicked';
    let btnMenu = $('.header__control .btnMenu');
    let menuMoble = $('.headerMobile');
    let overlay = $('.overlay');
    btnMenu.on('click', function () {
        btnMenu.toggleClass(clicked);
        menuMoble.toggleClass(clicked);
        overlay.toggleClass(clicked);
    })




})