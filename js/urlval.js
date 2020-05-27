var url="https://djgaadi.in";

function Login()
{ 
	var Username=$('#username').val();
	var Password=$('#password').val();

	if(Username=='')
	{
		alert("UserName can not be blank");
		return false;
	}
	if(Password=='')
	{
		alert("Password can not be blank");
		return false;
	}
	alert("dddd");
	var API = url+"Apicontroller/login";
	$.post(API,{Username:username,Password:password}, function(result)
	{
		var res = result;
		console.log(res);

	});
}