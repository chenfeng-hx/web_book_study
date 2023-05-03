/**
 * 当前代码编辑信息:
 *    由用户 尘封 使用 WebStorm 在 “web面试” 中
 *    于 2023-05-02 15:50:01 编写而成！
 *    祝你食用愉快！！！
 */

let ul = document.querySelector("ul");
ul.onclick = function (e) {     //e指event,事件对象
	let target = e.target || e.srcElement;        //target获取触发事件的目标(li)
	if (target.nodeName.toLowerCase() === 'li') {       //目标(li)节点名转小写字母，不转的话是大写字母
		alert(target.innerHTML)
	}
}