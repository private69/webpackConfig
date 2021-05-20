/**
 * @param _funcArray        记录相应的方法名称
 * @param _callbackArray    存放方法的回调方法
 * @function on     插入相应方法队列
 * @function off    删除方法队列相应位置数据
 * @function emit   触发方法队列的特定位置回调
 */

// 方法队列
class bus {
    constructor(){
        this._funcArray = [];
        this._callbackArray = [];
    }
    // 插入到方法队列中 (静态方法 避免实例化才能使用)
    on(funcName , callback){
        // 判断回填函数是否是方法
        if(typeof callback !== "function")
            throw new Error(`${funcName}的回调需要为函数类型`);
        this._funcArray.push(funcName);
        this._callbackArray.push(callback);
    }
    // 删除方法队列的相应方法
    off(funcName){
        if(this._funcArray.indexOf(funcName) <= -1){
            throw new Error(`不存在该方法`);
        }
        let index = this._funcArray.indexOf(funcName);
        this._funcArray.splice(index , 1);
        this._callbackArray.splice(index , 1);
    }
    // 触发方法队列的特定位置方法
    emit(funcName , ...data) {
        if(this._funcArray.indexOf(funcName) <= -1){
            throw new Error(`不存在该方法`);
        }
        // 校验数组的长度
        if( !this._funcArray.length && !this._callbackArray.length && this._funcArray.length !== this._callbackArray.length ){
            throw new Error(`error occur！`)
        }
        let index = this._funcArray.indexOf(funcName);
        setTimeout(() => {
            /**
             * 数据长度：
             *      唯一
             *      大于一
             */
            if(data.length > 1)
                this._callbackArray[index](data);
            else if(data.length <= 1)
                this._callbackArray[index](data.pop());
        },20)
    }
}

export default new bus();