// let tl0 = gsap.timeline()
// tl0
// .fromTo('.intro', { opacity: 1,  }, { opacity: 0, duration: .4, delay: 1 })

let tl1 = gsap.timeline()
tl1
.fromTo('.navbar', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.4 })
.fromTo('.section-0 .right .phone_img', { opacity: 0, scale: .8 }, { opacity: 1, scale: 1, duration: .7 }, '<.5')
.fromTo('.section-0 .left h2', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: .7 }, '<.1')
.fromTo('.section-0 .left h1', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: .7 }, '<.1')
.fromTo('.section-0 .left p', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: .7 }, '<.1')
.fromTo('.section-0 .left .email_container', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .7 }, '<.1')

.fromTo('.section-0 .abs_img.plane', { opacity: 0, scale: .8 }, { opacity: 1, scale: 1, duration: .7 }, '<.1')
.fromTo('.section-0 .abs_img.cloud', { opacity: 0, scale: .8 }, { opacity: 1, scale: 1, duration: .7 }, '<.1')
.fromTo('.section-0 .abs_img.sun', { opacity: 0, scale: .8 }, { opacity: 1, scale: 1, duration: .7 }, '<.1')
.fromTo('.section-0 .abs_img.blob_swim', { opacity: 0, scale: .8 }, { opacity: 1, scale: 1, duration: .7 }, '<.1')
.fromTo('.section-0 .abs_img.blob_work', { opacity: 0, scale: .8 }, { opacity: 1, scale: 1, duration: .7 }, '<.1')

let intro = document.getElementById('intro')
setTimeout(() => {
    intro.style.display = 'none'
}, [5000])

let tl2 = gsap.timeline({})

tl2.
fromTo('.swiper *', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '<1.5')
.fromTo('#text *', { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 1)
.fromTo('.section-1 .img_container', { scale: .7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, 1)

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 80%',
        end: 'top 70%',
        scrub: 3,
    }
})

let blob_tier = gsap.timeline({
    scrollTrigger: {
        trigger: '.blob_tier',
        start: 'top 90%',
        end: 'bottom 90% ',
        scrub: 1,
    }
})

blob_tier
.fromTo('.blob-tiers h1', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, '<0')
.fromTo('.blob-tiers h2', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, '<0')
.fromTo('.blob-tiers span', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, '<0')
.fromTo('.blob-tiers p', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, '<0')

tl3
.fromTo('.section-2 .left *', { opacity: 0, scale: .7 }, { opacity: 1, scale: 1, duration: 5 }, 5)
.fromTo('.section-2 .right *', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 5, stagger: .7 }, 5)


let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-3',
        start: 'top 70%',
        end: 'top 70%',
        scrub: 3,
    }
})

tl4
.fromTo('.section-3 > *', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1)
.fromTo('.section-3 .card p', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1)
.fromTo('.section-3 .card .btns_container', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 1)

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-4.first',
        start: 'top 70%',
        end: 'top 70%',
        scrub: 3,
    }
})

tl5
.fromTo('.section-4.first .left', { scale: .7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, 1)
.fromTo('.section-4.first .right *', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: .3, }, 1)

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-4.second',
        start: 'top 70%',
        end: 'top 70%',
        scrub: 3,
    }
})

tl6
.fromTo('.section-4.second .left', { scale: .7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, 1)
.fromTo('.section-4.second .right *', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: .3, }, 1)


let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-4.third',
        start: 'top 70%',
        end: 'top 70%',
        scrub: 3,
    }
})

tl7
.fromTo('.section-4.third .left', { scale: .7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, 1)
.fromTo('.section-4.third .right *', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1, stagger: .3, }, 1)

let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-5',
        start: 'top 70%',
        end: 'bottom 90%',
        scrub: 3,
        duration: 3,
    }
})

tl8
.fromTo('.section-5 h1', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 10 })
.fromTo('.section-5 > .btns_container .btn', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 15,stagger: 5, })
.fromTo('.section-5 .content h2', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 5 })
.fromTo('.section-5 .content ul *', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 10, stagger: 4, })
.fromTo('.section-5 .content .btns_container .btn', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 10, stagger: 5, }, "<1")


let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-6',
        start: 'top 70%',
        end: 'bottom 80%',
        scrub: 3,
    }
})

tl9
.fromTo('.section-6 h1', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
.fromTo('.section-6 .content .left', { scale: .7, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 })
.fromTo('.section-6 .content .right *', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 3, duration: 10 })


let tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section-7',
        start: 'top 70%',
        end: '50% 80%',
        scrub: 3,
    }
})

tl10
.fromTo('.section-7 h1', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
.fromTo('.section-7 .social_media', { scale: .7, opacity: 0 }, { scale: 1, opacity: 1 ,stagger: 1, duration: 3 })

let tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section.get_free',
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 1,
    }
})

tl11
.fromTo('.section.get_free', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })


let tl12 = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
    }
})

tl12
.fromTo('.contact h1', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
.fromTo('.contact .left', { scale: .7, opacity: 0 }, { scale: 1, opacity: 1, duration: 2 })
.fromTo('.contact .content form *', { x: 50, opacity: 0 }, { x: 0, opacity: 1, stagger: .6, duration: 2 })
