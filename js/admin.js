
(function($) {	
	$(document).ready(function(){
	$("#submit").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	
		var admin_name = document.getElementById('name').value; 
		var	admin_password = document.getElementById('password').value;
			
	console.log( admin_name );
	if ( admin_name == "ranjith" && admin_password == 123456 ){
		
		window.location.href = "admin.html";
	}
	else
	{
		alert('invalid details')
	}
	 
	});
	
	
	
	});
	
   }(jQuery)); 

	
