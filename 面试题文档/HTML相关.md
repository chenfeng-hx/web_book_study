# HTML 相关

## IE8 如何支持语义化标签

一个库 html5shiv.js，直接引入就ok，原理就是把语义化标签在低版本浏览器转化成了块级元素，让浏览器可以解析



## 标签语义化带来的好处是什么

- 代码结构更加清晰：见名知意，没有基础的人也能知道这部分代码是干嘛的
- 方便团队开发维护，代码可读性更强
- 有利于SEO优化，爬虫依赖于标签来确定上下文关系



## meta 标签

meta标签提供关于html文档的元数据，不会显示在页面，但是对于机器是可读的，告诉浏览器怎么解析页面，告诉搜索引擎关键字（SEO优化）

meta作用：告诉机器浏览器该如何解析该页面，描述这个页面的主要内容，可以设置服务器发送到浏览器的 http 头部内容

```html
<meta charset="UTF-8">  <!--设置页面使用的字符编码-->
<!--设置视口，移动端的适配-->
<meta name="viewport"  
	  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```





css 和 js 引入设置

HTML 的块级元素、行内元素、行内块元素有哪些，区别是什么

html5有哪些新特性、移除了哪些元素？如何处理 HTML 5 新标签的浏览器兼容问题

如何区分HTML 和 HTML 5







## cookie，localStorage 和 sessionStorage 的区别

- cookie 可以设置失效时间，但没有自己的存取方法，需要去封装，每次和后端请求时跟随请求发送
- localStorage：有自己的存取方法
- sessionStorage：有自己的存取方法

**三者的异同**

|      特性      |                            Cookie                            |                         localStorage                         |                        sessionStorage                        |
| :------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| 数据的生命周期 | 一般由服务器生成，可设置失效时间，如果在浏览器端生成Cookie，默认是关闭浏览器后失效 |                   除非被清除，否则永久保存                   |         仅在当前会话下有效，关闭页面或浏览器后被清除         |
|  存放数据大小  |                            4K左右                            |                          一般为5MB                           |                          一般为5MB                           |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用 cookie 保存过多的数据会带来性能问题 |      仅在客户端（即浏览器）中保存，不参与和服务端的通信      |      仅在客户端（即浏览器）中保存，不参与和服务端的通信      |
|     易用性     |         需要程序员自己封装，原生的 Cookie 接口不友好         | 原生接口可以接受，也可再次封装对 Object 和 Array 有更好的支持 | 原生接口可以接受，也可再次封装对 Object 和 Array 有更好的支持 |







# DOM 和 BOM 部分

## 什么是BOM 事件，常见的 BOM 事件有哪些，什么是BOM 事件处理程序

事件就是用户或浏览器自身执行的某种动作.事件可能是用户在某些内容上的点击、鼠标经过某个特定元素或按下键盘上的某些按键。事件还可能是 Web 浏览器中发生的事情，比如说某个 Web 页面加载完成，或者是用户滚动窗口或改变窗口大小。

通过使用 JavaScript ，你可以监听特定事件的发生，并规定让某些事件发生以对这些事件做出响应。JavaScript可以处理的事件类型为：鼠标事件、键盘事件、HTML事件

常见的 BOM 事件有：

- load：当页面或图像加载完后立即触发
- blur：元素失去焦点
- focus：元素获得焦点
- click：鼠标点击某个对象
- change：用户改变域的内容
- mouseover：鼠标移动到某个元素上
- mouseout：鼠标从某个元素上离开
- keyup：某个键盘的键被松开
- keydown：某个键盘的键被按下

**响应某个事件的函数就叫做事件处理程序**（或事件侦听器）。事件处理程序的名字以“on”开头，因此click事件的事件处理程序就是onclick，为事件指定处理程序的方式有好几种。



## BOM 对象及其方法

http://t.csdn.cn/FCiEl

<img src="http://images.xiaohai-hx.cn/%E5%A4%8D%E4%B9%A0%E7%AC%94%E8%AE%B0/%E9%9D%A2%E8%AF%95%E9%A2%98/image-20230506104350734.png" alt="image-20230506104350653" style="zoom:40%;" />

BOM 对象包含五个部分：

1. Window 对象：浏览器窗口对象：
  - 调用系统对话框向用户显示信息
  	- alert()：消息框，显示带有一条指定消息和一个 OK 按钮的警告框
  	- prompt()：输入框，用于显示课题是用户进行输入的对话框，返回提示框中的值。有两个参数：
    		- 第一个参数：要在对话框中显示的纯文本。
    		- 第二个参数：默认的输入文本。
  	- confirm()：显示一个带有指定消息和 OK 及取消按钮的对话框。返回 true/false。
2. History 对象：浏览器当前窗口的访问历史记录对象，window 对象的 一部分，可通过 window.history 访问，但因为 window 是顶层对象，所以只需要 history 即可访问
	- history.length ：返回浏览器历史列表中的 URL 数量
	- back()：加载 history 列表中的前一个 URL 
	- forward()：加载历史列表中的下一个 URL，当页面第一次访问时，还没有下一个 URL
	- go(number | URL)：URL 参数使用的是要访问的 URL ，而 number 参数使用的是要访问的URL 在 History 的 URL 列表中的相对位置。go(-1)，到上一个页面

3. Location 对象：浏览器当前窗口的地址栏对象，是window对象之一，提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。也可通过 window.location 属性来访问。
	- location.href：设置或返回完整的 URL
	- reload()：重新加载当前文档
	- replace()：用新的文档替换当前文档

4. Document 对象：也称为DOM对象，是HTML页面当前窗体的内容，同时也是JavaScript重要组成部分之一
5. Navigator 对象：浏览器对象，用于获取浏览器的相关数据，例如浏览器的名称、版本等，也称为浏览器的嗅探器。
6. Screen 对象：浏览器所处客户端的显示器屏幕对象。可获取与屏幕相关的数据，例如屏幕的分辨率等



## DOM

### DOM 节点

| 节点类型 |     HTML 类型     |        例如        |
| :------: | :---------------: | :----------------: |
| 文档节点 |     文档本身      | 整个文档 document  |
| 元素节点 | 所有的 HTML 元素  |   \<a>\<p>\<div>   |
| 属性节点 | HTML 元素内的属性 | id/href/name/class |
| 文本节点 |   元素内的文本    |       hello        |
| 注释节点 |   HTML 中的注释   |     <!- - - ->     |

获取节点的方式（getxxx），通过 Name，Class，TagName 获取到的都是数组，需要通过数组下标取值，并且需要操作真实 dom，所以将 script 标签放在末尾，并监听 文档的 onload 事件



### DOM0级和DOM2级有什么区别

DOM0级中为某个dom元素绑定多个事件时，只有最后一个事件有效。onclick

DOM2级中可以为单个元素绑定多个事件，每个事件都可以被触发。addEventListener



### textContent、innerText、innerHTML、value 的区别

- textContent用来获取和设置文本内容，与innerText的差别是:textContent获取到的内容包
- 括了元素中的style标签和script标签的内容。
- innerText只能获取和设置文本内容，不能获取和设置html代码
- innerHTML可以获取和设置html代码
- value获取的是表单元素的值



### 关于 DOM 的 API 有什么

<img src="http://images.xiaohai-hx.cn/%E5%A4%8D%E4%B9%A0%E7%AC%94%E8%AE%B0/%E9%9D%A2%E8%AF%95%E9%A2%98/image-20230506110959503.png" alt="image-20230506110959503" style="zoom:67%;" />

<img src="http://images.xiaohai-hx.cn/%E5%A4%8D%E4%B9%A0%E7%AC%94%E8%AE%B0/%E9%9D%A2%E8%AF%95%E9%A2%98/image-20230506111023619.png" alt="image-20230506111023619" style="zoom:67%;" />



### 什么叫 DOM 事件流

事件发生时会在元素节点之间按照特定的顺序传播，整个过程分为捕获阶段，目标阶段和冒泡阶段，这个传播过程叫做Dom事件流。

- 事件冒泡：从事件源逐级向上传播到DOM最顶层节点的过程。
- 事件捕获：从DOM最顶层节点逐级向下传播到事件源的过程。

addEventListener用于指定事件处理程序，共接收三个参数。分别是触发事件，事件处理程序函数以及一个布尔值。第三个参数默认为false，表示在该事件的处理函数会在冒泡阶段被调用。若改为true，则表示事件处理函数会在捕获阶段被调用。

IE只支持事件冒泡。



### 如何让事件先冒泡后捕获

- 原本的事件流中，是先捕获再冒泡。
- 对于目标元素来说，如果DOM节点通过addEventListener同时绑定了两个事件监听函数，一个用于捕获，一个用于冒泡，那么两个事件的执行顺序是按照代码添加的顺序执行的。所以，先绑定冒泡的函数，再绑定捕获的函数，即可实现。
- 对于非目标元素来说，可以给捕获事件的处理程序添加一个定时器，将处理程序推入下一个宏任务执行。



## 说一下事件代理

事件委托是指 不在子节点单独设置事件监听器，而将事件监听器设置在父节点上，再利用**冒泡原理**使每一个子节点都能触发该事件。

事件委托的优点：只操作一次Dom，提高了程序的性能。适合动态元素的绑定，新添加的子元素不需单独添加事件处理程序。

通常用在列表中，通过判断 e.target 来判断发生的具体元素



## 事件类型相关

### mouseover 和 mouseenter 的区别

- **mouseover**：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移出事件是mouseout。
- **mouseenter**：鼠标移入子元素时不会再次触发mouseenter事件，对应的移出事件是mouseleave。



### 三种键盘事件的区别

- keyup: 松开键盘触发

- keydown:按下键盘触发

- keypress:不能识别功能键，比如ctrl,alt,shift,左右箭头。可以区分大小写。


在输入框中按下一个键的全过程：触发keydown/keypress事件->文字键入输入框中->触发keyup事件

按下按键后自动对焦输入框，应该使用keyup，不应该使用keydown/keypress,因为后者会使按键落入输入框中,对于回车键的话还不能使用keypress



### 静态绑定事件和动态绑定事件有什么区别

静态绑定事件是指直接在 Htm 标签上通过 οnclick="hide()" 来绑定事件。

缺点：

- html和js文件存在耦合，不符合结构和行为分离的原则。
- 可能存在引发错误，如果js代码还没加载就触发该事件则会抛出错误

动态绑定事件是指通过js动态绑定事件，element.onclick() element.addEventListener()。



## 元素的位置和大小

① offset系列：

- ⭐️ offsetTop（获取元素位置）: 相对于带有‘定位’的父元素的偏移量
- offsetHeight: content+padding+border

- offsetParent: 返回带有定位的父元素


② cilent系列：

- clientTop: 上边框border-top的宽度

- ⭐️ clientHeight(获取元素宽高): content+padding,不包含border。


③ scroll系列：

- ⭐️ scrollTop（获取滚动的距离）: 向下滚动后，上面被卷去的距离，即隐藏的高度。
- scrollHeight: content+padding ,其中的content包含了因为滚动被隐藏的部分。

④ document.clientWidth与document.style.width的区别：

- 区别1：前者可以获取任意样式表中的width样式值，包括行内样式的，内嵌样式的，外部样式的；后者只能获取行内的样式。
- 区别2：clientWidth获取的是数字型的，style获取的带有px后缀

- 区别3：clientWidth包含了padding，而style.width只包含content。

- 区别4：clientWidth是只读属性，所以一般用于获取元素的大小；而style.width是可读可写的，可用于获取，也可用于修改。


⑤ 特殊：

- **获取html元素：**document.documentElement
- **获取body元素：**document.body
- 获取可视区域的宽高：

	- window.innerWeight 获取的宽度包括纵向滚动条的宽度。

	- ⭐️ document.documentElement.clientWidth 获取的是正宗的可视区域的宽度
	- **document.body.clientWidth ** 获取的是body的宽度，即content+padding。
- 获取window向下滚动时被卷去的高度： window.pageYOffset (注意：不能使用window.scrollTop)

⑥ 判断一个元素是否已经出现在了可视区域：(此问题可应用在懒加载中)
方法一：计算比较麻烦

需满足条件： xxx.offsetTop（需要递归叠加获取）<= window.pageYOffset+document.documentElement.clientHeight

即该元素距页面顶端的距离 <= window向下滚动隐藏的距离+window的可视区域的高度。

方法二：使用element.getBoundingClientRect().top获取在可视区的位置。

```js
window.addEventListener("scroll", function () {
    let viewPortHeight = window.pageYOffset;
    let offset = box2.getBoundingClientRect().top;
    if (offset < viewPortHeight) {
        if (offset + box2.offsetHeight < 0) {
            console.log("他走了");
        } else {
            console.log("他来啦他来啦");
        }
    }
});
```



## 鼠标坐标

- clientX,clientY: 鼠标在可视区的坐标,可视区即展示在用户面前的页面区域
- pageX,pageY: 鼠标在整个html页面的坐标。一般实际应用使用pageX和pageY

- screenX,screenY: 鼠标在电脑屏幕的坐标，即整个电脑屏幕



## JS 拖动及拖拽功能的实现

### 拖动功能的实现

**前置条件：**

1. 拖动事件的三个过程：鼠标按下mousedown,鼠标移动mousemove,鼠标松开mouseup，鼠标按下后执行mousemove事件。

2. 盒子采用绝对定位，通过left和top属性来修改位置。



**方法一：（直接根据鼠标移动的距离确定元素移动的距离）**

1. 鼠标的坐标通过clientX,clientY获取：
2. 盒子的定位信息：鼠标移动时候的坐标-鼠标按下去时候的坐标+元素初始情况下的offetLeft.

**方法二：**

1. 鼠标的坐标通过pageX,pageY获取：
2. 先计算鼠标在盒子中的坐标，这是不变的。然后在mousemove的时候通过pageX和pageY减去在盒子中的坐标计算出盒子边缘应该修改为的偏移量。



### 拖拽功能的实现

使用html5提供的拖拽API（Drag 和 drop）

拖拽功能涉及的基本事件：

dragstart:在开始拖放元素时触发。（事件源：被拖拽的元素）

这一步需要做的是获取被拖拽元素的id。拖拽事件对象中的dataTransfer属性是专门用来存储拖动过程中的数据的。ev.dataTransfer.setData("key",value)
dragover：在被拖放在某元素内移动时触发。（事件源：目标元素）

阻止dragover的默认事件（不允许被拖拽）
drop：目标元素完全接受被拖放元素时触发。（事件源：目标元素）

阻止drop的默认事件（以链接的形式打开），然后获取之前保存的元素的id ev.dataTransfer.getData("key")，然后将该元素添加到目标元素中。

