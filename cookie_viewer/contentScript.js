
chrome.runtime.onMessage.addListener(function(msg, sender){
//   console.log(JSON.stringy(msg));
   mymytoggle(JSON.stringify(msg));
})
var i = 1;

function mymydelete(domain, name){
	alert("DELETE" + domain + " : " + name);
}

function mymyborder(elem){
	elem.style.borderWidth = "1px";
	elem.style.borderColor = "black";
	elem.style.borderStyle = "solid";
}

function mymytoggle(msg){
        var dialog = document.querySelector("dialog")	
	if (dialog){
		document.getElementById('mymydia').innerHTML = ("[" + i + "]");
		++i;
		if (msg){

			var tableRef = document.getElementById('mymytable').getElementsByTagName('tbody')[0];

			var newRow   = tableRef.insertRow();

			var json = JSON.parse(msg);
			if (json){
				var newCell  = newRow.insertCell(0);
				var newText  = document.createTextNode(json.cause);
				newCell.appendChild(newText);

				newCell  = newRow.insertCell(1);
				mymyborder(newCell);
				newText  = document.createTextNode(json.cookie.domain);
				newCell.appendChild(newText);

				newCell  = newRow.insertCell(2);
				mymyborder(newCell);
				newText  = document.createTextNode(json.cookie.name);
				newCell.appendChild(newText);

				newCell  = newRow.insertCell(3);
				mymyborder(newCell);
				newText  = document.createTextNode(json.cookie.expirationDate);
				newCell.appendChild(newText);

				newCell  = newRow.insertCell(4);
				mymyborder(newCell);
				var str = (json.cookie.value.length > 50 ? (json.cookie.value.substr(0, 49) + ' .. ' + json.cookie.value.length) : json.cookie.value);
				newText  = document.createTextNode(str);
				newCell.appendChild(newText);
				
				newCell  = newRow.insertCell(5);
				mymyborder(newCell);
				newText  = document.createTextNode((json.removed ? "True" : "False"));
				newCell.appendChild(newText);

				newCell  = newRow.insertCell(6);
				mymyborder(newCell);
				var onclickStr = ("document.cookie = '" + json.cookie.name + "=; Path=" + json.cookie.path + "Expires=Thu, 01 Jan 1970 00:00:01 GMT;'");
				newCell.innerHTML = ('<button onclick="' + onclickStr + ';">X</button>');
			}
			
		}		
	}
	else{
   		document.body.innerHTML += ('<dialog style="top:10px;right:10px; z-index:9999999;"><h4>My Extension</h4><p id="mymydia">This is a dialog.</p><br>'+
			'<table id="mymytable" border="1"><thead><tr><th>Cause</th><th>Domain</th><th>Name</th><th>Exp</th><th>Value</th>Removed</th><th>Action</th></tr></thead><tbody></tbody></table><br><button>Close</button></dialog>');
        	var dialog = document.querySelector("dialog")
        	dialog.querySelector("button").addEventListener("click", function() {
	            dialog.close()
        	})		
	        dialog.showModal();
	}
}
