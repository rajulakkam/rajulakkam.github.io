
(function($) {	
	$(document).ready(function(){
	$("#submit").click(function(e){
	$("#loading").show();
	e.preventDefault();
	e.stopPropagation();
	var params = {
			customer_email : document.getElementById('inputsm').value, 
			customer_name : document.getElementById('inputdefault').value, 
			customer_mobile : document.getElementById('inputlg').value,
			body_message : document.getElementById('comment').value
		}
	
	console.log(params);
	
	 sendMail(params).then(function(response){
		if(response.success == true){
			$("#loading").hide();
		document.getElementById('inputsm').value=""
		document.getElementById('inputlg').value=""
		document.getElementById('inputdefault').value=""
		document.getElementById('comment').value=""
		}
		   alert(response.message);
		
	 }).catch(function(err){
		
	 
	     alert(err);
	 })
	
	});
	
	
	
	});
	function sendMail(params){
	return new Promise(function(resolve,reject){
	 $.post("http://default-environment.sievi93n7p.ap-south-1.elasticbeanstalk.com/sendMail",
	params).done(function(data){
		 $("#loading").hide();
	resolve(data)
	}).fail(function(err) {
		$("#loading").hide();
    reject(err);
  })
	})
	};
   }(jQuery)); 

	
