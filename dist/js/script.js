document.onload = checkCookie();
/**/
function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		
		if (x==c_name) {
			return unescape(y);
		}
	}
}
/**/
function setCookie() {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + 300);
	var c_value="newsleter_no" + ((300==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie="newsletter" + "=" + c_value;
}
function timeMsg() {
	var t=setTimeout("newsletterOn()",3000);
}
/**/
function checkCookie() {
	var newsletter=getCookie("newsletter");
	if (newsletter!=null && newsletter!="") {
	} else {
		setCookie();
		timeMsg();
	}
}
/**/
function newsletterOn() { 
	document.getElementById("popup_inner").style.display = "block"; 
	document.getElementById("popup_mask").style.display = "block"; 
	document.getElementById("popup_container").style.display = "block"; 
} 

function newsletterOff() { 
	document.getElementById("popup_inner").style.display = "none"; 
	document.getElementById("popup_mask").style.display = "none"; 
	document.getElementById("popup_container").style.display = "none"; 
} 

