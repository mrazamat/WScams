/***/
(function () {
    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var img = document.querySelector('img');
    var context=canvas.getContext('2d');

    var constraints={
        video:true,
        audio:false
    };
    navigator.mediaDevices.getUserMedia(constraints).then(function (streem) {
        video.srcObject=streem;
        video.play();
    }).catch(function (err) {

    })
    setInterval(drawCanvas,100);

    function drawCanvas() {
        context.drawImage(video,0,0,canvas.width,canvas.height);
    }

})();