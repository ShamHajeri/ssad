function select_login() {
    document.getElementById('sign_up').style.display="none"
    document.getElementById('login').style.display="unset"
}

function select_sign_up() {
    document.getElementById('sign_up').style.display="unset"
    document.getElementById('login').style.display="none"
}
var user_data =[];
 var user_object=[
    {
        email:"sham@gmail.com",
        password:"123456"
    }
 ]

// validating and add new user
function sign_form(){
    var name = document.getElementById('user_name').value
    var email= document.getElementById('s_email').value
    var password = document.getElementById('s_password').value
    var cpassword= document.getElementById('correct_password').value
    document.getElementById('message').innerHTML=""


    if(password !==cpassword){
        document.getElementById('message').innerHTML="<p> Password is not same </p>"
    }
    else if(password <6 && name.length<4){
        document.getElementById('message').innerHTML="<p> Password must be 6 letter </p><p> User name must be 4 letter  </p>"
    }
   else{
     var data={
        email : email,
        password : password

    }
    console.log(data)
    user_object.push(data)
    console.log(user_object)
    alert('Sign Up successfull')
    
   }

}
// verification of user 
function authentication(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value   
    console.log(email,password)
    var j=0;
    
   for(let i=0; i< user_object.length;i++){
    if(email==user_object[i].email && password==user_object[i].password){
            console.log("login successfull")
            alert(email+' is login successfull')
            j=1;
            return 0;
     }
   }
   if (j==0){
    document.getElementById('message').innerHTML="<p> incorrect password and email </p>"
   }
}




