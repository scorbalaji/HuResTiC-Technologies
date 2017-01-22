function myFunction() {
    var username = document.getElementsByName('username')[0].value  
    var password = document.getElementsByName('password')[0].value  
    var output = "Username : " + username + "\n" + "password : " + password 
    console.log(output)
    alert(output)
}
