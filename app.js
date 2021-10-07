const countDown = ()=>{
    const countDate = new Date("October 31, 2021 00:00:00").getTime()
    const now = new Date().getTime();
    const difference = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;



    const dayText = Math.floor( difference / day);
    const hourText = Math.floor((difference % day) / hour)
    const minuteText = Math.floor((difference % hour) / minute)
    const secondsText = Math.floor((difference % minute) / second)

    document.querySelector(".day").innerText = dayText;
    document.querySelector(".hour").innerText = hourText;
    document.querySelector(".minute").innerText = minuteText;
    document.querySelector(".seconds").innerText = secondsText;
    
};

setInterval(countDown, 1000);