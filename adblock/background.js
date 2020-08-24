var enabled = true;
window.onload=function(){    
    //document.getElementById('blocked-li-fkfk').innerHTML = "";
}

chrome.webRequest.onBeforeRequest.addListener(
	function(details) {        
	
        /*var ul = document.getElementById("blocked-li-fkfk");
        var li = document.createElement(details.url);
        var children = ul.children.length + 1
        li.setAttribute("id", "element"+children)
        li.appendChild(document.createTextNode("Element "+children));
        ul.appendChild(li);*/

        console.log("blocking:", details.url);
		return {cancel: enabled };
	},
	{urls: blocked_domains},
	["blocking"]
);