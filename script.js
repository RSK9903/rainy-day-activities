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

	function submission(){
		alert("Thank You!");
	};

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