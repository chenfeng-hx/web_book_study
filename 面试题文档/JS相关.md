# JS 相关

## 说一下对闭包的理解

闭包说的通俗一点就是打通了一条在函数外部访问函数内部作用域的通道。正常情况下函数外部是访问不到函数内部作用域变量的，

表象判断是不是闭包:函数嵌套函数，内部函数被return 内部函数调用外层函数的局部变量

   优点：可以隔离作用域，不造成全局污染

   缺点：由于闭包长期驻留内存，则长期这样会导致内存泄露

  如何解决内存泄露：将暴露全外部的闭包变量置为null

  适用场景：封装组件，for循环和定时器结合使用，for循环和dom事件结合，可以在性能优化的过程中，节流防抖函数的使用，导航栏获取下标的使用



## 说一下 JS 中的原型链的理解

### 什么是原型，原型链

原型：js 中，万物皆对象，每一个对象都拥有自己的属性，js 原型的出现是为了解决让多个对象共享一个或多个方法（因为如果在每个对象实例上都挂上相同的方法的话性能很差），在 js 中每个对象都有一个与他关联的对象，叫做原型对象，每次获取对象属性都是一次查询过程，在对象的自由属性中找不到就会去查找它的原型对象。

原型链：原型连成一条链，js 在查找属性过程中，如果在自有属性中找不到就会去原型对象中查找，如果原型对象中还查不到，就会去原型对象的原型中查找，也就是按照原型链查找，直到查找到原型链的顶端 object。



### 有什么用，怎么用的

1. object 中的 prototype 中的 constructor 指向 object 本身
2. 父对象中的 prototype 中的 \_\_proto\_\_ 指向 object 的 prototype
3. 父对象中的 prototype 中的 constructor 指向父对象本身
4. 子对象中的 prototype 中的 \_\_proto\_\_ 指向父对象的 prototype 
5. 



### 原型链继承的优缺点

优点：

- 只继承了父类构造函数的属性，没有继承父类原型的属性
- 可以继承多个构造函数属性（call 方法）
- 在子实例中可向父实例传参

缺点：

- 只能继承父类构造函数的属性
- 无法实现构造函数的复用（每次用每次都要重新调用）
- 每个新实例都有父类构造函数的副本，臃肿



## 说一下 JS 继承：有两个类，AB，B怎样继承 A

### 什么是继承

继承是通过某种方式让一个对象可以访问到另一个对象的属性和方法



### 继承有什么用



### 如何实现继承

#### 原型继承

让新实例的原型等于父类的实例

```js
// 父类
function Person(name) {
	this.name = name;
	this.sum = function() {
		alert(this.name);
	}
}
Person.prototype.age = 10;   // 给构造函数添加了原型属性

// 原型链继承
function exPer() {
    this.name = "mark";
}
exPer.prototype = new Person();
let p1 = new exPer();
console.log(new Person().age);
console.log(p1.age);

// instanceof 判断元素是否在另一个元素的原型来链上
console.log(p1 instanceof Person);
```

优点：实例可继承的属性有：

- 实例的构造函数的属性
- 父类构造函数的属性
- 父类原型的属性
- 新实例不会继承父类实例的属性

缺点：

- 新实例无法向父类构造函数传参
- 继承单一
- 所有新实例都会共享父类实例的属性（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改）



#### 原型链继承

用 call() 和 apply() 将父类构造函数引入子类函数

```js
// 父类
function Person(name) {
    this.name = name;
    this.sum = function() {
        alert(this.name);
    }
}
Person.prototype.age = 10;   // 给构造函数添加了原型属性

// 借用构造函数继承
function Con() {
    Person.call(this, "jer");  // 重点
    this.age = 12;
}
let con1 = new Con();
console.log(con1.name);    // jar
console.log(con1.age);     // 12
console.log(con1 instanceof Person);   // false
```

优点：

1. 只继承了父类构造函数的属性，没有继承父类原型的属性
2. 可以继承多个构造函数属性（call 多个）
3. 在子实例中可向父实例传参

缺点：

1. 只能继承父类构造函数的属性
2. 无法实现构造函数的复用（每次用每次都要重新调用）
3. 每个新实例都有父类构造函数的副本，臃肿



#### 构造函数继承



#### 混合继承



#### ES6 继承

ES6继承是目前比较新，并且主流的继承方式，用class定义类，用extends继承类，用super()表示父类

```js
class A {
	constructor(name) {
		this.name = name;
	}

	say() {
		console.log(this.name);
	}
}

class B extends A {
	constructor(name, age) {
		super(name);
		this.age = age;
	}
}

const B1 = new B("mark"， 12);
B1.say();   // mark
console.log(B1);   //B { name: 'mark'， age: 12 }
```





## 说一下 JS 原生事件如何绑定

JS 原生绑定事件主要分为三种：

1. html 事件处理程序
2. DOM 0 级事件处理程序
3. DOM 1 级事件处理程序

其中：html事件现在早已不用了，就是在html各种标签上直接添加事件，类似于css的行内样式，缺点是不好维护，因为散落在标签中，也就是耦合度太高

例如：<button onclick="事件处理函数">点我</button> `<button onclick="事件处理函数">点我</button>`

第二类是DOM0级事件，目前在PC端用的还是比较多的绑定事件方式，兼容性也好，主要是先获取dom元素，然后直接给dom元素添加事件，例如：

```js
// 添加事件
let btn = document.getElementById('id');
vtn.onclick = function() {}
// 移除事件
btn.onclick = null;   
```

优点：兼容性好

缺点：只支持冒泡，不支持捕获



第三类是DOM2级事件，移动端用的比较多，也有很多优点，提供了专门的绑定和移除方法例如：

```js
let btn = document.getElementById('id');
// 绑定事件
btn.addEventListener('click'， 绑定的事件处理函数名， false);
// 移除事件
btn.removeEventListener('click'， 要移除的的事件处理函数名， false);
```

优点：支持给多个元素绑定相同的事件，支持冒泡和捕获事件机制



## 说一下 JS 原生常用的 dom 操作方法

- 查找：getElementById， getElementByTagName， getElementByClassName，getElementByName，getElementByTagNameNS，querySelector， querySelectorAll
- 插入：appendChild，insertBefore
- 删除：removeChild
- 克隆：cloneNode
- 设置和获取属性：setAttribute(“属性名”， “值”)，getAttribute(“属性名”)



## 说一下 ES6 新增特性

ES 6 新增的特性主要有：

- 新增了 let 和 const，使得 JS 有了块级作用域
- 箭头函数
- 模板字符串
- 解构赋值
- 模块的导入 import 和 导出 export / default export 
- Promise等
- 提出了 Class 的类构造方法，使语法更像面向对象语言的语法
- 还有一些数组字符串的新方法，我平时常用的就这些



## 了解的 JS 设计模式有哪些

JS设计模式有很多，但我知道的有单例模式，观察者模式：

- 单例模式：就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。
- 观察者模式: 观察者的使用场合就是：当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。

总的来说，观察者模式所做的工作就是在解耦，让耦合的双方都依赖于抽象，而不是依赖于具体。从而使得各自的变化都不会影响到另一边的变化。





## 说一下你对 JS 面向对象的理解

### 什么是面向对象

就是将所需要做的功能抽象成一个“对象”，然后反复调用这个对象来完成想要完成的功能。



### 如何创建一个对象

#### object 创建

```js
let box = new Object();   
box.name = 'Lee';
box.age = 100;
box.run = function () {
	return this.name + this.age;
}
```

缺点：想创建多个类似的对象，就会产生大量的代码



#### 工厂模式创建对象

```js
function createObject(name, age) {
	// 集中实例化的函数
	let obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function () {
		return this.name + this.age;
	}
	return obj;
}

let box1 = createObject('Lee'， 100);
let box2 = createObject('Jack'， 200);
console.log(box1.run());
console.log(box2.run());
```

优点：解决了重复实例化的问题

缺点：创建不同对象其中属性和方法都会重复建立，消耗内存，还有函数识别问题等等



#### 字面量创建对象

`let obj = {}`



#### 构造函数的方法创建对象

```js
function CreateBoxObj(name, age) {
	this.name = name;
	this.age = age;
	this.run = function () {
		return this.name + this.age;
	}
}

let box3 =new CreateBoxObj('Lee'， 100);
let box4 =new CreateBoxObj('Jack'， 200);
console.log(box3.run());
console.log(box4.run());
```

1. 当使用了构造函数，并且 new 构造函数() ，那么后台就会执行 new Object()
2. 将构造函数的作用域赋给新对象（new Object() 出来的对象），而函数体内的 this 就代表 new Object() 出来的对象
3. 执行构造函数内的代码
4. 返回新对象（后台直接返回）



### 说一下 es6 的面向对象

ES6 有个关键字 Class 来定义类，Class 中有个专门的构造器 constructor 使得构造器和类分开了，定义方法不需要用原型来定义了，直接在类中定义方法。

ES6 的继承：extends 继承，super 指向父类

1. constructor 里的 this 指向创建的实例对象
2. 方法里的 this ：谁调用方法就指向谁

```js
/* 匿名类 */
let Example1 = class  {
	constructor(a) {
		this.a = a;
		console.log(a);
	}
}
let ex1 = new Example1(1);

/* 命名类 */
let Example2 = class Example3 {
	constructor(b) {
		this.b = b;
		console.log(b);
	}
}
let ex2 = new Example2(2);
let ex3 = new Example3(3);   // error: Example3 is undefined
```





## 说一下 JS 数组常用方法（至少 6个）

在开发中，数组使用频率很频繁，JS数组常用方法有:push,pop,unshift,shift,splice,join,concat,forEach,filter,map,sort,some,every好多，不过都是平时开发中很常用的方法，大家可以补充一点儿es6的



## 说一下 JS 数组内置遍历方法有哪些区别

JS数组内置遍历（遍历就是循环的意思）方法主要有：

**forEach：**这个方法是为了取代for循环遍历数组的，返回值为undefined。例如：

```js
let arrInfo=[4,6,6,8,5,7,87]
arrInfo.forEach((item,index,arr)=>{})
```

其中： item代码遍历的每一项， index:代表遍历的每项的索引，arr代表数组本身

  

**filter：**是一个过滤遍历的方法，如果返回条件为true，则返回满足条件为true的新数组

```js
let arrInfo=[4,16,6,8,45,7,87]
let resultArr=arrInfo.filter((item,index,arr)=>{
  //例如返回数组每项值大于9的数组
  return item > 9
})
```

 

**map：**map方法主要对数组的复杂逻辑处理时用的多，特别是react中遍历数据，也经常用到。该方法返回一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

```js
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```



**some：**这个some方法用于只要数组中至少存在一个满足条件的结果，返回值就为true,否则返回false，但如果用一个空数组进行测试，在任何情况下它返回的都是`false`。

```js
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```



**every：**这个every方法用于数组中每一项都得满足条件时，才返回true，否则返回false

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```



**reduce：** 该方法提供一个 reducer 函数，对于数组中的每一个方法都进行一遍 reducer 方法处理。

```js
const array1 = [1, 2, 3, 4];

// 遍历 array1 数组
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => console.log(currentValue)，
  initialValue
);
```





## 说一下 JS 作用域和作用域链

JS作用域也就是JS识别变量的范围，作用域链也就是JS查找变量的顺序。

先说作用域，JS作用域主要包括全局作用域、局部作用域和ES6的块级作用域：

- 全局作用域：也就是定义在window下的变量范围，在任何地方都可以访问
- 局部作用域：是只在函数内部定义的变量范围
- 块级作用域：简单来说用 let 和 const 在任意的代码块中定义的变量都认为是块级作用域中的变量，例如在 for 循环中用 let 定义的变量等等

注：尽量不要使用全局变量，因为容易导致全局的污染，命名冲突，对 bug 查找不利。

而所谓的作用域链就是由最内部的作用域往最外部，查找变量的过程.形成的链条就是作用域链。





## 说一下从输入 URL 到页面加载完中间发生了什么

大致过程是这样的：

1. DNS解析（DNS域名服务器）

2. TCP连接

3. 发送HTTP请求

4. 服务器处理请求并返回需要的数据

5. 浏览器解析渲染页面

6. 连接结束

输入了一个域名，域名要通过 DNS 解析找到这个域名对应的服务器地址 (ip) ，通过 TCP 请求链接服务，通过 web 服务器 (apache) 返回数据，浏览器根据返回数据构建 DOM 树，通过 css 渲染引擎及 js 解析引擎将页面渲染出来，关闭tcp连接。





## 说一下 JS 事件代理（事件委托）是什么以及实现原理

JS事件代理：就是通过给父级元素（例如：ul）绑定事件，不给子级元素(例如：li)绑定事件，然后当点击子级元素时，通过事件冒泡机制在其绑定的父元素上触发事件处理函数，主要目的是为了提升性能，因为我不用给每个子级元素绑定事件，只给父级元素绑定一次就好了，：

```js
// 在原生js里面是通过event对象的target 属性实现
let ul = document.querySelector("ul");
ul.onclick = function (e) {     //e指event,事件对象
	let target = e.target || e.srcElement;        //target获取触发事件的目标(li)
	if (target.nodeName.toLowerCase() === 'li') {       //目标(li)节点名转小写字母，不转的话是大写字母
		alert(target.innerHTML)
	}
}

/* jquery：第二个参数指的是触发事件的具体目标，特别是给动态添加的元素绑定事件，这个特别起作用 */
$("ul").on("click"， "li"， function() { // 事件逻辑 })
```





## 说一下 JS 数据类型有哪些

基本数据类型：number,string,Boolean,null,undefined,symbol（ES6新增）

复合类型：Object,function



## 说一下 call，apply，bind 的区别

call，apply，bind主要作用都是改变this指向的，但使用上略有区别:

-  call 和 apply 的主要区别是在传递参数上不同，**call 后面传递的参数是以逗号的形式分开的，apply传递的参数是数组形式  [Apply是以A开头的，所以应该是跟Array(数组)形式的参数]**

-  bind返回的是一个函数形式，如果要执行，则后面要再加一个小括号 例如：bind(obj,参数1,参数2,)(), bind只能以逗号分隔形式，不能是数组形式。



## 说一下你对同步和异步的理解

同步：即sync，形象的说就是代码一行行执行，前面代码和请求没有执行完，后面的代码和请求就不会被执行，

缺点：容易导致代码阻塞

优点：程序员容易理解（因为代码从上往下一行行执行，强调顺序）

 

异步：即async，形象的说就是代码可以在当前程序没有执行完，也可以执行后面的代码

缺点：程序员不易理解（因为不是按顺序执行的）

优点：可以解决代码阻塞问题，提升代码执行效率和性能

 

异步解决方案主要有三个：

1. 回调函数

2. promise（重点掌握）

3. generator(了解)

4. async和await（重点掌握）

 



## 数组去重

1. 第一种：利用 ES6 的 set 实现：`[...new Set(arr)]`
2. 第二种：



## 深拷贝，浅拷贝

Object.assign 对象浅拷贝 array.from  扩展运算符 分为 es6 和 es5 的区别

对象浅拷贝可以理解为改变一个对象属性值，另一个对象属性也会发生改变，即互相影响

对象深拷贝即就是说改变一个对象属性，另一个对象属性值不会发生改变

对象的深拷贝：

- 通过 JSON.stringify 和 JSON.parse 实现

	```js
	let obj = {name: 'make'};
	let obj2 = JSON.parse(JSON.stringify(obj));
	console.log(obj === obj2);    // false
	```

- 通过递归实现

	```js
	let China = {
		nation: '中国',
		birthPlaces: ['北京', '上海', '广州'],
		skinColor: 'yellow',
		friends: ['sk', 'ls']
	}
	
	// deepCopy:想要达到深复制就要用递归
	function deepCopy(o, c) {
		c = c || {};
		for (let i in o) {
			if (typeof o[i] === 'object') {
				// 考虑深复制问题
				if (o[i].constructor === Array) {
					// 这是数组
					c[i] = [];
				} else {
					// 这是对象
					c[i] = {};
				}
				deepCopy(o[i], c[i]);
			} else {
				c[i] = o[i];
			}
		}
		return c;
	}
	
	let result = { name: 'result' };
	result = deepCopy(China, result);
	console.log(result);
	
	/* {                                         
	  name: 'result',                         
	  nation: '中国',                         
	  birthPlaces: [ '北京', '上海', '广州' ],
	  skinColor: 'yellow',                    
	  friends: [ 'sk', 'ls' ]                 
	}  */
	```

- 



## 地址栏解析

```js
function getUrlKey(url) {
	let params = {};
	let arr = url.split('?');
	if (arr.length <= 1) return;
	arr = arr[1].split('&');
	for (let i = 0; i < arr.length; i++) {
		const query = arr[i].split('=');
		params[query[0]] = query[1];
	}
	return params;
}
let url = "https://images.xiaohai-hx.cn?id=1&article=2";
console.log(getUrlKey(url));
```



## 如何排错



## 兼容性处理

```js
let EventUtil={

	addHandler:function(element,type,handler){ //添加事件
		if(element.addEventListener){
			element.addEventListener(type,handler,false);  //使用DOM2级方法添加事件
		}else if(element.attachEvent){                    //使用IE方法添加事件
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;          //使用DOM0级方法添加事件
		}
	},

	removeHandler:function(element,type,handler){  //取消事件
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	},

	getEvent:function(event){  //使用这个方法跨浏览器取得event对象
		return event?event:window.event;
	},

	getTarget:function(event){  //返回事件的实际目标
		return event.target||event.srcElement;
	},

	preventDefault:function(event){   //阻止事件的默认行为
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},

	stopPropagation:function(event){  //立即停止事件在DOM中的传播
		//避免触发注册在document.body上面的事件处理程序
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}
}
```



## 用 forEach 遍历 NodeList，但是ie报错“NodeList是对象不支持 forEach 属性”





## ['1', '2', '3'].map(parseInt) 输出什么

parseInt（str,radix）：解析一个字符串，并返回十进制整数，第一个参数 str，即要解析的字符串，第二个参数 radix，基数（进制），范围2-36

未传递的 radix 参数：当 str 以 ‘0x’开头，则按照 16进制处理，当 str 以 “0” 开头，则按照 8 进制处理（但 es5 取消了），其他情况按照十进制处理

```js
console.log(['1', '2', '3'].map(parseInt));    // [ 1, NaN, NaN ]

['1', '2', '3'].map(function (item, index) {
   return parseInt(item, index);
   // parseInt('1', 0)        // 这里按照 radix 参数不存在处理  // 1
   // parseInt('2', 1)    // NaN
   // parseInt('3', 2)    // NaN
});

console.log(parseInt('1', 2));    // 1
console.log(parseInt('3', 2));    // NaN
```





## 说出下面代码的执行结果

```js
var a = 1;
{
	function a() {}
	a = 2;
	function a() {}
	a = 3;
	function a() {}
	a = 4;
	console.log('内部a: ', a);
}
console.log('外部a: ', a);

// var 定义：4 3
// let 定义：4 1
```

这个问题可以转化为：书写在块语句中的代码是如何解析的

我们都知道 JS 中，在 ES6 之前作⽤域分为全局作⽤域 和函数作⽤域 ，函数作⽤域也是块作⽤域 的⼀种：这⾥所讲的**块作⽤域**的情况是指 { } 单独应⽤的时候

1. 当在块语句内引用的时候
	- 将函数写在块语句中，命名函数只会预解析，不会预赋值，只有在执行块语句的时候，赋值函数
	- 如果块语句中出现变量和函数名相同的情况时，执行块语句，最后打印的是正常顺序赋值的结果。
	- 使用 ES6 语法 let 和 const 的时候遵从 ES6 对应规则的变量访问机制，定义机制，赋值机制
2. 当在块语句外引用的时候
	- 得到的变量是**最后一个重名函数上面的赋值变量的结果**，如果上面没有重名的赋值变量，那么得到的是就是这个函数
	- 在块语句中，不管有几个同名函数，都会被最后一个覆盖掉。
3. 总结一句话，**变量名与函数同名时，块作用域中最后一个同名函数上面的变量赋值将会被挤出块外**。



## setTimeout(fn,100);100毫秒是如何权衡的

100ms指的是将回调函数加入到任务队列所花的时间。至于具体什么时候执行，需要看主线程的执行栈中是否还有任务在执行。

```js
(async function hello() {
	await new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, 5000);
	})
	setTimeout(() => {
		console.log('hello');
	}, 100)
})();
// 等待了“很长时间”才返回结果
```



## 定时器实现动画的最佳时间：16.6ms

大多数电脑显示器的刷新频率是60HZ，大概相当于每秒钟重绘60次。因此，最平滑的动画效的最佳循环间隔是1000ms/60，约等于16.6ms



## setInterval存在的问题

定时器的代码执行部分不断的被调入任务队列中，**如果定时器的执行时间比间隔时间长，最终可能导致定时器堆叠在一起执行。**

js引擎为了解决这个问题，采用的方式是若**任务队列中存在这个定期器，则不会将新的定时器放入任务队列**，这样做的**弊端是可能导致某些间隔被跳过**。

解决方法：

循环调用setTimeout来实现setInterval:（即用setTimeout来实现setInterval）

```js
setTimeout(function fn(){
    ...
	setTimeout(fn,delay)
},delay)
```



## requestAnimationFrame

**js动画的要求：**一方面，循环间隔必须足够短，这样才能让不同的动画效果显得平滑流畅；另一方面，循环间隔还要足够长，这样才能确保浏览器有能力渲染产生的变化。

**用定时器实现js动画存在的问题：** 定时器回调函数执行的时机不精确。定时器中的延时指的是将回调函数加入到任务队列所需花的时间，如果主线程中还有任务在执行，就不能确保回调函数在放入队列后马上执行，这就造成了执行时机的不精确。

requestAnimationFrame:

- 特点：requestAnimationFrame采用系统时间间隔，保证了最佳的绘制效率。

- 使用方法：requestAnimationFrame接收一个回调函数，这个回调函数会在下一次浏览器重绘之前调用。



## 分别setInterval,setTimeout,requestAnimationFrame制作有个简单的进度条

1. setInterval：

```html
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	<div style="width: 0; height: 20px; background-color: orangered;"></div>
	<script>
		let process = document.getElementsByTagName('div')[0];
		let timer = setInterval(() => {
			if (parseInt(process.style.width) >= 100) return clearInterval(timer);
			console.log(process.style.width);
			process.style.width = parseInt(process.style.width) +1 + 'px';
			process.innerText = parseInt(process.style.width) + '%';
		}, 10);
	</script>
</body>
</html>
```

2. setTimeout：

```html
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
<div style="width: 0; height: 20px; background-color: orangered;"></div>
<script>
	let process = document.getElementsByTagName('div')[0];
	let timer = setTimeout(function fn() {
		if (parseInt(process.style.width) < 100) {
			console.log(process.style.width);
			process.style.width = parseInt(process.style.width) +1 + 'px';
			process.innerText = parseInt(process.style.width) + '%';
			timer = setTimeout(fn, 10);
		} else {
			return clearTimeout(timer);
		}
	}, 10);
</script>
</body>
</html>
```

3. requestAnimationFrame:类似于setTimeout,需要一次次的调用：

```html
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
<div style="width: 0; height: 20px; background-color: orangered;"></div>
<script>
	let process = document.getElementsByTagName('div')[0];
	let timer = requestAnimationFrame(function fn() {
		if (parseInt(process.style.width) < 100) {
			console.log(process.style.width);
			process.style.width = parseInt(process.style.width) +1 + 'px';
			process.innerText = parseInt(process.style.width) + '%';
			requestAnimationFrame(fn);
		} else {
			cancelAnimationFrame(timer);
		}
	});
</script>
</body>
</html>
```



## js中的轮播实现原理？假如一个页面上有两个轮播，你会怎么实现？

1. 让图片存在一个数组中，然后将最后一张图片重复添加在数组的头部，将第一张图片重复添加在数组的最后。
2. 然后准备一个只能显示一张图片的盒子，对盒子做溢出隐藏处理。

3. 通过定时器增减索引，显示对应的图片，实现轮播功能。

4. 如果有两个轮播，可封装一个轮播组件，将需要轮播的图片作为参数传递



## 数组去重

https://segmentfault.com/a/1190000016418021

```js
// Set方法：将数组先转化为Set再转化为数组
function arrayToSet(array) {
	// 通过 for-of
/*	let middle = new Set(array);
	let newArray = [];
	for (let item of middle) {
		newArray.push(item);
	}*/

	// 通过扩展运算符
	// let newArray = [...new Set(array)];

	// 通过 Array.from 浅拷贝一个可迭代对象
	let newArray = Array.from(new Set(array));

	return newArray;
}

// 不断去寻找一个元素，如果没有则加入新数组，否则就丢弃
function remove(array) {
	let newArray = [];
	// 通过 includes:includes底层使用 sameValueZero() 比较
/*	array.forEach(item => {
		if (!newArray.includes(item)) {
			newArray.push(item);
		}
	})*/

	// 通过map 的 has和set 方法（属性名不可重复）
/*	const map = new Map();
	array.forEach(item => {
		if (!map.has(item)) {
			map.set(item, true);
			newArray.push(item);
		}
	})*/

	// 利用对象属性名不可重复
/*	const obj = {};
	array.forEach(item => {
		if (!obj[item]) {
			obj[item] = true;
			newArray.push(item);
		}
	})*/

	// reduce + includes
	/*newArray = array.reduce((pre, cur) => {
		if (pre.includes(cur) === false) {
			pre.push(cur);
		}
		return pre;
	}, []);*/

	// hasOwnProperty方法可以判断类型两个{},{}
	//  typeof {}+{}为object[object Object]，判断有没有空对象，已经有的话return false，没有就作为对象的属性加进去，值为true
/*	const obj = {};
	newArray = array.filter(item => {
		        return obj.hasOwnProperty(typeof item + item) ? false : obj[typeof item +item] = true
		    })*/

	// 下列方法无法判断NaN和NaN重复的情况

	// 过滤器 filter方法+indexOf()方法，indexOf会返回第一个找到的索引，如果当前数值之前出现过，
	//    则indexOf返回的索引恒为之前的那个数与当前数值的索引不一致，故可以去重
/*	    newArray = array.filter((item, index) => {
	        return array.indexOf(item) === index;
	    })*/

	// indexof
/*	    array.forEach(item => {
	        if(newArray.indexOf(item) === -1){
	            newArray.push(item);
	        }
	    })*/


	// 双循环+splice,比较相邻两个数如果重复用splice删除
/*	    let len = array.length;
	    for(let i = 0; i < len - 1; i++){
	        for(let j = i + 1; j < len; j++){
	            if(array[i] === array[j]){
	                array.splice(j,1);
	                len--;
	                j--;
	            }
	        }
	    }
	    return array;*/


	// 单循环+sort+splice
/*	let len = array.length;
	array = array.sort();
	for(let i=0;i<len-1;i++){
			if(array[i]===array[i+1]){
				array.splice(i+1,1);
				len--;
			}
	}
	return array;*/

	return newArray;
}

console.log(remove([1, 2, 2, 3, -1, 1]));

```







什么是闭包，闭包的用途，闭包的缺点，闭包的使用场景

JS 有哪些数据类型，基本数据类型和引用数据类型有什么区别，判断数据类型的方法有哪些

浅拷贝与深拷贝有何区别，如何实现

let、const 的区别是什么

什么是执行上下文和执行栈，作用域和执行上下文的区别是什么

this 指向的各种情况都有什么，如何改变 this 指针的指向

如何理解同步和异步，JS 是如何实现异步的，实现异步的方法有哪些

怎么理解 Promise 对象

怎么理解宏任务和微任务

require / import 之间的区别

事件委托

解释一下变量的提升

如何理解高阶函数

如何区分声明函数和表达式函数

原型继承是如何工作的

1.es5和es6的区别，说一下你所知道的es6

2.var、let、const之间的区别

3.使用箭头函数应注意什么？

4.ES6的模板字符串有哪些新特性？并实现一个类模板字符串的功能

5.介绍下 Set、Map的区别？

6.ECMAScript 6 怎么写 class ，为何会出现 class？

7.Promise构造函数是同步执行还是异步执行，那么 then 方法呢？

8.setTimeout、Promise、Async/Await 的区别

9.promise有几种状态，什么时候会进入catch？

10.使用结构赋值，实现两个变量的值的交换

11.Promise 中reject 和 catch 处理上有什么区别

12.理解 async/await以及对Generator的优势

参考资料







