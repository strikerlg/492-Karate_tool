$(document).ready(function(){
   $('#login_trigger').click(function() {
        $('#logindiv').css("display", "block")
    }); 
    
    $("#login #cancel").click(function() {
        $(this).parent().parent().hide();
    });
    
    $('#loginbtn').click(function(){
        var usrname = $("#username").val();
        var pswd = $("password").val();
        var radiobtn = $("input[name=organization]:checked").val();
        $.post('php/login.php', 'USERNAME='+usrname+'&PASSWORD='+pswd+'&RADIO='+radiobtn, function(response) {
            alert(response);
        });  
    });
});