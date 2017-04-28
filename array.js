/**
 * Created by wangl on 2017/4/27.
 */
//初始化和创建数组
var daysOfWeek  = new Array()//{1}
var daysOfWekk2 = new Array(7)//创建指定长度
var daysOfWeek3 = new Array('a', 'b', 'c', 'd')//创建默认值

//简便方式
var daysOfWeek4 = [];
var daysOfWeek5 = ['a', 'b', 'c', 'd'];//也可以给默认值

//想知道数组里存了多上元素可以使用length属性
console.log(daysOfWeek5.length);

//访问特定的位置的元素，可以用中括号传递数值位置
console.log(daysOfWeek5[1]);
//遍历数组
for(var i=0; i<daysOfWeek5.length; i++){
    console.log(daysOfWeek5[i]);
}

//求斐波那契数列前20个数
var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;
for(var i=3; i<=20; i++){
    fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
}
console.log("斐波那契数列值:"+fibonacci);

//数组往后追加元素
var num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num);
num.push(9);

//用循环往头部插入数据
var num1 = [1, 2, 3, 4, 5]
function lpush(key, value) {
    var arrayLength = key.length;
    for (var i=arrayLength; i>=0; i--){
        if(i == 0 ){
            key[i] = value;
        } else {
            key[i] = key[i-1];
        }
    }
}
lpush(num1, -2);
console.log(num1);

//js自带数组首部插入数据
num1.unshift('myFish');
console.log(num1);

//删除数组最靠后的元素
num1.pop();
console.log(num1);

//用for实现删除数组第一个元素
num2 = [2,3,4,5,6,7];
for(var i= 0; i<num2.length; i++){
    if (i == num2.length - 1){
        num2[i] = null;
    } else {
        num2[i] = num2[i+1];
    }
}
console.log(num2);


//js自带的移除首个key的方法
num4 = [1, 2, 3, 4, 5, 6]
num4.shift();
console.log(num4);

//删除任意位置的值
num3 = [1 ,2 ,3 ,4];
num3.splice(2, 1);
console.log(num3);

//数组套数组实现矩阵或任意多维数组
var averageTemp = [];
averageTemp[0] = [];
averageTemp[0][0] = 1;
averageTemp[0][1] = 2;
console.log(averageTemp);

//concat,连接两个或更多的数组，并返回结果
a = [1, 2, 3, 4, 5];
b = [6, 7, 8, 9, 10];
a = a.concat(b);
console.log(a);//[1,2,3,4,5,6,7,8,9,10]

//every, 对数组的每一项运行指定函数，如果改函数对每一项都返回true,则返回true
test1 = [1, 2, 3, 2, 5];
var info =test1.every(function (age) {
    return age>0;
});
console.log(info);//true

//filter, 对数组的每一项运行指定函数，返回改函数返回true的数组
test2 = [-1,1,0,-9,2,4];
var info = test2.filter(function (num) {
    return num>=0;
});
console.log(info);//[1,0,2,4]

//foreach,对数组的每一项运行指定函数，这个方法没有返回值
test3 = [1,2,3,4,5];
test3.forEach(function (a) {
   console.log('foreach:', a);
});

//join，将所有的元素连接成一个字符串
test4 = ['a', 'b', 1, 2, 5];
var str_test = test4.join();
console.log(str_test);

//indexof,返回第一个与给定参数相等的数组元素索引，没有找到返回-1
test5 = ['a', 'c', 'd', 'b', 'g'];
var a  = test5.indexOf('g');
console.log(a);

//lastindexof, 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值
test6 = ['a', 'd', 's', 'h', 'w'];
var b = test6.lastIndexOf('h');
console.log(b);

//map,对数组中的每一项元素运行给定函数，返回每次函数调用的结果组成的数组
test7 = ['alice', 'ben', 'baby'];
var c = test7.map(function (name) {
    return "Hello: "+name;
});
console.log(c);//["Hello: alice", "Hello: ben", "Hello: baby"]

//reverse,颠倒数组中元素的顺序，原先第一个元素变成最后一个，原先最后一个元素变成第一。
test8 = [1, 2, 3, 4, 5, 6, 7, 8];
test8.reverse();
console.log(test8);//[8,7,6,5,4,3,2,1]

//slice, 传入索引值，将数组对应索引范围内的元素当作新数组返回
test9 = [1, 2, 3, 4, 2, 6, 7, 8];
var d = test9.slice(3,5);
console.log(d);//[4,2]

//some, 对数组中的每一项数组运行给定函数，如果一项返回true，则返回true
test10 = [-1, 2, -2, -5];
var e = test10.some(function (num) {
    return num>0;
});
console.log(e);//true

//sort,按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
test11 = ['a', 'd', ,'b', 'c'];
var f = test11.sort();
console.log(f);

//toString， 讲数组作为字符串返回
test12 = ['a', 1, 'he', 'she'];
console.log(test12.toString());

//valueOf, 与toString类似，讲数组作为字符串返回
test12 = ['a', 'd', 'h', 'd'];
var g = test12.valueOf();
console.log(g);



