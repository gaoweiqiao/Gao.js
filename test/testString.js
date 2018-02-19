/**
 * Created by patrick on 2018/2/19.
 */
import StringUtil from '../src/string/string';

describe('test string',function(){
    it('test String.trim()', function(){
        let str = 'abc123abc';
        expect(StringUtil.trim(str,'abc')).toEqual("123");
        //
        let str1 = ' abc ';
        expect(StringUtil.trim(str1)).toEqual("abc");
        //expect(1).toEqual(12);
    });
    it("test String.camelCasify()",function(){
        let strList = ["abc0 def",'abc0-def', "abc0_def"];
        strList.forEach((str)=>{
            expect(StringUtil.camelCasify(str)).toEqual("abc0Def");
        });
    });
    it("test String.kebabCasify()",function(){
        let strList = ["abc0Def",'abc0 def', "abc0_def"];
        strList.forEach((str)=>{
            expect(StringUtil.kebabCasify(str)).toEqual("abc0-def");
        });
    });
    it("test String.snackCasify()",function(){
        let strList = ["abc0Def",'abc0-def', "abc0 def"];
        strList.forEach((str)=>{
            expect(StringUtil.snackCasify(str)).toEqual("abc0_def");
        });
    });
});