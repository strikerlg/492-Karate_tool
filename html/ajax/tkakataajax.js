function tkakataadd()
{
    var firstplace = document.getElementById("first");
    var firstplacevalue = firstplace.value;
    
    var secondplace = document.getElementById("second");
    var secondplacevalue = secondplace.value;
    
    var thirdplace = document.getElementById("third");
    var thirdplacevalue = thirdplace.value;
    
    var fourthplace = document.getElementById("fourth");
    var fourthplacevalue = fourthplace.value;
    
    if(firstplacevalue == "")
        {
            alert("Please finish match before entering the scores into the season!");
        }
    else{
           var numberofcellsrows =  document.getElementById("valueID").value;
           var amount = parseInt(numberofcellsrows);
        
            for(var findname = 0; findname < amount; ++findname)
                {
                    var namevalue = document.getElementById("name"+findname);
                    var comparisonvalue = namevalue.value;
                    
                    
                    if(comparisonvalue == firstplacevalue)
                        {
                            var firstid = document.getElementById("idnum"+findname);
                            var firstidvalue = parseInt(firstid);
                        }
                    
                    if(comparisonvalue == secondplacevalue)
                        {
                            var secondid = document.getElementById("idnum"+findname);
                            var secondidvalue = parseInt(secondid);
                        }
                    
                    if(comparisonvalue == thirdplacevalue)
                        {
                            var thirdid = document.getElementById("idnum"+findname);
                            var thirdidvalue = parseInt(thirdid);
                        }
                    
                    if(comparisonvalue == fourthplacevalue)
                        {
                            var fourthid = document.getElementById("idnum"+findname)
                            var fourthidvalue = parseInt(fourthid);
                        }
                }
        
        enterscores(firstidvalue,secondidvalue,thirdidvalue,fourthidvalue);
        }
}

function enterscores(value1,value2,value3,value4)
{
    $.ajax({
        url:'tkaadd.php',
        type: 'POST',
        data: {var1: value1, var2: value2, var3: value3, var4: value4}
    });
    
}