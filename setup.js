console.log("helloworld")
var list = document.getElementsByClassName("outline-3");
console.log(list[3])
console.log(list.length)
for(var i = 3 ; i < list.length ; i++){
	list[i].classList.remove("hsExpanded");
	list[i].classList.add("hsCollapsed");
}
