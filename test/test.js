/**
 * Created by patrick on 2018/2/19.
 */
//import {describe,it,toEqual} from "jasmine";
import Url from '../src/url/url.js';

describe('test url', function(){
    var foo = 'foo2';

    it(' expect foo equal foo ', function(){
        let url = new Url();
        expect(url.port).toEqual("9876");
        //expect(url.query("id")).toEqual("76538803");
        //expect(1).toEqual(12);
    });

});