function tkakata(){
   var xmlHttp = createXmlHttpRequestObject();
   
   function createXmlHttpRequestObject()
   {
       var xmlHttp;
       if (window.XMLHttpRequest) 
       {
           // code for IE7+, Firefox, Chrome, Opera, Safari
           xmlHttp = new XMLHttpRequest();
       } 
       else {
               // code for IE6, IE5
               xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
           }
       
       if(!xmlHttp)
           alert("Something went wrong")
       else
           return xmlHttp
   }
   
   function process(){
       if(xmlHttp.readyState==0 || xmlHttp.readyState==4)
           {
               xmlHttp.open("GET", "tkakatagrab.php", true)
               xmlHttp.onreadystatechange = handleServerResponse();
               xmlHttp.send(null);
           }
       else
           {
               setTimeout('process()',1000);
           }
   }
   
   function handleServerResponse()
   {
       if(xmlHttp.readyState==4)
       {
           if(xmlHttp.status==200)
           {
               xmlResponse = xmlHttp.responseXML;
               xmlDocumentElement = xmlResponse.documentElement;
               message = xmlDocumentElement.firstChild.data;
               document.getElementById("displayrank").innerHTML = message;
               setTimeout('process()',1000);
           }
           else
           {
               alert("Database not connecting!")    
           }
       }
   }
}

// $(document).ready(function(){
    
//     $("#button1").click(function() {
        
//         $.ajax({
//             url: "tkakatagrab.php",
//             data: "",
//             dataType: "json",
//             success:function(data){
//                 var elementArray = new Array();
//                 elementArray = data.split("");
                
//                 var fname = elementArray[0];
//                 var lname = elementArrayp[1];
//                 var points = elementArray[2];
                
//             }
            
//         })
//     }
// }

