const countdown = () => {
    const CountDate = new Date('December 01 , 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = CountDate - now;
    const second = 1000;
    const min = second * 60;
    const hour = min * 60;
    const day = hour * 24;

    const textday = Math.floor(gap/day);
    const texthour = Math.floor((gap%day)/hour)
    const textmin = Math.floor((gap%hour)/min)
    const textsec = Math.floor((gap%min)/second)

    document.querySelector(".days").innerHTML = textday
    document.querySelector(".hours").innerHTML = texthour 
    document.querySelector(".min").innerHTML = textmin
    document.querySelector(".sec").innerHTML = textsec
};

setInterval(countdown , 1000)
