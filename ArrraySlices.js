function ArraySlices(arr , slices){
    let result = [];
    if(slices <= 0 || !Number.isInteger(slices)){
        return result;
    }
    let len = Math.floor(arr.length/slices);
    let start = 0;
    let end = len;
    for(let i = 0 ; i < slices ; i++){
        if (i == slices - 1){
            result.push(arr.slice(start));
        }
        else{
            result.push(arr.slice(start,end));
        }
        start = end;
        end = end + len;
    }
    return result;
    
}
console.log(ArraySlices([1,2,3,4,5,6,7],6));