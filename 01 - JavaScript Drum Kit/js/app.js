/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function() {

    function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        //skip if not transform
        this.classList.remove("playing");
    }


    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));

    function play(e) {
        const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
        const key = document.querySelector(`div[data-key='${e.keyCode}']`);
        audio.currentTime = 0; //rewind the start
        audio.play();
        key.classList.add("playing");
    }
    window.addEventListener("keydown", play);
});
