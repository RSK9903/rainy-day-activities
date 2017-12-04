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
		alert("Thank You!");
		var url = window.location.pathname;
		window.location.pathname = url.replace("form.html", "index.html")
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
function handleFormSubmit() {
    if (window.event) window.event.preventDefault();
	// Get values of inputs
	// Pass values to addNewPost()
    var username= document.getElementById("input-username").value ;
    var caption= document.getElementById("input-caption").value ;
    var picture= document.getElementById("input-picture").value ;

    addNewPost(username,caption,fileLocations[picture]);
}

/**
 * This function create the following div and append it to the #post-list element
	<div class="post">
		<span>{username}</span>
		<img src="{img_src}" alt="{caption}">
		<div id="post-overlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div for opacity 
 * transitions in the post-overlay div
 */
function addNewPost(category, acitivity){       
    var node = document.createElement("DIV");
    var node2 = document.createElement("DIV");
    var span= document.createElement("span");
 node.className="category";
    node2.id="activity";
    node2.innerText=category;
    span.innerText = activity;
    node.appendChild(span);
    node.appendChild(node);
    node.appendChild(node2);
    document.getElementById("category").appendChild(node);


                          
});
                          

function summarize() 
{
.fan-favorites.get

.summary_wrapper.display
  //Summarize all input entered from user and display in "summary-wrapper" div, which is by default hidden.
}

function reset_form() 
{
  //reset form
}

	// Create the parent post div
	// Create a span for the user
	// Create image element
	// Create overlay element
	// Add all child elements (order matters)
	// Add event listeners to post
	// Add post element to post list
}
//var node= document.createElement("post");