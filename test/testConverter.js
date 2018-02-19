/**
 * Created by patrick on 2018/2/19.
 */
import Converter from "../src/utils/converter";
import StringUtil from "../src/string/string";
describe('test utils',function(){
   it('test Converter.convert(Object)',function(){
       let sourceObj = {"a-b":12,"c d":"good","e_f":{'g--h':23}};
       let targetObj = {"aB":12,"cD":"good","eF":{gH:23}};
       let resultObj = Converter.convert(sourceObj,StringUtil.camelCasify);
       expect(resultObj).toEqual(targetObj);
   });
    it('test Converter.convert(Array)',function(){
        let sourceObj = [{"a-b":12,"c d":"good","e_f":{'g--h':23}},{'j-k':{'m-n':123}}];
        let targetObj = [{"aB":12,"cD":"good","eF":{gH:23}},{'jK':{'mN':123}}];
        let resultObj = Converter.convert(sourceObj,StringUtil.camelCasify);
        expect(resultObj).toEqual(targetObj);
    });
});