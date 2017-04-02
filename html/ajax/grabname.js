//for TKAcal & PKCcal. AAUCAL uses kumite format
//making some big changes have back up
function doname(ID,place){
    var idnumber = parseInt(ID);
    
    var grabtitle = document.getElementById("corp").innerHTML;
    var str = grabtitle.split(" ");
    var league = str[0];
    var fightstyle = str[1];
    
    
  
    var thenum = place.match(/\d+/)[0];
    
    console.log(ID);
    console.log(idnumber);
    
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
                        var position = place.match(/\d+/)[0];
                        storage.splice(position,1);
                        console.log(storage);

                    if(fightstyle == "Kumite" || league == "AAU")
                        {
                        
                                    //|| ID == ""
                                    if(ID == 0 )
                                        {
                                            document.getElementById("cont"+thenum).value = "Cannot use ID 0";
                                            document.getElementById("cont"+thenum).disabled = true;
                                        }
                                    else
                                        {
                                            if(ID == storage[0])
                                                    {
                                                        document.getElementById("cont"+thenum).value = "Cannot use this ID";
                                                        document.getElementById("cont"+thenum).disabled = true;
                                                    }
                                            else if(firstn == undefined)
                                                {
                                                    document.getElementById("name"+thenum).value = "Not registered";
                                                    document.getElementById("name"+thenum).disabled = true;
                                                }   
                                                else
                                                    {
                                                        document.getElementById("cont"+thenum).value = firstn+' '+lastn;
                                                        document.getElementById("cont"+thenum).disabled = true;
                                                    }     
                                            
                                            storage = [];
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
                                            
                                                if(ID == storage[0])
                                                    {
                                                        document.getElementById("name"+thenum).value = "Cannot use this ID";
                                                        document.getElementById("name"+thenum).disabled = true;
                                                    }
                                                else
                                                    {
                                                        document.getElementById("name"+thenum).value = firstn+' '+lastn;
                                                        document.getElementById("name"+thenum).disabled = true;
                                                    }     
                                            
                                            storage = [];
                                            
                                        }   
                        }   

                    });
                }
        
    
}