// Sticky header

let header = document.querySelector('header');
let heightHeader = header.clientHeight;
let slider = document.querySelector('.slider');
let heightSlider = slider.clientHeight;

// document.addEventListener('scroll', function() {
//     let scrollY = window.pageYOffset;
//     // console.log(scrollY);
//     if (scrollY > heightHeader) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// })


// Scroll menu
let menus = document.querySelectorAll('header .menu a');

menus.forEach(function(element, index) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        let href = element.getAttribute('href');
        let className = href.replace('#', '');
        let div = document.querySelector('.' + className);
        let positionDiv = div.offsetTop;
        console.log(positionDiv);
        window.scrollTo({
            top: positionDiv - heightHeader,
            behavior: 'smooth'
        })
    })
});


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
    // let menus = $('.menu li a');
    // $(menus).each(function(index, element) {
    //     $(element).click(function(item) {
    //         item.preventDefault();
    //         let href = $(this).attr('href');
    //         let nameItem = $(href).attr('id');
    //         let div = ('.' + nameItem);
    //         let position = $(div).offset().top;

    //         window.scrollTo({
    //             top: position - $('header').height(),
    //         })
    //     })
    // })

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

    $('.popup__video').on('click', function() {
        $('.popup__video iframe').attr('src', '');
        $('.popup__video').css("display", "none");
    })


    // Scroll 

    let $scroll = $('.scroll')
    $scroll.flickity({
        lazyLoad: 5,
        freeScroll: true,
        contain: true,
        cellAlign: 'left',
        prevNextButtons: false,
        pageDots: false,
        fullscreen: true,
        dragThreshold: 10
    });

    // Back to top
    $('.footer__back a').on('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

})


// Gallery (PhotoSwipe)
var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

initPhotoSwipeFromDOM('.carousel-img');