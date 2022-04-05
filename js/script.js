let soundLevel = document.querySelectorAll("audio");

soundLevel.forEach((sound) => sound.volume = 0.01);

console.log(soundLevel);

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});