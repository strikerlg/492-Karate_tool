$(document).ready(function() { 
    //need to put in comparisons for user error
    $('#addseason').click(function() {
        //grabbing winners
        var first = document.getElementById("first").innerHTML;
        var second = document.getElementById("second").innerHTML;
        var third = document.getElementById("third").innerHTML;
        var fourth = document.getElementById("fourth").innerHTML;
        //need the amount of players for comparing
        var value = document.getElementById("valueID").value;
        var count = parseInt(value);
        //array of winners
        var winners = [];
        
        for(var rowexplore = 0; rowexplore < count; ++rowexplore)
            {
                var namearea = document.getElementById("name"+rowexplore);
                var namevalue = namearea.value;
                winners.push(namevalue);
            }
               
        for(var search = 0; search < count; ++search)
            {
                if(winners[search] == first)
                    {
                        var contestantID = document.getElementById("idnum"+search).value;
                        var IDfirst = parseInt(contestantID);
                    }
                
                if(winners[search] == second)
                    {
                        var contestantID = document.getElementById("idnum"+search).value;
                        var IDsecond = parseInt(contestantID);
                    }
                
                if(winners[search] == third)
                    {
                        var contestantID = document.getElementById("idnum"+search).value;
                        var IDthird = parseInt(contestantID);
                    }
                
                if(winners[search] == fourth)
                    {
                        var contestantID = document.getElementById("idnum"+search).value;
                        var IDfourth = parseInt(contestantID);
                    }
            }     
        $.post('php/updatetkakata.php', 'first=' + IDfirst, function() { 
                      });   
        $.post('php/updatetkakata.php', 'second=' + IDsecond,  function() { 
                      });
        $.post('php/updatetkakata.php', 'third=' + IDthird,  function() { 
                      });
        $.post('php/updatetkakata.php', 'fourth=' + IDfourth,  function(response) { 
            alert(response);
                      });
    });
});