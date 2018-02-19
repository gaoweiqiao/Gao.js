/**
 * Created by patrick on 2018/2/19.
 */
import DB from '../src/db/database.js';

describe('test database',function(){
    const TABLE_NAME = "gao";
    const db = new DB();
    beforeAll(function(){

        sessionStorage.clear();
        console.log("beforeAll run");
    });

    beforeEach(function(){
        sessionStorage.clear();
        console.log("beforeEach run");

    });
    afterEach(()=>db.drop().table(TABLE_NAME));
    it('test db.insert',function(){
        let a = [
            {a:1,b:'gao'},
            {a:2,c:'wei'},
            {a:3,d:'qiao'},
        ];
        a.forEach(function(item){
            db.insert().into(TABLE_NAME,item);
        });
        //
        let result = db.select().from(TABLE_NAME).execute();
        console.log('insert demo');
        console.log(result);
        expect(window.sessionStorage.getItem(TABLE_NAME)).toEqual(JSON.stringify([
            {a:1,b:'gao'},
            {a:2,c:'wei'},
            {a:3,d:'qiao'}
        ]));
        //
        /**
         * update
         * */
        db.update(TABLE_NAME,{b:'haha'}).where(function(item){
            return 'gao' === item.b;
        }).execute();
        result = db.select().from(TABLE_NAME).execute();
        console.log('update demo');
        console.log(result);
        expect(result).toEqual([
            {a:1,b:'haha'},
            {a:2,c:'wei'},
            {a:3,d:'qiao'}
        ]);
        /**
         * delete
         * */
        db.delete().from(TABLE_NAME).where(function(item){
            return undefined !== item['b'];
        }).execute();
        result = db.select().from(TABLE_NAME).execute();
        console.log("delete demo");
        console.log(result);
        expect(result).toEqual([
            {a:2,c:'wei'},
            {a:3,d:'qiao'}
        ]);
        //
        db.drop().table(TABLE_NAME);
    });
});
