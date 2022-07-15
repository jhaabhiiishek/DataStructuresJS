// Given an array of bird where every element represents a bird type id, determine the ids of the most
// frequently and least frequently sighted type. If more than 1 type has been spotted that maximum
// amount, return the smallest of their ids & If more than 1 type has been spotted that minimum amount,
// return the smallest of their ids.

function bird(birdsArray){
    const sorted = sort(birdsArray);
    sorted.push(0);
    var min = sorted[0];
    var max = sorted[0];
    var minfreq=0;
    var maxfreq=0;
    for(var i=0; i<sorted.length;){
        // console.log("here2");
        var id = sorted[i];
        var freq=1;
        for(var j=i+1; j<sorted.length;j++){
            if(id === sorted[j]){
                freq+=1;
                if(freq<minfreq){
                    min=sorted[i];
                    minfreq=freq
                };
                if(freq>maxfreq){
                    max=sorted[i];
                    maxfreq=freq
                };
                if(freq==minfreq){min=(id<min)?(id):min;};
                if(freq==maxfreq){max=(id<max)?(id):max;};
                // console.log("here4");
                continue;
            }
            else {
                if(freq<minfreq){min=sorted[i];
                    minfreq=freq};
                if(freq>maxfreq){max=sorted[i];
                    maxfreq=freq};
                if(freq==minfreq){min=(id<min)?(id):min;};
                if(freq==maxfreq){max=(id<max)?(id):max;};
                break;
            };
        }
        if(i==0){
            minfreq=freq;
            maxfreq=freq;
        };
        i=j;
        console.log("value of max freq = "+maxfreq);
        console.log("value of min freq = "+minfreq);
    }
    // console.log("here6");
    var ans =[max,min];
    return(ans);
}
// Selection sort to sort the elements
function sort(array) {
    var min = 0;
    var index = 0;
    var temp = 0;

    for (var i = 0; i < array.length; i += 1) {
        index = i;
        min = array[i];
        for (var j = i + 1; j < array.length; j += 1) {
        if (min-(array[j]) > 0) {
            min = array[j];
            index = j;
        }
    }
    temp = array[i];
    array[i] = min;
    array[index] = temp;
    }
    return array;
}

const bc =[1,2,2,4,4,4,4,5];
console.log(bird(bc));

export default bird;
