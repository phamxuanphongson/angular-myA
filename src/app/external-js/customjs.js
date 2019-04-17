function getTheAudio(){
    var audioTag = document.querySelector('#audio');
    var durationTag = document.querySelector('.theDuration>p');
    var progressBar = document.querySelector('#seekbar');
    window.onload = function(){
        var loadingText = document.querySelector('.loadingText');
        loadingText.classList.add('wait-on');
        // var songBox = document.querySelector('.songs-box').classList.add('player-on');
    }
    audioTag.onloadedmetadata = function(){
        var minutes = parseInt(audioTag.duration / 60, 10);
        var seconds = parseInt(audioTag.duration % 60);
        theDuration = (minutes+":"+seconds);
        durationTag.innerHTML = theDuration;
        var progressBar = document.querySelector('#seekbar');
        var currentTimeTag = document.querySelector('.currentTimeTag');
        var loadingText = document.querySelector('.loadingText').classList.add('wait-off');
        var songBox = document.querySelector('.songs-box').classList.add('player-on');
        audioTag.ontimeupdate = function(){
            var percent = parseInt(parseInt(audioTag.currentTime)*100/parseInt(audioTag.duration));
            progressBar.setAttribute("style", 'width:'+percent+'%');  
            var minutes = parseInt(this.currentTime / 60, 10);
            var seconds = parseInt(this.currentTime % 60);
            theCurrentTime = (minutes+":"+seconds);
            currentTimeTag.innerHTML = theCurrentTime;
            
        }
    }
}

function controlM(){
    var audioTag = document.querySelector('#audio');
    var isPlaying = !audioTag.paused;
    if(isPlaying){
        audioTag.pause();
        isPlaying = !isPlaying;
    }else{
        audioTag.play();
    }
}
