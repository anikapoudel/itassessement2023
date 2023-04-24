function validation()
{
	var name=document.getElementById('name').value;
	var phone=document.getElementById('phone').value;
	var email=document.getElementById('email').value;
	var message=document.getElementById('message').value;
	

	if (name.length<5) {
		text="Enter Valid Name";
		error_message.innerHTML=text;
		return false;

	}
	
	if (isNaN(phone) || phone.length !=10) {
		text="Enter valid phone Number";
		error_message.innerHTML=text;
		return false;

	}

	if (email.indexOf("@")==-1 || email.length <6) {
		text="Enter valid Email";
		error_message.innerHTML=text;
		return false;

	}
	if(message.length<=15)	{
		text="Enter more than 15 characters";
		error_message.innerHTML=text;
		return false;

	}
	alert("Successfully submitted the form!!")
		return true;
}