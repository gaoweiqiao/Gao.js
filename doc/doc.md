[toc]
# 文档
## Gao.$date
### daybreak(date = new Date())
**参数**

date(可选):要取凌晨的Date对象.默认是当前时间.
### addDay(date = new Date(),deltaDay = 0)
**参数**

date(可选):被加的Date对象.默认是当前时间.
delta(可选):要加的天数,正数是向后添加,负数是向前减.默认为0;

### format(template,date = new Date())
**参数**

template:日期格式模板.yyyy代表年,MM代表月,dd代表日,HH代表小时(24制),mm代表分钟,ss代表秒,zzz代表毫秒
date(可选):要格式化的Date对象,默认为当前时间;
**例子**
```
let date = new Date(2018,1,1,10,10,10,200);
Gao.$date.format('yyyy-MM-dd HH:mm:ss:zzz',date); //2018-2-1 10:10:10:200
```

### formatTimestamp(template,timestamp = new Date().getTime())
**参数**

template:日期格式模板.yyyy代表年,MM代表月,dd代表日,HH代表小时(24制),mm代表分钟,ss代表秒,zzz代表毫秒
datimestampte(可选):要格式化的时间戳,默认为当前时间戳;
**例子**
```
let date = new Date(2018,1,1,10,10,10,200);
Gao.$date.format('yyyy-MM-dd HH:mm:ss:zzz',date.getTime()); //2018-2-1 10:10:10:200
```
### eq(date1,date2)
**参数**
date1,date2:待比较的两个Date对象.
---

## Gao.$db
> 模仿数据库语法对存储进行curd.
### select()
```
Gao.$db.select().from('TABLE_NAME').where(condition).execute() //condition是接收一个数据对象返回boolean值得函数.
```
### delete()
```
Gao.$db.delete().from('TABLE_NAME').where(condition).execute() //where可省略,代表不加筛选
```
### insert()
```
Gao.$db.insert().into('TABLE_NAME','DATA_ITEM');
```
### update()
```
Gao.$db.update('TABLE_NAME',{a:1}).where(condition).execute();//
```
### drop()
```
Gao.$db.drop().table('TABLE_NAME');
```
---
## Gao.$image

### compress(image,config)

**参数**
image:Image对象.
config:`{maxSize:1200,scale:0.5}`;maxSize代表最大压缩到多少Bytes.scale代表压缩系数.两者只要提供一个就好.
**返回值**
一个Promise对象.返回压缩后的Image.其src是base64编码.

### size(image)
**参数**
image:Image对象.
**返回值**
一个Promise对象.返回图片大小Bytes.

---
## Gao.$string
### trim(string,chars=' ')

**参数**
string:待处理的字符串.
chars:要去除的字符组成的字符串.
**返回值**
trim后的字符串

### camelCasify(word)
**参数**
word:待处理的字符串.
**返回值**
小驼峰字符串('helloWorld')

### kebabCasify(word)
**参数**
word:待处理的字符串.
**返回值**
减号连接的字符串('v-if')

### snackCasify(word)
**参数**
word:待处理的字符串.
**返回值**
下划线连接的字符串('v_if')

---
## Gao.$url
### query(key)
**参数**
key:要查询的key.
**返回值**
key所对应的第一个值
**例子**
```
// ?a=1&b=2
Gao.$url.query('b') // '2'
```

### queryAll(key)
**参数**
key:要查询的key.
**返回值**
key所对应的所有值组成的数组
**例子**
```
// ?a=1&b=2&a=3
Gao.$url.query('a') // ['1','3']
```

### protocol
对应`location.protocol`

### host
对应`location.host`

### port
对应`location.port`

### path
对应`location.path`

### hash
对应`location.hash`

---

## Gao.$convertor
### convert(obj,func)
**参数**

obj:带转换的对象.
func:一个函数参数是原来的key,返回处理后的key
**返回值**

转换key的对象(原对象改变)
**例子**
```
//例子1转换对象
let obj = {"a-b":12,"c d":"good","e_f":{'g--h':23}};
Gao.$converter.convert(obj,Gao.$string.camelCasify) //转换后 {"aB":12,"cD":"good","eF":{gH:23}};
//例子2转换数组
let arr = [{"a-b":12,"c d":"good","e_f":{'g--h':23}},{'j-k':{'m-n':123}}];
Gao.$converter.convert(arr,Gao.$string.camelCasify) //转换后 [{"aB":12,"cD":"good","eF":{gH:23}},{'jK':{'mN':123}}];
```


