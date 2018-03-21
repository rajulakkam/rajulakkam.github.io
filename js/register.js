
(function($) {	
	$(document).ready(function(){
	$("#submit").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	var params = {
			first_name	 : document.getElementById('fname').value, 
			last_name	 : document.getElementById('lname').value, 
			name	 	 : document.getElementById('fullname').value, 
			email		 : document.getElementById('email').value,
			mobileno 	 : document.getElementById('mobile').value,
			batch   	 : document.getElementById('batch').value,
			password     : document.getElementById('password').value
		}
	
	console.log(params);
	
	 sendMail(params).then(function(response){
		if(response.success == true){
		document.getElementById('fname').value=""
		document.getElementById('lname').value=""
		document.getElementById('fullname').value=""
		document.getElementById('email').value=""
		document.getElementById('mobile').value=""
		document.getElementById('batch').value=""
		document.getElementById('password').value=""
		}
		   alert(response.message);
		
	 }).catch(function(err){
	 
	     alert(err);
	 })
	
	});
	
	
	
	});
	function sendMail(params){
	return new Promise(function(resolve,reject){
	 $.post("http://default-environment.sievi93n7p.ap-south-1.elasticbeanstalk.com/signup",
	params).done(function(data){
	resolve(data)
	}).fail(function(err) {
    reject(err);
  })
	})
	};
   }(jQuery)); 

	
