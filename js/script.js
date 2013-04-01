;
(function () {
    $('.header__nav > li ').on('click',function(){
        headerNavHandler($(this).children('a'));

    })
    $('.header__nav_alpha > li ').on('hover', function () {

        headerNavHandler($(this).children('a'));
    })

    function headerNavHandler(link) {
        var subMenu = link.next('.header__nav__sub');
        console.log(link);
        if (subMenu.length > 0) {
            link.toggleClass('active')
                .closest('li')
                .siblings('li').find('a').removeClass('active');

            subMenu.toggle()
                .closest('li').siblings('li').find('.header__nav__sub').hide();
        }
    }


    $('.slider__in').cycle({
        pager: '.slider__nav',
        activePagerClass: 'active'
    });

    $('.tabs__nav a').on('click', function (e) {
        var navItem = $(this);
        navItem.addClass('active')
            .closest('li').siblings('li').find('a').removeClass('active');
        navItem.closest('.tabs__nav')
            .next('.tabs__contents')
            .find('.tabs__contents__item').eq(navItem.parent().index()).show()
            .siblings().hide();
        e.preventDefault();
    })

})();

$(document).ready(function () {
    $('input[placeholder], textarea[placeholder]').placeholder();

})
