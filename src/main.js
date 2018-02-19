/**
 * Created by patrick on 2018/2/7.
 */
/**
 * todo:url解析类,主要解析queryString
 * */
import Url from './url/url.js';
import Image from './image/image.js';
import StringUtil from './string/string.js';
import Convertor from './utils/converter.js';
import DataBase from './db/database.js';
class GaoModule{

    constructor(){

    }
    get $url(){
        return new Url();
    }
    get $image(){
        return new Image();
    }
    get $string(){
        return StringUtil;
    }
    get $converter(){
        return Converter;
    }
    get $db(){
        return new DataBase();
    }
}
window.Gao = new GaoModule();
