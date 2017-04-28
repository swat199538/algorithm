/**
 * Created by wangl on 2017/4/28.
 */
//利用栈把10进制转换成2进制

Stack = function ()
{
    //保存栈里的元素
    var items = [];

    //添加元素到栈顶
    this.push = function (element) {
        items.push(element);
    }

    //移除栈顶元素，同时返回被移除的元素
    this.pop = function () {
        return items.pop();
    }

    //返回栈顶的元素
    this.peek = function () {
        return items[items.length -1 ];
    }

    //检查栈是否为空
    this.isEmpty = function () {
        return items.length == 0;
    }

    //清空栈
    this.clear = function () {
        items = [];
    }

    //栈的大小
    this.size = function () {
        return items.length;
    }

    //辅助函数打印栈
    this.print = function () {
        console.log(items);
    }

}

/**
 * 正整数十进制转二进制
 * @param decNumber
 * @returns {string}
 * 正整数十进制转换成二进制的原理
 * 将正的十进制数除以二取余数，然后倒叙排序，高位补零（过程类似栈，先进后出）
 */
function divideBy2(decNumber)
{
    var remStack = new Stack(),//栈类
        rem,//余数
        binaryString = '';//最后输出二进制数
    while (decNumber>0){
        rem = Math.floor(decNumber % 2);//除以2取余数
        remStack.push(rem);//入栈
        decNumber = Math.floor(decNumber / 2);//除以2更新数字
    }
    //从栈里将数全部取出来，输出就是二进制数
    while (!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}

//正整数十进制转其它进制的实现也是类似的
function dividByAny(decNumer, base)
{
    var stack = new Stack(),
        rem,//余数
        bingaryString = '',//最后的结果
        data = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (decNumer > 0){
        rem = Math.floor(decNumer % base);
        stack.push(rem);
        decNumer = Math.floor(decNumer / base);
    }
    while (!stack.isEmpty()){
        bingaryString += data[stack.pop()];
    }
    return bingaryString;
}

console.log(dividByAny(1000, 32));