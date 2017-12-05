// window.addEventListener("load",function(){
// 	var

// });
	var timeout	= 100;
	var closetimer	= 0;
	var ddmenuitem	= 0;

	// open hidden layer
	function mopen(id)
	{
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.display = 'none';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.display = 'block';

	}
	// close showed layer
	function mclose()
	{
	  if(ddmenuitem) ddmenuitem.style.display = 'none';
	}

	// go close timer
	function mclosetime()
	{
	  closetimer = window.setTimeout(mclose, timeout);
	}

	// cancel close timer
	function mcancelclosetime()
	{
	  if(closetimer)
		{
			window.clearTimeout(closetimer);
			closetimer = null;
		}
	}

	function clear_input(id){
		var f = document.getElementById(id);
		f.placeholder="";
	}

	function revert(id, place){
		var r = document.getElementById(id);
		r.placeholder= place;
	}

	function submission(){
		var x = document.forms["sugg-form"]["first-name"].value;
		var robot = document.forms["sugg-form"]["robot"];
		if(x==""){
			alert("Please fill out your first name.");
			return false;
		} else if(robot.value=="2" || (robot[0].checked==false && robot[1].checked==false)){
			alert("Please designate that you are not a robot.");
			return false;
		} else {
			alert("Thank you for your suggestion!");
			var url = window.location.pathname;
			window.location.pathname = url.replace("form.html", "index.html");
		}
	}

	function redirect(){
		var url = window.location.pathname;
		window.location.pathname = url.replace("form", "index");
	}

	function check(id, idtwo){
		var c = document.getElementById(id);
		var d = document.getElementById(idtwo);
		if(c.checked){
			d.style.display="inline";
		} else {
			d.style.display="none";
		}
	}

	// var submit = document.getElementById('button');
	// submit.addEventListener("click", function(e) {
	// 	if(submit.value="Submit"){
	// 		alert("Thank You!");
	// 	}
	// });

	function reset_form()
	{
	  //reset form
	  document.getElementById("textbox").reset();
	  document.getElementById("newActivity").style.display = "none";
	  document.getElementById("newCategory").style.display = "none";
	}

	// close layer when click-out
	//document.onclick = mclose;

	// const mq = window.matchMedia("(max-width:480px)");
	// if (mq.matches) {
	//   	// window width is at least 500px
	//   	var t = document.getElementById("test");
	// 	t.src="images/cloud.png";
	// } else {
 //  		// window width is less than 500px
 //  		var t = document.getElementById("test");
	// 	t.src="images/ideacloud.png";
	// }

	// function mediaqueryresponse(mql){
	//  	if (mql.matches){ // if media query matches
	//   		var t = document.getElementById("test");
	// 		t.src="images/cloud.png";
	//  	}
	//  	else{
	//  		var t = document.getElementById("test");
	// 		t.src="images/ideacloud.png";
	//  	}
	// }

	// var mql = window.matchMedia("screen and (max-width: 480px)")
	// mediaqueryresponse(mql) // call listener function explicitly at run time
	// mql.addListener(mediaqueryresponse) // attach listener function to listen in on state changes

	// if (matchMedia) {

	// }
	// const mq = window.matchMedia("(max-width: 480px)");
	//   	mq.addListener(WidthChange);
	//   	WidthChange(mq);

	// // media query change
	// function WidthChange(mq) {
	//   if (mq.matches) {
	//  //    var pic = document.getElementsByClassName("logo");
	//  //    var wut = pic[0].document.getElementsByTagName("img");
	// 	// wut[0].src="images/cloud.png";
	// 	var t = document.getElementById("test");
	// 	t.src="images/cloud.png";
	// 	t.style.height = "10px";
	// 	t.style.width = "auto";
	//   } else {
	//     // window width is less than 500px
	//     var t = document.getElementById("test");
	// 	t.src="images/ideacloud.png";
	//   }

	// }
function handleFormSubmit() {
    var first_name = document.getElementById("first").value;
    var last_name = document.getElementById("last-name").value;
    var category= document.getElementById("category").value ;
    var activity= document.getElementById("activity").value ;

    addNewPost(first_name, last_name, category,activity);
}

function addNewPost(fName, lName, category, activity){     
    var d = document.createElement("div");
    d.className="post";
    var sec = document.getElementById("summary");
    sec.appendChild(d);
    var p = document.createElement("p");
    p.id="name";
    var name = document.createTextNode(fName + " " + lName);
    p.appendChild(name);
    d.appendChild(p);
    var node2 = document.createElement("div");
    
    
 //    node.addEventListener("mouseover", function (e){
 //        node2.style.transition = "opacity 0.5s";
 //        node2.style.opacity = 1.0;
	// });
 //    node.addEventListener("mouseout", function (e) {
 //        node2.style.transition = "opacity 0.5s";
 //        node2.style.opacity = 0; 
                          
	// });
};
                          

// function summarize() 
// {
// 	.fan-favorites.get;

// 	.summary_wrapper.display;
 
// }

// function reset_form() 
// {
//   //reset form
// }

// var node= document.createElement("post");