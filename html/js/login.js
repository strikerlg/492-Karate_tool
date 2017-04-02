$(document).ready(function(){
    //need to use local storage
    var login_status = false;
    
    //right here going to be an if to keep the signout
    if(localStorage.getItem("statuslog") == "TKA" || localStorage.getItem("statuslog") == "PKC" || localStorage.getItem("statuslog") == "AAU")
        {
             document.getElementById("login_trigger").innerHTML = "signout";
             document.getElementById("login_trigger").id = "signout";
        }
    
   $('body').on('click','#login_trigger', function() {
        $('#logindiv').css("display", "block")
    }); 
    
    $("#login #cancel").click(function() {
        $(this).parent().parent().hide();
    });
    
    $('#loginbtn').click(function(){
        if(!$("#username").val())
            {
                document.getElementById("wrong").innerHTML = "Please enter a username.";
                return false;
            }
        else{
                var usrname = $("#username").val();
            }
        
        if(!$('#password').val())
            {
                document.getElementById("wrong").innerHTML = "Please enter a password.";
                return false;
            }
        else
            {
                var pswd = $("#password").val();
            }
        
        
        if(!$("input[name=organization]:checked").val())
            {
                document.getElementById("wrong").innerHTML = "Please select an organization.";
                return false;
            }
        else
            {
                var radiobtn = $("input[name=organization]:checked").val();   
            }
        
        $.post('php/login.php', 'USERNAME='+usrname+'&PASSWORD='+pswd+'&RADIO='+radiobtn, function(response) {
            var changed = JSON.parse(response);
            var booleans = [];
            var count = Object.keys(changed).length;
            
            for(var i = 0; i < count; ++i)
                {
                    var currentbool = (changed[i].Hasmember);
                    booleans.push(currentbool);
                }
            
            
            for(var j = 0; j < count; ++j)
                {
                    if(booleans[j] == 'True')
                        {
                            login_status = true;
                        }
                }
            //right here
            if(login_status == true)
                {
                    if(radiobtn == 'TKA')
                        {
                          localStorage.setItem("statuslog", "TKA");  
                        }
                    else if(radiobtn == 'PKC')
                        {
                           localStorage.setItem("statuslog", "PKC");
                        }
                    else
                        {
                            localStorage.setItem("statuslog", "AAU");
                        }
                    document.getElementById("login_trigger").innerHTML = "signout";
                    document.getElementById("login_trigger").id = "signout";
                    $('#logindiv').hide();
                    setTimeout(function() { alert("Successfully logged in!"); }, 500);
                }
            else
                {
                    document.getElementById("wrong").innerHTML = "Username or password is incorrect.";
                }
            
        });  
    });
    
    
    //right here removing cookie and changing signout back to login trigger
    $('body').on('click','#signout', function() {
        login_status = false;
        localStorage.removeItem("statuslog");
        $('#signout').html("admin login");
        $('#signout').attr("id", "login_trigger");
        setTimeout(function() { alert("Successfully signed out!"); }, 500);
    });
    
});