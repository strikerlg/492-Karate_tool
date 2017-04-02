$(document).ready(function(){  
    //need to do specific pages
    var hidestatus = localStorage.getItem("statuslog");
    
    $('#addseason').hide();
    
    if(hidestatus == "AAU")
        {
            $('#addseason').css("display","block");
        }
});