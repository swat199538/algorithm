/**
 * Created by wangl on 2017/4/28.
 */
//队列是遵循FIFO（First In First Out,先进先出，也称为先来服务）原则的一组有序的项。
//队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队尾。

/**
 * 队列类
 * enQueue(element(s)):向队列尾部添加一个或多个项
 * deQueue():移除队列的第一个，并返回被移除的元素
 * front():返回队列第一个元素
 * isEmpty():队列是否为空，空时返回true,不空时返回false
 * size():返回队列包含的元素个数
 * print():打印队列内容
 * @constructor
 */
Queue = function () {
    
    var item = [];//存储队列值
    
    this.enQueue = function ($value) {
        item.push($value);
    }
    
    this.deQueue = function () {
        return item.shift();
    }

    this.front = function () {
        return item[0];
    }

    this.isEmpty = function () {
        return item.length == 0;
    }

    this.size = function () {
        return item.length;
    }

    this.print = function () {
        console.log(item);
    }
    
}


var queue = new Queue();

queue.enQueue(1);
queue.enQueue(0);
queue.enQueue(2);
queue.enQueue(4);

queue.print();
console.log('队列头是:'+queue.front());
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log('队列是否空：'+queue.isEmpty());
console.log('队列大小:'+queue.size());
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log('队列是否空：'+queue.isEmpty());