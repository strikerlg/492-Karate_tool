$(document).ready(function() { 
    $('#addseason').click(function() {
        //grabbing winners
        var first = document.getElementById("first").innerHTML;
        var second = document.getElementById("second").innerHTML;
        var third = document.getElementById("third").innerHTML;
        var fourth = document.getElementById("fourth").innerHTML;
        //need the amount of players for comparing
        var value = document.getElementById("contestantvalue").value;
        var count = parseInt(value);
        //array of winners
        var winners = [];
        
        for(var rowexplore = 0; rowexplore < count; ++rowexplore)
            {
                var namearea = document.getElementById("cont"+rowexplore);
                var namevalue = namearea.value;
                winners.push(namevalue);
            }
               
        for(var search = 0; search < count; ++search)
            {
                if(winners[search] == first)
                    {
                        var contestantID = document.getElementById("idnumber"+search).value;
                        var IDfirst = parseInt(contestantID);
                    }
                
                if(winners[search] == second)
                    {
                        var contestantID = document.getElementById("idnumber"+search).value;
                        var IDsecond = parseInt(contestantID);
                    }
                
                if(winners[search] == third)
                    {
                        var contestantID = document.getElementById("idnumber"+search).value;
                        var IDthird = parseInt(contestantID);
                    }
                
                if(winners[search] == fourth)
                    {
                        var contestantID = document.getElementById("idnumber"+search).value;
                        var IDfourth = parseInt(contestantID);
                    }
            }     
        $.post('php/updatetkakumite.php', 'first=' + IDfirst, function() { 
                      });   
        $.post('php/updatetkakumite.php', 'second=' + IDsecond,  function() { 
                      });
        $.post('php/updatetkakumite.php', 'third=' + IDthird,  function() { 
                      });
        $.post('php/updatetkakumite.php', 'fourth=' + IDfourth,  function(response) { 
            alert(response);
                      });
    });
});