document.addEventListener("DOMContentLoaded", function() {

function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const secondsDegrees=((seconds/60)*360)+90;
    console.log(seconds);
    const secondHand=document.querySelector(".second-hand");
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

    const mins=now.getMinutes();
    const minsDegrees=((mins/60)*360)+90;
    const minsHand=document.querySelector(".min-hand");
    minsHand.style.transform=`rotate(${minsDegrees}deg)`;

    const hour=now.getHours();
    const hourHand=document.querySelector(".hour-hand");
    const hourDegrees=(hour/12*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000);//function runs evry second
});
