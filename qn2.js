// 2nd Given a time in 12-hr AM/PM format, convert it to military time(24hr) and you also need to add 45
// min &45 sec in the result and the display the output.
// E.g.: - Input – 12:01:00PM Output 12:46:45
// Input – 12:01:00AM Output 00:46:45

function militaryTime(normalTime){
    let trimmed = normalTime.trim();
    var suff = trimmed.substring((trimmed.length)-2,(trimmed.length));
    var firstInterval = trimmed.indexOf(":",0);
    var minInterval = trimmed.lastIndexOf(":");
    var hr= trimmed.substring(0,firstInterval);
    var min= trimmed.substring(firstInterval+1,minInterval);
    let hour = parseInt(hr);
    let minute = parseInt(min);
    if(suff=="AM"){
        hour=((hour==12)?(0):(hour));
    };
    if(suff=="PM"){
        hour=((hour==12)?(12):(hour+12));
    };
    minute=minute+45;
    var time = (hour).toString()+":"+(minute).toString()+":"+trimmed.substring(minInterval+1,trimmed.length-3);
    return time;
}

console.log(militaryTime("  11 : 01 : 00   PM  "));

// export default militaryTime;
