$(document).ready(function(){  
    //need to do specific pages
    var hidestatus = localStorage.getItem("statuslog");
    
    $('#addseason').hide();
    
    if(hidestatus == "PKC")
        {
            $('#addseason').css("display","block");
        }

});