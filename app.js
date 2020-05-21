const timeHandler = () => {
    let date = new Date();
    
    let h = date.getHours();    
    let min = date.getMinutes();
    let s = date.getSeconds();
    
    let realHr = meridiemHandler(h);
    
    h = checkHour(h);
    console.log(h);
    h = formatToPair(h);
    min = formatToPair(min);
    s = formatToPair(s);
    
    document.getElementById('clock').innerHTML =`${h} : ${min} : ${s} ${realHr}`;
}

const meridiemHandler = time => {
    let meridiem = 'PM';
    if ( time <= 12 ){
        meridiem = 'AM';
    }
    return meridiem;
}

const checkHour = time => {
    if (time > 12){
        time -= 12;    
    }
    if (time === 0) {
        time = 12;
    }
    return time;
}

const formatToPair = time => {
    if ( time < 10 ){
        time = "0" + time;
    }
    return time
}

timeHandler();
setInterval(() => {
    timeHandler();
}, 1000);
