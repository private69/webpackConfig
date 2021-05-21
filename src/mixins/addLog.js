/**
 * 增加日志
 */
'use strict';

export const getBrowse = function(data = null){
    if(data == null)
        throw new Error("请传入正确的参数...");
    let browse = new Array()
    let broArr = [
        'Chrome',
        'Safari',
        'Opera',
        'Edge',
        'FireFox'
    ]
    console.log(data);
    broArr.forEach( name => {
        if(data.appVersion.indexOf(name) > -1)
            browse.push(name) 
    })
    return browse.join(",")
}