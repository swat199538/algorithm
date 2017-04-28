/**
 * Created by wangl on 2017/4/27.
 */
//栈是一组遵循先进后（LAST IN FIRST OUT）出原则的有序集合
//新添加的或者待删除的元素都保存在栈的末尾，称作栈顶，另一端就叫栈底。
//在栈里，新元素都靠近栈顶，就元素都靠近栈底。
/**
 * push(element(s)):添加一个或几个新元素到栈顶。
 * pop():移除栈顶元素，同时返回被移除的元素。
 * peek():返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，紧紧返回他)。
 * isEmpty():如果栈里没有任何元素就返回true否则返回false。
 * clear():移除栈里所有元素
 * size():返回栈里所有元素。这个方法和栈里的length里的属性很相似
 * */
function Stack()
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

var stack = new Stack();
console.log(stack.isEmpty());//输出为true
//往栈里添加元素
stack.push(1);
stack.push(0);
stack.push(2);
stack.push(4);
console.log(stack.peek());//调用peek会输出4,因为它是最后添加的元素
console.log(stack.size());//栈的大小是4
console.log(stack.isEmpty());//栈不为空
//移除栈顶两个元素
console.log(stack.pop());//4
console.log(stack.pop());//2
console.log(stack.size())//2
stack.print();//[1,0]