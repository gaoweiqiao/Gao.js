/**
 * Created by patrick on 2018/2/18.
 */

class DateUtil{
    daybreak(date = new Date()){
        return new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0);
    }
    _addTime(date,delta){
        var timestamp = date.getTime()+delta;
        return new Date(timestamp);
    }
    addDay(date = new Date(),deltaDay = 0){
        return this._addTime(date,1000*60*60*24*deltaDay);
    }

    format(template,date = new Date()){
        var regex = /(yyyy|MM|dd|HH|mm|ss|zzz)/g;
        var dateStringList = [];
        var lastIndex = 0;
        let dateComponent = null;

        while(dateComponent = regex.exec(template)){
            dateStringList.push(template.slice(lastIndex,dateComponent.index));
            var templateFragment = dateComponent[0];
            if("yyyy" === templateFragment){
                dateStringList.push(date.getFullYear());
            }else if("MM" === templateFragment){
                dateStringList.push(date.getMonth()+1);
            }else if("dd" === templateFragment){
                dateStringList.push(date.getDate());
            }else if("HH" === templateFragment){
                dateStringList.push(date.getHours());
            }else if("mm" === templateFragment){
                dateStringList.push(date.getMinutes());
            }else if("ss" === templateFragment){
                dateStringList.push(date.getSeconds());
            }else if("zzz" === templateFragment){
                dateStringList.push(date.getMilliseconds());
            }
            lastIndex = dateComponent.index+templateFragment.length;
        }
        dateStringList.push(template.slice(lastIndex,template.length));
        return dateStringList.join("");
    }
    formatTimestamp(template,timestamp = new Date().getTime()){
        return this.format(template,new Date(timestamp));
    }
    eq(date1,date2){
        return date1.getTime() == date2.getTime();
    }
}
export default DateUtil;