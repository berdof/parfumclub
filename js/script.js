;
(function () {
    $('.header__nav > li > a , .header__nav_alpha > li > a ').on('click', function () {
        var link = $(this),
            subMenu = link.next('.header__nav__sub');

        if (subMenu.length > 0) {
            link.toggleClass('active')
                .closest('li')
                .siblings('li').find('a').removeClass('active');

            subMenu.toggle()
                .closest('li').siblings('li').find('.header__nav__sub').hide();
        }
    })

    $('.slider__in').cycle({
        pager:'.slider__nav',
        activePagerClass:'active'
    })
})();


