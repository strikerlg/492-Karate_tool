//function for making the tables on the click
function maketable() {
        $("#katatable tr:not(:first)").remove();
        var count = 0;
        var table = document.getElementById("katatable");
        var numberofrows = document.getElementById("valueID").value;
        var rowamount = parseInt(numberofrows);
        
        while (count < rowamount) 
        {
            var row = table.insertRow(1);
            row.id = "tbody";
            var cell1 = row.insertCell(0);
            cell1.className = "celltable";
            var cell2 = row.insertCell(1);
            cell2.className = "celltable";
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
            
            cell1.innerHTML = "<input type='text' id='idnum"+count+"'>";
            cell2.innerHTML = "<input type='text' id='name"+count+"'>";
            cell3.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+count+"' id='score'>";
            cell4.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+count+"' id='score'>"; 
            cell5.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+count+"' id='score'>";
            cell6.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+count+"' id='score'>";
            cell7.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+count+"' id='score'>";
            cell8.innerHTML = "<output name='finalscore"+count+"' id='total"+count+"'></output>";
            
            count = count + 1;
        }
    }

//fix
function addrow(){
    var tablecont = document.getElementById("katatable");
    var figurecount = 1;
    var rowvalue = document.getElementById("valueID").value;
    var realrowvalue = parseInt(rowvalue);
    var correctrow = figurecount + realrowvalue;
    
    if(rowvalue == 0)
    {
        alert("Please make a table before adding rows.");
    }
    else
    {
        var rowadd = tablecont.insertRow(correctrow);
            
            var cell1 = rowadd.insertCell(0);
            var cell2 = rowadd.insertCell(1);
            var cell3 = rowadd.insertCell(2);
            
            var cell4 = rowadd.insertCell(3);
            
            var cell5 = rowadd.insertCell(4);
            
            var cell6 = rowadd.insertCell(5);
            
            var cell7 = rowadd.insertCell(6);
            
            var cell8 = rowadd.insertCell(7);
            
        
            cell1.innerHTML = "<input onkeyup='Lookup()' type='text' id='idnum"+correctrow+"'>";
            cell2.innerHTML = "<input type='text' id='name"+correctrow+"'>";
            cell3.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+correctrow+"' id='score'>";
            cell4.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+correctrow+"' id='score'>"; 
            cell5.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+correctrow+"' id='score'>";
            cell6.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+correctrow+"' id='score'>";
            cell7.innerHTML = "<input onkeyup='addscore()' type='text' name='enterscore"+correctrow+"' id='score'>";
            cell8.innerHTML = "<output name='finalscore"+correctrow+"' id='total"+correctrow+"'></output>";
        
        ++figurecount;
    }
}

//if I use the add row got to figure out how to change this
//the take out high and low is still bad
//function for adding scores together
function addscore() {
    var numberofcellsrows =  document.getElementById("valueID").value;
    var amount = parseInt(numberofcellsrows);
   
    
        
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
    
        for (var innercount = 0; innercount < rownumber; ++innercount)
        {
          var totalnumbers = document.getElementById("total"+innercount).value;
          var answers = parseFloat(totalnumbers); 
          arraytotals.push(answers);
        }
        arraytotals.sort(function(a, b){return b-a});

    
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


//the look up function. To pull names from data tables
function Lookup (number) 
    {
        var valuenumber = document.getElementById("valueID").value;
        var rownumber = parseInt(valuenumber);
        
        
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                for(var rowlocation = 0; rowlocation < rownumber; ++rowlocation)
                {
                    document.getElementById("name"+rowlocation).innerHTML = this.responseText;
                }
            }
        };
        xmlhttp.open("GET","getname.php?q="+number,true);
        xmlhttp.send();
    }




