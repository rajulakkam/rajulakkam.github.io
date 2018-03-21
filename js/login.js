(function($) {	
	$(document).ready(function(){
	$("#submit").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	var params = {
			email : document.getElementById('mail').value, 
			password : document.getElementById('pwd').value
			
		}
	
	console.log(params);
	
	 sendMail(params).then(function(response){
		if(response.success == true){
		window.location.href = "index-login.html"
		
		}
		   alert(response.message);
		
	 }).catch(function(err){
	 
	     alert(err);
	 })
	
	});
	
	
	
	});
	function sendMail(params){
	return new Promise(function(resolve,reject){
	 $.post("http://default-environment.sievi93n7p.ap-south-1.elasticbeanstalk.com/loginUser",
	params).done(function(data){
	resolve(data)
	}).fail(function(err) {
    reject(err);
  })
	})
	};
}(jQuery)); 