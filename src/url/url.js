/**
 * Created by patrick on 2018/2/7.
 */
// flow

class Url{
    regex;
    constructor(){
        //this.regex = /([0-9a-zA-Z%_\-\+]+)=([a-zA-Z0-9-_%]+)/g;
        this.regex = /([0-9a-zA-Z%_\-\+]+)=([0-9a-zA-Z%_\-\+]+)/g
    }
    /**
     * @param key is the key of key-value pair in queryString.
     *
     * @return first value of Array;
     * */
    query(key){
        let values = this.queryAll(key);
        if(values.length > 0){
            return values[0];
        }
    }
    /**
     * @param key is the key of key-value pair in queryString.
     *
     * @return Array of values;
     * */
    queryAll(key){
        let values = [];
        let queryStr = location.search;
        let result;
        while (result = this.regex.exec(queryStr)){
            if(key == result[1]){
                values.push(result[2]);
            }
        }
        return values;
    }
    get protocol(){
        return location.protocol;
    }
    get host(){
        return location.host;
    }
    get port(){
        return location.port;
    }
    get path(){
        return location.pathname
    }
    get hash(){
        return location.hash;
    }
}

export default Url;