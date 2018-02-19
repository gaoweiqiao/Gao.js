/**
 * Created by patrick on 2018/2/18.
 */

class Cache{
    dataSet = {};
    getData(name){
        if(undefined === this.dataSet[name]){
            var dataString = sessionStorage.getItem(name);
            this.dataSet[name] = dataString ? JSON.parse(dataString) : [];
        }
        return this.dataSet[name];
    }
    setData(name,data){
       this.dataSet[name] = data;
    }
    sync(name){
        if(0 === this.getData(name).length){
            this.clear(name);
        }else{
            sessionStorage.setItem(name,JSON.stringify(this.dataSet[name]));
        }
    }
    clear(name){
        sessionStorage.removeItem(name);
    }
}
let cache = new Cache();
class DataBase{
    select(){
        return new QueryOperation();
    }
    delete(){
        return new DeleteOperation();
    }
    update(tableName,updation){
        return new UpdateOperation(tableName,updation);
    }
    insert(){
        return new InsertOperation();
    }
    drop(){
        return new DropOperation();
    }
}

class Operation{
    tableName;
    __operate(data){
        throw new Error("Opration don't implements.");
    }
    from(tableName){
        this.tableName = tableName;
        return this;
    }
    where(condition){
        this.condition = condition;
        return this;
    }
    execute(){
        if(undefined === this.tableName){
            throw new Error("No table");
        }
        //
        let data = [];
        let dataSet = cache.getData(this.tableName);
        if('function' === typeof this.condition){
            dataSet.forEach((item)=>{
                if(this.condition(item)){
                    data.push(item);
                }
            });
        }else{
            data = dataSet;
        }
        //
        return this.__operate(data);

    }
}
class QueryOperation extends Operation{
    constructor(){
        super();
    }
    __operate(data){
        return data;
    }
}
class DeleteOperation extends Operation{
    constructor(){
        super();
    }
    //execute(){
    //    throw new Error('must not call this method');
    //}
    __operate(data){
        var dataSet = cache.getData(this.tableName);
        var resultSet = [];
        dataSet.forEach((item)=>{
            if(data.indexOf(item) < 0){
                resultSet.push(item);
            }
        });
        cache.setData(this.tableName,resultSet);
        cache.sync(this.tableName);
    }
}
class UpdateOperation extends Operation{
    __data;
    constructor(tableName,data){
        super();
        this.from(tableName);
        this.__data = data;
    }

    __operate(data){

        for(let i=0;i<data.length;i++){
            let item = data[i];
            for(let key in this.__data){
                if(this.__data.hasOwnProperty(key)){
                    item[key] = this.__data[key];
                }
            }
        }
        //cache.setData(this.tableName,data);
        cache.sync(this.tableName);
    }
}
class InsertOperation extends Operation{
    constructor(){
        super();
    }
    into(tableName,data){
        this.from(tableName);
        this.__operate(data);
    }
    __operate(data){
        if(undefined === this.tableName){
            throw new Error("No table to insert");
        }
        let resultSet = cache.getData(this.tableName);
        resultSet = resultSet.concat([data]);

        cache.setData(this.tableName,resultSet);
        cache.sync(this.tableName);
    }
}
class DropOperation extends Operation{
    constructor(){
        super();
    }
    table(tableName){
        cache.clear(tableName);
    }
}
export default DataBase;