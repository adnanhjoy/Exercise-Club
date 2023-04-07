const addBreakTime = (num) => {
    let breakTime = {};

    let quantity = breakTime[num];
    if(quantity){
        breakTime[num] = quantity;
    }else{
        breakTime[num] = 1;
    }

    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

const getBreakTime = () => {
    let breakTime ={};

    const getTime = localStorage.getItem('break-time');
    if(getTime){
        breakTime = JSON.parse(getTime);
    }
    return breakTime
}

export {addBreakTime, getBreakTime}