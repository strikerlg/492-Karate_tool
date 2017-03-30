//for TKAcal & PKCcal. AAUCAL uses kumite format
function doname(ID,place){
    var idnumber = parseInt(ID);
    
    var grabtitle = document.getElementById("corp").innerHTML;
    var str = grabtitle.split(" ");
    var league = str[0];
    var fightstyle = str[1];
    
    var storage = [];
    if(fightstyle == "Kumite" || league == "AAU")
        {
            var getvalue = document.getElementById("contestantvalue").value;
            var parsevalue = parseInt(getvalue);
            for(var i =0; i < parsevalue; ++i)
                {
                    var value = document.getElementById("idnumber"+i).value;
                    storage.push(value);
                }
        }
    else
        {
            var getvalue = document.getElementById("valueID").value;
            var parsevalue = parseInt(getvalue);
            for(var i =0; i < parsevalue; ++i)
                {
                    var value = document.getElementById("idnum"+i).value;
                    storage.push(value);
                }
        }
        
    var position = place.match(/\d+/)[0];
    storage.splice(position,1);
    var thenum = place.match(/\d+/)[0];
    for(var j = 0; j < storage.length; ++j)
        {
            
            if(ID == storage[j])
                {
                    if(fightstyle == "Kumite" || league == "AAU")
                        {
                            document.getElementById("cont"+thenum).disabled = true;
                        }
                    else
                        {
                            document.getElementById("name"+thenum).disabled = true;
                        }
                }
            else{
                    $.post('php/namegrab.php', 'IDNAME='+idnumber+'&league='+league, function(name) {
                    var changed = JSON.parse(name);
                    var firstn = (changed.firstname);
                    var lastn = (changed.lastname);

                    

                    if(fightstyle == "Kata" )
                        {
                            if(league == "AAU")
                                {
                                    if(ID == 0 || ID == "")
                                        {
                                            document.getElementById("cont"+thenum).value = "";
                                        }
                                    else
                                        {
                                            document.getElementById("cont"+thenum).value = firstn+' '+lastn;
                                        }
                                }
                            else
                                {
                                    if(ID == 0 || ID == "")
                                        {
                                            document.getElementById("name"+thenum).value = "";
                                        }
                                    else
                                        {
                                            document.getElementById("name"+thenum).value = firstn+' '+lastn;
                                        }   
                                }
                        }
                    else
                        {
                            if(ID == 0 || ID == "")
                                {
                                    document.getElementById("cont"+thenum).value = "";
                                }
                            else
                                {
                                    document.getElementById("cont"+thenum).value = firstn+' '+lastn;
                                }
                        }   

                    });
                }
        }
            
     

    
    
}