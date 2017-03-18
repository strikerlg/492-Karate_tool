$(document).ready(function() {
    $('.button').click(function() {
        var btnvalue = $(this).val();
        $.post('php/datagrab.php', 'clickBtnValue=' + $(this).val(), function(response) {
            var parsed = JSON.parse(response);
            var fname = [];
            var lname = [];
            var dojo = [];
            var kapoints = [];
            var kupoints = [];
            var count = Object.keys(parsed).length;
            
            
            
            for(var i = 0; i < count; i++)
                {
                    var storage1 = (parsed[i].firstname);
                    fname.push(storage1);
                }
            
            for(var j = 0; j < count; j++)
                {
                    var storage2 = (parsed[j].lastname);
                    lname.push(storage2);
                }
            
            for(var k = 0; k < count; k++)
                {
                    var storage3 = (parsed[k].dojo);
                    dojo.push(storage3);
                }
            
            for(var l = 0; l < count; l++)
                {
                    var storage4 = (parsed[l].kata);
                    kapoints.push(storage4);
                }
            
            for(var m = 0; m < count; m++)
                {
                    var storage5 = (parsed[m].kumite);
                    kupoints.push(storage5);
                }
            
            if(btnvalue == "tkakata" || btnvalue == "pkckata" || btnvalue == "aaukata")
                {
                    var tablestart = '<table border="1px" id="seasontable"><tr><td>Place</td><td>First Name</td><td>Last Name</td><td>Dojo</td><td>Points</td></tr></table>';
                    $("#displayrank").html(tablestart);
                    
                    for(var t = 0; t < count; t++)
                        {
                            var place = t + 1;
                            var table = '<tr><td>'+ place+'</td><td>'+fname[t]+'</td><td>'+lname[t]+'</td><td>'+dojo[t]+'</td><td>'+kapoints[t]+'</td></tr>';
                            
                            $("#seasontable").append(table);
                        }
                }
            else
                {
                    var tablestart = '<table border="1px" id="seasontable"><tr><td>Place</td><td>First Name</td><td>Last Name</td><td>Dojo</td><td>Points</td></tr></table>';
                    $("#displayrank").html(tablestart);
                    
                    for(var t = 0; t < count; t++)
                        {
                            var place = t + 1;
                            var table = '<tr><td>'+ place+'</td><td>'+fname[t]+'</td><td>'+lname[t]+'</td><td>'+dojo[t]+'</td><td>'+kupoints[t]+'</td></tr>';
                            
                            $("#seasontable").append(table);
                        }
                }
            
       }); 
    });   
});





