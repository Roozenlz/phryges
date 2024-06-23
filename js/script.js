const list = document.getElementById('list')
const burger = document.getElementById('burger-menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    list.classList.toggle('active')
})

/*----------------------- swipers btns --------------------*/
let swiper_btns = document.querySelectorAll('.swiper-btn')
var counter = 0

swiper_btns.forEach(btn => btn.addEventListener('click', () => {
    counter = btn.getAttribute('data-swiper-btn')
    
    swiper_btns.forEach(btn => btn.classList.remove('active'))
    btn.classList.add('active')

    features_swiper.slideTo(counter, 400, false);

}))


const btnsSwiper = new Swiper('.swiper.features-btn', {
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    freeMode: {
        enabled: true,
        sticky: true,
    },
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1150: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

btnsSwiper.on('transitionEnd', function() {
    counter = btnsSwiper.realIndex

    swiper_btns.forEach(btn => btn.classList.remove('active'))
    swiper_btns[counter].classList.add('active')

    features_swiper.slideTo(counter, 500, false);
});

/*---------------- features-swiper -------------*/
const features_swiper = new Swiper('.features-swiper', {
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    freeMode: {
        enabled: false,
        sticky: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
});

features_swiper.on('transitionEnd', function() {
    counter = features_swiper.realIndex

    swiper_btns.forEach(btn => btn.classList.remove('active'))
    swiper_btns[counter].classList.add('active')

    btnsSwiper.slideTo(counter, 500, false);
});


/*------------------ roadmap data ------------------*/
let roadmap_btns = document.querySelectorAll('.roadmap-btn')
var roadmap_counter = 0

roadmap_btns.forEach(btn => btn.addEventListener('click', () => {
    roadmap_counter = btn.getAttribute('data-roadmap-btn')
    
    roadmapSwiper.slideTo(roadmap_counter, 500, false);
    roadmap_btns.forEach(btn => btn.classList.remove('active'))
    btn.classList.add('active')
}))

const roadmapSwiper = new Swiper('.roadmap-swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.roadmap-swiper .swiper-button-next',
        prevEl: '.roadmap-swiper .swiper-button-prev',
    },

    freeMode: {
        enabled: false,
        sticky: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
});

roadmapSwiper.on('transitionEnd', function() {
    roadmap_counter = roadmapSwiper.realIndex

    roadmap_btns.forEach(btn => btn.classList.remove('active'))
    roadmap_btns[roadmap_counter].classList.add('active')
});

const blobTiersSwiper = new Swiper('.blob-tiers', {
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    freeMode: {
        enabled: false,
        sticky: true,
    },
    slidesPerView: 2,
    spaceBetween: 20,
    
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        840: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },

});

/*-------------------------- popup ----------------------*/
let popup = document.getElementById('popup')

let showPopup = () => {
    popup.scrollTo(0, 0)
    popup.classList.add('active')
}
let hidePopup = () => {
    popup.scrollTo(0, 0)
    popup.classList.remove('active')
}

popup.scrollTo(0, 0)