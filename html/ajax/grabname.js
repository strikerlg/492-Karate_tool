//for TKAcal & PKCcal. AAUCAL uses kumite format
function doname(ID,place){
    var idnumber = parseInt(ID);
    
    var grabtitle = document.getElementById("corp").innerHTML;
    var str = grabtitle.split(" ");
    var league = str[0];
    var fightstyle = str[1];
    
    var contestantnumber = parseInt(ID);
    
    
  
    var thenum = place.match(/\d+/)[0];
    
            //changed
            if(ID == "")
                {
                    if(fightstyle == "Kumite" || league == "AAU")
                        {
                            document.getElementById("cont"+thenum).value = "";
                            document.getElementById("cont"+thenum).disabled = false;
                        }
                    else
                        {
                            document.getElementById("name"+thenum).value = "";
                            document.getElementById("name"+thenum).disabled = false;
                        }   
                }
            else if(isNumber(contestantnumber) == false)
                {
                    if(fightstyle == "Kumite" || league == "AAU")
                        {
                            document.getElementById("cont"+thenum).value = "Not an ID";
                            document.getElementById("cont"+thenum).disabled = true;
                            var idarea = document.getElementById(place).value;
            				document.getElementById(place).value = idarea.substr(0, idarea.length -1);
                        }
                    else
                        {
                            document.getElementById("name"+thenum).value = "Not an ID";
                            document.getElementById("name"+thenum).disabled = true;
                            var idarea = document.getElementById(place).value;
            				document.getElementById(place).value = idarea.substr(0, idarea.length -1);
                        }     
                }
            else{
                    $.post('php/namegrab.php', 'IDNAME='+idnumber+'&league='+league, function(name) {
                    var changed = JSON.parse(name);
                    var firstn = (changed.firstname);
                    var lastn = (changed.lastname);
                        
                    //storing ids to see if there is multiple ids
                    var storage = [];
                    if(fightstyle == "Kumite" || league == "AAU")
                        {
                            var parsevalue = document.getElementById("contestantvalue").value;
                            var count = parseInt(parsevalue);
                            for(var i = 0; i < count; ++i)
                                {
                                    var valuename = document.getElementById("idnumber"+i).value;
                                    var holder = parseInt(valuename);
                                    storage.push(holder);
                                }
                        }
                    else
                        {
                            var parsevalue = document.getElementById("valueID").value;
                            var count = parseInt(parsevalue);
                            for(var i = 0; i < count; ++i)
                                {
                                    var valuename = document.getElementById("idnum"+i).value;
                                    var holder = parseInt(valuename);
                                    storage.push(holder);
                                }
                        }


                    if(fightstyle == "Kumite" || league == "AAU")
                        {
                        
                                    //|| ID == ""
                                    if(ID == 0)
                                        {
                                            document.getElementById("cont"+thenum).value = "Cannot use ID 0";
                                            document.getElementById("cont"+thenum).disabled = true;
                                        }
                                    else if(firstn == undefined)
                                        {
                                            document.getElementById("cont"+thenum).value = "Not registered";
                                            document.getElementById("cont"+thenum).disabled = true;
                                        }
                                    else
                                        {
                                            for(var arrayrun = 0; arrayrun < count; ++ arrayrun)
                                                {
                                                    if(ID == storage[arrayrun])
                                                        {
                                                            var position = arrayrun;
                                                        }
                                                }
                                            
                                            storage.splice(position,1);        
                                         
                                            for(var findmatch = 0; findmatch < count; ++findmatch)
                                                {
                                                    if(ID == storage[findmatch])
                                                    {
                                                        document.getElementById("cont"+thenum).value = "Cannot use this ID";
                                                        document.getElementById("cont"+thenum).disabled = true;
                                                        break;
                                                    }
                                                else if(storage[findmatch] == storage[count])
                                                    {
                                                        document.getElementById("cont"+thenum).value = firstn+' '+lastn;
                                                        document.getElementById("cont"+thenum).disabled = true;
                                                    }

                                                }
                                        } 
                                    
                        }
                    else
                        {
                            //|| ID == ""
                                    if(ID == 0)
                                        {
                                            document.getElementById("name"+thenum).value = "Cannot use ID 0";
                                            document.getElementById("name"+thenum).disabled = true;
                                        }
                                    else if(firstn == undefined)
                                        {
                                            document.getElementById("name"+thenum).value = "Not registered";
                                            document.getElementById("name"+thenum).disabled = true;
                                        }
                                    else
                                        {
                                            for(var arrayrun = 0; arrayrun < count; ++ arrayrun)
                                                {
                                                    if(ID == storage[arrayrun])
                                                        {
                                                            var position = arrayrun;
                                                        }
                                                }
                                            
                                            storage.splice(position,1);        
                                         
                                            for(var findmatch = 0; findmatch < count; ++findmatch)
                                                {
                                                    if(ID == storage[findmatch])
                                                    {
                                                        document.getElementById("name"+thenum).value = "Cannot use this ID";
                                                        document.getElementById("name"+thenum).disabled = true;
                                                        break;
                                                    }
                                                else if(storage[findmatch] == storage[count])
                                                    {
                                                        document.getElementById("name"+thenum).value = firstn+' '+lastn;
                                                        document.getElementById("name"+thenum).disabled = true;
                                                    }

                                                }
                                        }   
                        }   

                    });
                }
    
    
}

function isNumber(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105))
        return false;
    return true;
}