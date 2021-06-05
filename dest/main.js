// // Sticky header

// let header = document.querySelector('header');
// let heightHeader = header.clientHeight;
// let slider = document.querySelector('.slider');
// let heightSlider = slider.clientHeight;

// document.addEventListener('scroll', function() {
//     let scrollY = window.pageYOffset;
//     // console.log(scrollY);
//     if (scrollY > heightHeader) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// })


// // Scroll menu
// let menus = document.querySelectorAll('header .menu a');

// menus.forEach(function(element, index) {
//     element.addEventListener('click', function(e) {
//         e.preventDefault();
//         let href = element.getAttribute('href');
//         let className = href.replace('#', '');
//         let div = document.querySelector('.' + className);
//         let positionDiv = div.offsetTop;
//         window.scrollTo({
//             top: positionDiv - heightHeader,
//             behavior: 'smooth'
//         })
//     })
// });


// // Change language
// let langCurrent = document.querySelector('.language');
// let currentItem = document.querySelector('.language__current span');
// let optionItem = document.querySelectorAll('.language__option a');

// langCurrent.addEventListener('click', function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     langCurrent.classList.toggle('active');
// })

// optionItem.forEach(function(item) {
//     item.addEventListener('click', function() {
//         let textOption = this.textContent;
//         let textTemp = currentItem.textContent;
//         currentItem.innerHTML = textOption;
//         this.textContent = textTemp;
//         langCurrent.classList.remove('active');
//     })
// })

// document.addEventListener('click', function(e) {
//     e.stopPropagation();
// })


// // Toggle menu header
// let body = document.querySelector('body');
// let toggle = document.querySelector('.toggle');
// let navHeader = document.querySelectorAll('header .nav a');

// toggle.addEventListener('click', function(e) {
//     e.stopPropagation();
//     body.classList.toggle('clicked');
// })


// navHeader.forEach(function(element, index) {
//     element.addEventListener('click', function(e) {
//         e.preventDefault();
//         let href = element.getAttribute('href');
//         let className = href.replace('#', '');
//         let div = document.querySelector('.' + className);
//         let positionDiv = div.offsetTop;
//         window.scrollTo({
//             top: positionDiv - (heightHeader - 1),
//             behavior: 'smooth'
//         })
//         body.classList.remove('clicked');
//     })
// })


// // Slider
// let listSlider = document.querySelectorAll('.slider__image-item');
// let number = document.querySelector('.number span');
// let dots = document.querySelectorAll('.dots li');
// let currentSlider = 0;


// // Number paging
// function isNumber(index) {
//     number.innerHTML = (index).toString().padStart(2, '0');
// }

// function goTo(index) {
//     listSlider[currentSlider].classList.remove('active');
//     listSlider[index].classList.add('active');

//     dots[currentSlider].classList.remove('selected');
//     dots[index].classList.add('selected');

//     currentSlider = index;
//     isNumber(currentSlider + 1);

// }

// dots.forEach(function(li, index) {
//     li.addEventListener('click', function() {
//         goTo(index);
//     })
// })

// // Button next, prev

// listSlider.forEach(function(list, index) {
//     if (list.classList.contains('active')) {
//         currentSlider = index;
//     }
// })

// document.querySelector('.btn-next').addEventListener('click', function(e) {
//     e.preventDefault();
//     if (currentSlider < listSlider.length - 1) {
//         goTo(currentSlider + 1);
//     } else {
//         goTo(0)
//     }
// })

// document.querySelector('.btn-prev').addEventListener('click', function(e) {
//     e.preventDefault();
//     if (currentSlider > 0) {
//         goTo(currentSlider - 1)
//     } else {
//         goTo(listSlider.length - 1);
//     }
// })


// // Popup video
// let btnVideo = document.querySelectorAll('.play-btn');
// let popup_Video = document.querySelector('.popup__video');
// let iframe = document.querySelector('.popup__video iframe');


// btnVideo.forEach(function(button) {
//     button.addEventListener('click', function() {
//         let video_Id = button.getAttribute('data-video-id');
//         iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video_Id);
//         popup_Video.style.display = "flex";
//     })
// })

// document.querySelector('.popup__video').addEventListener('click', function() {
//     iframe.setAttribute('src', '');
//     popup_Video.style.display = 'none';
// })

// // Back to top
// let backToTop = document.querySelector('.footer__back a');

// backToTop.addEventListener('click', function(e) {
//     e.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// })

$(document).ready(function() {

    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    })

    // Menu header
    let menus = $('.menu li a');
    $(menus).each(function(index, element) {
        $(element).click(function(item) {
            item.preventDefault();
            let href = $(this).attr('href');
            let nameItem = $(href).attr('id');
            let div = ('.' + nameItem);
            let position = $(div).offset().top;

            window.scrollTo({
                top: position - $('header').innerHeight(),
            })
        })
    })

    // Change language
    $('.language').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.language').toggleClass('active');
    })
    $('.language__option a').each(function(index, element) {
        $(element).on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            let temp = $('.language__current span').html();
            $('.language__current span').html($(this).html());
            $(this).html(temp);
        })
    });
    $(document).on('click', function(e) {
        $('.language').removeClass('active');
    })



    // Navbar header
    let nav = $('.nav ul li a');

    $('.toggle').on('click', function(e) {
        e.stopPropagation();
        $('body').toggleClass('clicked');
    })
    $(nav).each(function(index, element) {
        $(element).on('click', function(e) {
            e.preventDefault();
            let href = $(this).attr('href');
            let nameItem = $(href).attr('id');
            let divName = ('.' + nameItem);
            let positionDiv = $(divName).offset().top;
            window.scroll({
                top: positionDiv - $('header').height(),
            })
            $('body').removeClass('clicked');
        })
    })

    // Slider controls
    let $carousel = $('.slider__image');
    $carousel.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        on: {
            ready: function() {
                let dotted = $('.flickity-page-dots');
                let paging = $('.slider__controls-left .dots');
                dotted.appendTo(paging);
            },
            change: function(index) {
                let number = $('.slider__controls-left .number span');
                let indexPage = index + 1;
                number.text(indexPage.toString().padStart(2, 0));
            }
        }
    })

    //button next, prev controls
    $('.btn-prev').on('click', function(e) {
        e.preventDefault();
        $carousel.flickity('previous');
    });
    $('.btn-next').on('click', function(e) {
        e.preventDefault();
        $carousel.flickity('next');
    })


    // Product video  

    $('.play-btn').each(function(index, element) {
        $(element).on('click', function() {
            let videoId = $(element).attr('data-video-id');
            $('.popup__video iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);
            $('.popup__video').css("display", "flex");
        })
    })


})

// // Popup video
// let btnVideo = document.querySelectorAll('.play-btn');
// let popup_Video = document.querySelector('.popup__video');
// let iframe = document.querySelector('.popup__video iframe');


// btnVideo.forEach(function(button) {
//     button.addEventListener('click', function() {
//         let video_Id = button.getAttribute('data-video-id');
//         iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video_Id);
//         popup_Video.style.display = "flex";
//     })
// })

// document.querySelector('.popup__video').addEventListener('click', function() {
//     iframe.setAttribute('src', '');
//     popup_Video.style.display = 'none';
// })