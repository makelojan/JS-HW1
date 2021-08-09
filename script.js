const userName = prompt("Please type your name:");
document.querySelector("#userName").innerHTML = userName;

const clock = document.querySelector(".clock")
function Time() {
    const date = new Date();
    let h = date.getHours();
    h = h < 10 ? "0"+h : h;

    let m = date.getMinutes();
    m = m < 10 ? "0"+m : m;

    let s = date.getSeconds();
    s = s < 10 ? "0"+s : s;

    let d = date.getDay();
    switch (d) {
        case 0:
            d = "Pazar"
            break;
        case 1:
            d = "Pazartesi"
            break;
        case 2:
            d = "Salı"
            break;
        case 3:
            d = "Çarşamba"
            break;
        case 4:
            d = "Perşembe"
            break;
        case 5:
            d = "Cuma"
            break;
        case 6:
            d = "Cumartesi"
            break;                                               
    }

    clock.innerHTML = h + ":" + m + ":" + s + " " + d;
    setTimeout(Time, 1000)
}
Time();