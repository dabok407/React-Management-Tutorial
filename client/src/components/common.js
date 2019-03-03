
function bufferConvert(props,value){
    let returnVal = "";
    let propsObj = props[value];
    if(propsObj.data === undefined){
        returnVal = propsObj.toString();
    }else{
        let convertVal = new Buffer(propsObj.data, "utf8");
        returnVal = convertVal.toString(); 
    }
    return returnVal;
}

module.exports = {
    bufferConvert : bufferConvert
}