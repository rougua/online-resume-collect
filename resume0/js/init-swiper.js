!function () {
    const view = e('#mySlides')
    
    const controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            pagination: { el: '.swiper-pagination',},
            navigation: { 
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(
                find(this.view, '.swiper-container'),
                this.swiperOptions
            )
        }
    }

    controller.init(view)
}()