//function for making the tables on the click
function maketable() {
        var numberofrows = document.getElementById("valueID").value;
        var rowamount = parseInt(numberofrows);
        if(rowamount < 2 )
            {
                alert("Please enter more players.")
            }
        else
            {
                var count = 0;
                var table = document.getElementById("katatable");
                $("#katatable tr:not(:first)").remove();
                while (count < rowamount) 
                {
                    var row = table.insertRow(1);
                    row.id = "tbody";
                    var cell1 = row.insertCell(0);
                    cell1.className = "celltable";
                    var cell2 = row.insertCell(1);
                    cell2.id = "celltable"+count;
                    var cell3 = row.insertCell(2);
                    cell3.className = "celltable";
                    var cell4 = row.insertCell(3);
                    cell4.className = "celltable";
                    var cell5 = row.insertCell(4);
                    cell5.className = "celltable";
                    var cell6 = row.insertCell(5);
                    cell6.className = "celltable";
                    var cell7 = row.insertCell(6);
                    cell7.className = "celltable";
                    var cell8 = row.insertCell(7);
                    cell8.className = "totalcolumn";

                    cell1.innerHTML = "<input onkeyup='doname(this.value,this.id)' type='text' id='idnum"+count+"'>";
                    cell2.innerHTML = "<input type='text' id='name"+count+"'>";
                    cell3.innerHTML = "<input onkeyup='addscore(this.value,this.id)' type='text' name='enterscore"+count+"' id='score1"+count+"'>";
                    cell4.innerHTML = "<input onkeyup='addscore(this.value,this.id)' type='text' name='enterscore"+count+"' id='score2"+count+"'>"; 
                    cell5.innerHTML = "<input onkeyup='addscore(this.value,this.id)' type='text' name='enterscore"+count+"' id='score3"+count+"'>";
                    cell6.innerHTML = "<input onkeyup='addscore(this.value,this.id)' type='text' name='enterscore"+count+"' id='score4"+count+"'>";
                    cell7.innerHTML = "<input onkeyup='addscore(this.value,this.id)' type='text' name='enterscore"+count+"' id='score5"+count+"'>";
                    cell8.innerHTML = "<output name='finalscore"+count+"' id='total"+count+"'></output>";

                    count = count + 1;
                }
            }
    }


//needed to change up the function so it didn't mess with namegrab.php/grabname.js
//right now it's not doing that messed up thing where it messes with the ID
//function for validating only numbers and decimal
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode != 190 &&(charCode < 48 || charCode > 57)&&(charCode < 96 || charCode > 105)&& charCode != 110)) 
        return false;
    return true;
}

//if I use the add row got to figure out how to change this
//the take out high and low is still bad
//function for adding scores together
function addscore(points,area) {
    var numberofcellsrows =  document.getElementById("valueID").value;
    var amount = parseInt(numberofcellsrows);
    var added = points;
    var parsefloatnum = parseFloat(added);
    console.log(points);
    console.log(area);
    
    if(isNumberKey(parsefloatnum) == false)
        {
            var socrearea = document.getElementById(area).value;
            document.getElementById(area).value = socrearea.substr(0, socrearea.length -1);
        }
    else
        {
             for(var explorerow = 0; explorerow < amount; ++explorerow)
            {
        var arr = document.getElementsByName("enterscore"+explorerow); 
        var tot = 0;
        
            for (var grabint = 0; grabint < arr.length; ++grabint) 
            {
                if(parseFloat(arr[grabint].value))
                tot += parseFloat(arr[grabint].value);
            }
            document.getElementById('total'+explorerow).value = tot;   
            }    
        }
}


function highlow(arr0, arr1, arr2, arr3, arr4){
        var rowcount =  document.getElementById("valueID").value;
        var amountrow = parseInt(rowcount);
        var totalamount = 0;
        
        arr0 = 0;
        arr4 = 0;
        //used to find the right total row
        for(var rightrow = 0; rightrow < amountrow; ++rightrow)
            {
                totalamount = arr0 + arr1 + arr2 + arr3 + arr4;
                document.getElementById('total'+ rightrow).value = totalamount;
            }
}


//function for finding the winners of the scores
function winnerplaces() {
        
        
        var numbofrows = document.getElementById("valueID").value;
        var rownumber = parseInt(numbofrows); 
        var arraytotals = new Array(rownumber);
        var tablenames = [];
    
        for (var innercount = 0; innercount < rownumber; ++innercount)
        {
          var totalnumbers = document.getElementById("total"+innercount).value;
          var answers = parseFloat(totalnumbers); 
          arraytotals.push(answers);
        }
        arraytotals.sort(function(a, b){return b-a});
    
    //seeing if there is any IDs that have been used more than once, unregistered IDS, or ids with 0
    for(var namecount = 0; namecount < rownumber; ++namecount)
        {
            var quickstore = document.getElementById("name"+namecount).value;
            tablenames.push(quickstore);
        }
   
    
    var bad1 = "Cannot use ID 0";
    var bad2 = "Not registered";
    var bad3 = "Cannot use this ID";
    var bad4 = "";
    var bad5 = "Not an ID";
    
 
    var nogo = false;
    for(var notgood = 0; notgood < rownumber; ++notgood)
        {
           
            if( tablenames[notgood] == bad1)
                {
                    alert("One of the IDs are 0.");
                    nogo = true;
                    break;
                }
            else if(tablenames[notgood] == bad2)
                {
                    alert("one of the IDs are ungregistered.");
                    nogo = true;
                    break;
                }
            else if(tablenames[notgood] == bad3)
                {
                    alert("Multiple same IDs.");
                    nogo = true;
                    break;
                }
            else if(tablenames[notgood] == bad4)
                {
                    alert("One of the table names are blank.");
                    nogo = true;
                    break;
                }
            else if(tablenames[notgood] == bad5)
                {
                    alert("One of the IDs is not an ID");
                    nogo = true;
                    break;
                }
            else if(tablenames[notgood] == tablenames[rownumber-1] && nogo==false)
                {
                    for (var outercount = 0; outercount < rownumber; ++outercount)
                    {

        //                Grabbing totals. Used for comparing to the array.
                        var totalvalue = document.getElementById("total"+outercount).value;
                        var conversion = parseFloat(totalvalue);
                        var comparingvalue = conversion; 


                        if(arraytotals[0] == comparingvalue)
                            {
                                var firstplace = document.getElementById("name"+outercount);
                                var firstplacevalue = firstplace.value;
                                document.getElementById("first").innerHTML = firstplacevalue;
                            }

                        if(arraytotals[1] == comparingvalue)
                            {
                                var secondplace = document.getElementById("name"+outercount);
                                var secondplacevalue = secondplace.value;
                                document.getElementById("second").innerHTML = secondplacevalue;
                            }

                        if(arraytotals[2] == comparingvalue)
                            {
                                var thirdplace = document.getElementById("name"+outercount);
                                var thirdplacevalue = thirdplace.value;
                                document.getElementById("third").innerHTML = thirdplacevalue;
                            }

                        if(arraytotals[3] == comparingvalue)
                            {
                                var fourthplace = document.getElementById("name"+outercount);
                                var fourthplacevalue = fourthplace.value;
                                document.getElementById("fourth").innerHTML = fourthplacevalue;
                            }
                    }
                }
        }
    
    }






