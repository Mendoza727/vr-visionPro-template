AFRAME.registerComponent('play-pause', {
    init: function () {
        var myvideo = document.querySelector('#saxenda');
        var videoControls = document.querySelector('#videoControls');
        this.el.addEventListener('click', function () {
            if (myvideo.paused) {
                myvideo.play();
                videoControls.setAttribute('src', '#pause');
            } else {
                myvideo.pause();
                videoControls.setAttribute('src', '#play')
            }
        })
    }
})