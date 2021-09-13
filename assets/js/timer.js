var slider = document.getElementById("progressbar");
var progress = document.getElementById("progress");

var widBar = parseInt(window.getComputedStyle(progress).width);

var widthprogress = parseInt(window.getComputedStyle(slider).width);

var result = Math.round((widBar/widthprogress)*100);

var LeftTime = 900; //9000秒
var MaxTime = 900; 


function Resize(alpha){

    progress.style.width = (alpha*100) + "%";

}

function UpdateTime(){
    const min = Math.floor((LeftTime/60)).toString();
    const sec = Math.floor((LeftTime%60)).toString();
    progress.innerText  = "残り時間" + min + ":" + sec;
}







var scrollstart = slider.offsetTop;

const IntervalId = setInterval(() => {
    
    if (LeftTime < 0){
        window.location.href = 'BadEnd.html';
        clearInterval(IntervalId);
    }else{
        LeftTime -= 0.05;
        Resize(LeftTime/MaxTime);
        UpdateTime();
    }


}, 50);
