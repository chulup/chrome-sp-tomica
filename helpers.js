var SP_CAL = 'http://sp.tomica.ru/forum/sp/mycalendar/mycalendar.php';

function crIFrame(url, iframeName){
	var ifr = document.getElementById(iframeName) || document.createElement('iframe');
	ifr.name = ifr.id = iframeName;
	ifr.src = url;
	document.body.appendChild(ifr);
	return ifr;
}

function unreadCount(){	
	ifr = crIFrame();
	var b = ifr.contentDocument.querySelectorAll('#page-header b')[0];
	return b.firstChild;
}

function tests(){
	var xr = new XMLHttpRequest();
	xr.open('GET', SP_CAL, true);
	xr.onreadystatechang = function(){alert("READY")};
	xr.send(null);

	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js";
	document.getElementsByTagName('head')[0].appendChild(jq);
	return xr;
}

url = SP_CAL;
var callback = function (data) {
	count = $("#page-header b", $(data))[0].innerHTML;
	setBadgeText(count);
};
$.get(url, null, callback, null);
