/**
 * Created by patrick on 2018/2/19.
 */

import DateUtil from '../src/date/date.js';
function mockDate(){
    return new Date(2018,1,14,12,20,50,812);
}
describe('test date',function(){
    let util = new DateUtil();
    it('test date.daybreak',function(){
        let date = mockDate();
        let targetDate = new Date(2018,1,14,0,0,0,0);
        expect(util.daybreak(date)).toEqual(targetDate);
    });
    it('test date.addDay',function(){
        let date = new Date(2018,1,28,12,20,50,812);
        let targetDate = new Date(2018,2,1,12,20,50,812);
        expect(util.addDay(date,1)).toEqual(targetDate);
    });
    it('test date.format',function(){
        let date = mockDate();
        expect(util.format('yyyy年MM月dd日 HH:mm:ss:zzz',date)).toEqual('2018年2月14日 12:20:50:812');
    });
    it('test date.formatTimestamp()',function(){
        let date = mockDate();
        expect(util.formatTimestamp('yyyy年MM月dd日 HH:mm:ss:zzz',date.getTime())).toEqual('2018年2月14日 12:20:50:812');
    });
    it('test date.eq',function(){
        let date = mockDate();
        let date2 = util.addDay(new Date(2018,1,15,12,20,50,812),-1);
        expect(util.eq(date,date2)).toBe(true);
    });
});