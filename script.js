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
			alert("Thank you for your suggestion! Redirecting you to the homepage.");
			var url = window.location.pathname;
			window.location.pathname = url.replace("form.html", "index.html");
		}
	}

	function redirect(){
		alert("Redirecting to homepage");
		var url = window.location.pathname;
		window.location.pathname = url.replace("form", "index");
	}

	function check(id, idtwo){
		var c = document.getElementById(id);
		var d = document.getElementById(idtwo);
		if(c.checked){
			d.style.display="flex";
		} else {
			d.style.display="none";
		}
	}

	function reset_form()
	{
	  //reset form
	  document.getElementById("textbox").reset();
	  document.getElementById("newActivity").style.display = "none";
	  document.getElementById("newCategory").style.display = "none";
	}

	window.addEventListener('load',function(){
		// var board_games = document.getElementById("bg");
		bg.addEventListener('mouseover', function(e){
			bg.style.backgroundColor="rgb(63, 157, 214)";
		});
		bg.addEventListener('mouseout',function(e){
			bg.style.backgroundColor="white";
		});
		cg.addEventListener('mouseover', function(e){
			cg.style.backgroundColor="rgb(63, 157, 214)";
		});
		cg.addEventListener('mouseout',function(e){
			cg.style.backgroundColor="white";
		});
		act.addEventListener('mouseover', function(e){
			act.style.backgroundColor="rgb(63, 157, 214)";
		});
		act.addEventListener('mouseout',function(e){
			act.style.backgroundColor="white";
		});
		ac.addEventListener('mouseover', function(e){
			ac.style.backgroundColor="rgb(63, 157, 214)";
		});
		ac.addEventListener('mouseout',function(e){
			ac.style.backgroundColor="white";
		});
		p.addEventListener('mouseover', function(e){
			p.style.backgroundColor="rgb(63, 157, 214)";
		});
		p.addEventListener('mouseout',function(e){
			p.style.backgroundColor="white";
		});
		sn.addEventListener('mouseover', function(e){
			sn.style.backgroundColor="rgb(63, 157, 214)";
		});
		sn.addEventListener('mouseout',function(e){
			sn.style.backgroundColor="white";
		});
	});