$(function () {
    function getClientWidth() {
        var clientWidth = document.body.clientWidth;
        return clientWidth;
    }

    var clientWidth = getClientWidth();
    if (clientWidth < 900) {
        $('.mm9_block').css({
            width: clientWidth / 2 - 30
        });
    }

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    jwplayer.key="nepUPzTytAJg+wzuRfrqjqJOr93NJE0O3WHNUA==";

    var playerInstance1 = jwplayer("videoElement1");
    playerInstance1.setup({
        file: '/static/images/video/soma_sf.mp4',
        image: '/static/images/uis/video_cover.png',
        width: "100%",
        aspectratio: "16:9",
        title: pageI18n.aboutSoma,
        description: '',
        mediaid: 'video2'
    });

});