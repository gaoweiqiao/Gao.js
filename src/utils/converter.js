/**
 * Created by patrick on 2018/2/8.
 */
/**
 * todo:转换相关类,模型转换
 * */
import StringUtil from '../string/string.js';

class Converter{
    /**
     * @param {Object | Array} the source object;
     *
     * @Param {Function} a convert function which accept a String param and return a String value.
     *
     * */
    static convert(obj,func){
        if(typeof obj === 'object'){
            for(let key in obj){
                if(obj.hasOwnProperty(key)) {
                    let value = obj[key];
                    delete obj[key];
                    obj[func(key)] = value;
                    Converter.convert(value,func);
                }
            }
        }
        return obj;
    }
}

export default Converter;