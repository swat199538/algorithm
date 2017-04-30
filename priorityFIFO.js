/**
 * Created by wangl on 2017/4/30.
 */
//优先队列顾名思义，元素的插入和移除是基于优先级的
/**
 * 优先级队列类
 * enQueue(element(s)):根据优先级向队列添加任务（优先级从大到小,默认为0）
 * deQueue():移除队列的第一个，并返回被移除的元素
 * front():返回队列第一个元素
 * isEmpty():队列是否为空，空时返回true,不空时返回false
 * size():返回队列包含的元素个数
 * print():打印队列内容
 * @constructor
 */

PriorityQueue = function () {
    var item = [];//存放队列的容器

    //单个队列元素对象
    function queueObject(element, priority) {
        if (priority == undefined){
            priority = 0;
        }
        this.element = element;
        this.priority = priority;
    }

    this.enQueue = function (element, priority) {
        var queueElement = new queueObject(element, priority);
        //判断队列是否为空，空就直接插入，不为空就循环整个队列找最合适的插入
        if(this.isEmpty()){
            item.push(queueElement);
        } else {
            var isAdd = false;
            for (var i=0; i<item.length; i++){
                if(item[i]['priority'] < queueElement.priority){
                    item.splice(i, 0, queueElement);
                    isAdd = true;
                    break;
                }
            }
            if (!isAdd){
                item.push(queueElement);
            }
        }
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

//使用优先级队列
var queue = new PriorityQueue();
//顺序从优先级大小排序接着按照插入顺序排序z,w,Jack,Tom,Alice,Ben
queue.enQueue('Tom', 0);
queue.enQueue('Jack', 1);
queue.enQueue('w', 2);
queue.enQueue('Alice');
queue.enQueue('Ben');
queue.enQueue('z', 9);
queue.print();
console.log("__________________________________________________________");
console.log(queue.deQueue());//取出第一个元素queueObject{element:'z', priority:'9'}
console.log(queue.front());//查看第一个元素
console.log("是否为空:"+ queue.isEmpty());
console.log("队列大小："+queue.size());
